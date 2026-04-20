/**
 * Sync French with English: fills empty / missing strings in src/translations/fr.js using DeepL.
 *
 *   DEEPL_API_KEY=xxx node scripts/translate-missing-fr.mjs
 *   node scripts/translate-missing-fr.mjs --dry-run
 *
 * Optional: DEEPL_API_URL=https://api.deepl.com/v2/translate (Pro; default is api-free.deepl.com)
 */
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const enPath = join(root, "src/translations/en.js");
const frPath = join(root, "src/translations/fr.js");

const apiKey = process.env.DEEPL_API_KEY;
const apiUrl =
  process.env.DEEPL_API_URL || "https://api-free.deepl.com/v2/translate";

async function translateLine(text) {
  if (!apiKey) {
    throw new Error("DEEPL_API_KEY is not set.");
  }
  const body = new URLSearchParams();
  body.append("auth_key", apiKey);
  body.append("text", text);
  body.append("source_lang", "EN");
  body.append("target_lang", "FR");

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`DeepL error ${res.status}: ${errText}`);
  }
  const data = await res.json();
  return data.translations[0].text;
}

/** Deep-merge EN into FR structure; translate where FR string is missing/empty */
async function mergeLocales(en, fr) {
  if (typeof en === "string") {
    if (typeof fr === "string" && fr.trim() !== "") {
      return fr;
    }
    return await translateLine(en);
  }

  if (Array.isArray(en)) {
    const frArr = Array.isArray(fr) ? fr : [];
    const out = [];
    for (let i = 0; i < en.length; i++) {
      const ev = en[i];
      const fv = frArr[i];
      if (typeof ev === "string") {
        if (typeof fv === "string" && fv.trim() !== "") {
          out[i] = fv;
        } else {
          out[i] = await translateLine(ev);
        }
      } else if (ev && typeof ev === "object" && !Array.isArray(ev)) {
        out[i] = await mergeLocales(ev, fv);
      } else {
        out[i] = fv !== undefined ? fv : ev;
      }
    }
    return out;
  }

  if (en && typeof en === "object") {
    const base = fr && typeof fr === "object" && !Array.isArray(fr) ? { ...fr } : {};
    for (const key of Object.keys(en)) {
      base[key] = await mergeLocales(en[key], base[key]);
    }
    return base;
  }

  return fr !== undefined ? fr : en;
}

function countMissing(en, fr) {
  if (typeof en === "string") {
    return typeof fr !== "string" || fr.trim() === "" ? 1 : 0;
  }
  if (Array.isArray(en)) {
    const frArr = Array.isArray(fr) ? fr : [];
    let n = 0;
    for (let i = 0; i < en.length; i++) {
      if (typeof en[i] === "string") {
        if (typeof frArr[i] !== "string" || frArr[i].trim() === "") n++;
      } else if (en[i] && typeof en[i] === "object") {
        n += countMissing(en[i], frArr[i]);
      }
    }
    return n;
  }
  if (en && typeof en === "object") {
    let n = 0;
    for (const key of Object.keys(en)) {
      n += countMissing(en[key], fr?.[key]);
    }
    return n;
  }
  return 0;
}

const enModule = await import(pathToFileURL(enPath).href);
const en = enModule.en;

let fr = {};
try {
  const frModule = await import(pathToFileURL(frPath).href + "?t=" + Date.now());
  fr = frModule.fr ?? {};
} catch {
  console.warn("Could not import fr.js (missing or invalid); starting with empty FR object.");
}

const missingBefore = countMissing(en, fr);
console.log(`Missing French leaf strings (approx.): ${missingBefore}`);

if (missingBefore === 0) {
  console.log("fr.js is already complete relative to en.js.");
  process.exit(0);
}

if (process.argv.includes("--dry-run")) {
  console.log("Dry run: not writing files. Remove --dry-run and set DEEPL_API_KEY to translate.");
  process.exit(0);
}

if (!apiKey) {
  console.error("Set DEEPL_API_KEY.");
  process.exit(1);
}

const merged = await mergeLocales(en, fr);
const out =
  "export const fr = " + JSON.stringify(merged, null, 2) + ";\n";
writeFileSync(frPath, out, "utf8");
console.log(`Wrote ${frPath}`);

const missingAfter = countMissing(en, merged);
console.log(`Remaining missing after merge: ${missingAfter}`);
