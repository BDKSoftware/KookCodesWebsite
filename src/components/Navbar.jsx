import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa";


export const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function changeBackground() {
    if (window.scrollY >= window.innerHeight - 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div
        className={navBar == true ? "navContainer navActive" : "navContainer"}
      >
        <div className="navLogoContainer">
          <img src={"logo.png"} alt="KookCodes Logo" loading="eager" />
        </div>
        <div className="navLinks">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Projects">Portfolio</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="navIcon">
          <button className="navButton" onClick={() => setShowMenu(!showMenu)}>
            <FaBars size={20} color={"#ffffff"} />
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="navMobileLinks">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Projects">Portfolio</a>
          <a href="#Contact">Contact</a>
        </div>
      )}
    </>
  );
};
