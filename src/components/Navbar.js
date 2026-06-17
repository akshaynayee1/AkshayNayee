import React, { useEffect, useState, useRef } from "react";
import Style from "./Navbar.module.scss";
import { Box } from "@mui/material";
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { info } from "../info/Info";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { name: "Home",   path: "/" },
  { name: "About",  path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
];

export default function Navbar({ darkMode, handleClick }) {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location                   = useLocation();
  const pillRef                    = useRef(null);
  const linkRefs                   = useRef([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const movePill = (el) => {
    if (!pillRef.current || !el) return;
    const parent = el.parentElement.getBoundingClientRect();
    const rect   = el.getBoundingClientRect();
    pillRef.current.style.left    = `${rect.left - parent.left}px`;
    pillRef.current.style.width   = `${rect.width}px`;
    pillRef.current.style.opacity = "1";
  };

  const hidePill = () => {
    if (pillRef.current) pillRef.current.style.opacity = "0";
  };

  return (
    <>
      <Box
        component="nav"
        className={`${Style.navbar} ${darkMode ? Style.navbarDark : Style.navbarLight} ${scrolled ? Style.scrolled : ""}`}
      >
        <Box className={Style.container}>

          {/* Logo */}
          <a href="/" className={`${Style.logo} ${darkMode ? Style.darkText : Style.lightText}`}>
            <span className={Style.logoName}>
              {"Akshay".split("").map((c, i) => <span key={i}>{c}</span>)}
              <span>&nbsp;</span>
              {"Nayee".split("").map((c, i) => (
                <span key={i + 20} className={Style.logoLastName}>{c}</span>
              ))}
            </span>
            <span className={Style.availDot} title="Available for work" />
          </a>

          {/* Center nav — desktop */}
          <Box
            className={Style.centerLinks}
            onMouseLeave={hidePill}
          >
            {/* Sliding pill */}
            <div className={Style.navPill} ref={pillRef} />

            {navLinks.map((link, i) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  ref={el => (linkRefs.current[i] = el)}
                  onMouseEnter={() => movePill(linkRefs.current[i])}
                  className={`${Style.navLink} ${active ? Style.navLinkActive : ""} ${darkMode ? Style.darkText : Style.lightText}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </Box>

          {/* Right */}
          <Box className={Style.right}>
            <a href="mailto:akshaynayee2@gmail.com" className={`${Style.hireBtn} ${Style.hideOnMobile}`}>
              <span className={Style.hireBtnShimmer} />
              Let's Connect
            </a>
            <Toggler darkMode={darkMode} handleClick={handleClick} />
            <button
              className={`${Style.menuBtn} ${darkMode ? Style.darkIcon : Style.lightIcon} ${menuOpen ? Style.menuBtnOpen : ""}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </Box>

        </Box>
      </Box>

      {/* Mobile full-screen overlay */}
      <div className={`${Style.mobileOverlay} ${menuOpen ? Style.mobileOverlayOpen : ""} ${darkMode ? Style.overlayDark : Style.overlayLight}`}>
        <div className={Style.overlayDecor}>MENU</div>
        <div className={Style.overlayBlob} />
        <nav className={Style.mobileNav}>
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${Style.mobileLink} ${location.pathname === link.path ? Style.mobileLinkActive : ""}`}
              style={{ animationDelay: menuOpen ? `${i * 0.07 + 0.05}s` : "0s" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className={Style.mobileLinkNum}>0{i + 1}</span>
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:akshaynayee2@gmail.com"
            className={Style.mobileCta}
            style={{ animationDelay: menuOpen ? `${navLinks.length * 0.07 + 0.1}s` : "0s" }}
          >
            Let's Connect ↗
          </a>
        </nav>
      </div>
    </>
  );
}
