import { useState } from "react";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { pdaLogo } from "../assets/images";
import Menu from "./Menu";

const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    } else {
      setIsMenuVisible(true);
    }
  };

  const handleClick = () => {
    setIsMenuVisible(false);
  };

  return (
    <header className="w-full h-24 fixed top-0 left-0 z-50">
      <div className="w-full h-3 bg-orange relative z-10"></div>
      <nav className="w-full shadow-3xl bg-white  flex justify-around items-center relative z-10">
        <a href="/">
          <img
            className="pt-3 pb-3"
            src={pdaLogo}
            alt="Logo"
            width={150}
            height={40}
          />
        </a>
        <div>
          <input
            type="checkbox"
            className="hidden openSidebarMenu"
            id="openSidebarMenu"
          ></input>
          <label
            htmlFor="openSidebarMenu"
            className="sidebarIconToggle cursor-pointer absolute top-[22px] lg:right-[300px] w-[35px] h-[35px] z-[99] "
            onClick={toggleMenu}
          >
            <div className="spinner diagonal part-1 w-full h-[3px] bg-black absolute "></div>
            <div className="spinner horizontal w-full h-[3px] bg-black absolute mt-[10px]"></div>
            <div className="spinner diagonal part-2 w-full h-[3px] bg-black absolute mt-[10px]"></div>
            <span>
              <p className="font-poppins font-medium items-center mt-2 ">
                {" "}
                Menu
              </p>
            </span>
          </label>
        </div>
      </nav>
      <div className="h-28"></div>

      <div
        className={`absolute left-0 w-full bg-white bg-opacity-90 transform transition-transform duration-1000 ease-in-out ${
          isMenuVisible ? "translate-y-[-0%]" : "translate-y-[-200%]"
        }`}
        style={{
          top: "100px",
          zIndex: 1,
        }}
      >
        <Menu onLinkClick={handleClick} />
      </div>
    </header>
  );
};

export default Nav;
