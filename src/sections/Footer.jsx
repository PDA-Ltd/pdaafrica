import { footerLinks, whiteMedia } from "../constants";
import { footerlogo, line } from "../assets/images";

const Footer = () => {
  return (
    <footer id="footer" className="max-container min-h-full ">
      <div className="flex flex-row justify-between">
        <a
          href="https://pdaghana.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={footerlogo} alt="logo" width={120} height={40} />
        </a>
        <div className="flex gap-5 flii">
          {whiteMedia.map((icon) => (
            <div className="flex" key={icon.alt}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-white h-1 w-full mt-10"></div> */}
      <div>
        <img src={line} alt="line" className="w-full mt-10" />
      </div>

      <div className="flex flex-1 justify-between gap-10 mt-10 flex-wrap">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="font-poppins text-white font-semibold text-xl mb-10">
              {section.title}
            </h4>
            <ul>
              {section.links.map((link) => (
                <li
                  className="font-poppins text-base text-white hover:text-black mt-5"
                  key={link.name}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <img src={line} alt="line" className="w-full mt-10" />
      </div>

      <div className="flex mt-10 justify-end">
        <p className="font-poppins text-sm text-white">
          Copyright 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
