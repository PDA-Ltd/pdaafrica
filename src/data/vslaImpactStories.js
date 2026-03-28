import { comfort, emmanuel } from "../assets/images";

export const VSLA_IMPACT_STORY_SLUGS = ["comfort", "emmanuel"];

const IMAGES = {
  comfort,
  emmanuel,
};

export function isValidVslaStorySlug(slug) {
  return VSLA_IMPACT_STORY_SLUGS.includes(slug);
}

/** Cards for index / Impact page */
export function getVslaImpactStorySummaries(t) {
  return VSLA_IMPACT_STORY_SLUGS.map((slug) => ({
    slug,
    name: t.stories[slug].name,
    location: t.stories[slug].location,
    group: t.stories[slug].group,
    image: IMAGES[slug],
    introduction: t.stories[slug].introduction,
  }));
}

/** Full record for detail page */
export function getVslaImpactStoryDetail(t, slug) {
  if (!isValidVslaStorySlug(slug)) return null;
  const s = t.stories[slug];
  return {
    slug,
    name: s.name,
    location: s.location,
    group: s.group,
    image: IMAGES[slug],
    story: {
      introduction: s.introduction,
      seeingPossibilities: s.seeingPossibilities,
      takingRisks: s.takingRisks,
      learningToTrack: s.learningToTrack,
      learningToSave: s.learningToSave,
      rethinkingSpending: s.rethinkingSpending,
      strengtheningFamily: s.strengtheningFamily,
      conclusion: s.conclusion,
    },
  };
}

export function getAdjacentVslaStorySlugs(slug) {
  const i = VSLA_IMPACT_STORY_SLUGS.indexOf(slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: i > 0 ? VSLA_IMPACT_STORY_SLUGS[i - 1] : null,
    next: i < VSLA_IMPACT_STORY_SLUGS.length - 1 ? VSLA_IMPACT_STORY_SLUGS[i + 1] : null,
  };
}
