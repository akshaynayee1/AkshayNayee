import React, { useEffect, useState, useRef } from "react";
import Style from "./Navbar.module.scss";
import { Box } from "@mui/material";
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import MenuIcon      from "@mui/icons-material/Menu";
import CloseIcon     from "@mui/icons-material/Close";
import LinkedInIcon  from "@mui/icons-material/LinkedIn";
import GitHubIcon    from "@mui/icons-material/GitHub";
import MailIcon      from "@mui/icons-material/Mail";
import PhoneIcon     from "@mui/icons-material/Phone";

const overlaySocials = [
  { href: "https://www.linkedin.com/in/akshaynayee1/", Icon: LinkedInIcon },
  { href: "https://github.com/akshaynayee1",           Icon: GitHubIcon   },
  { href: "mailto:akshaynayee2@gmail.com",             Icon: MailIcon     },
  { href: "tel:+18145044741",                          Icon: PhoneIcon    },
];

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
        <div className={Style.overlayAccent} />
        <div className={Style.overlayBlob} />
        <div className={Style.overlayBlob2} />
        <div className={Style.overlayDecor}>MENU</div>

        <nav className={Style.mobileNav}>
          <p className={Style.overlayEyebrow}>Navigate</p>

          <div className={Style.mobileLinks}>
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${Style.mobileLink} ${location.pathname === link.path ? Style.mobileLinkActive : ""}`}
                style={{ animationDelay: menuOpen ? `${i * 0.08 + 0.05}s` : "0s" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className={Style.mobileLinkNum}>0{i + 1}</span>
                <span className={Style.mobileLinkName}>{link.name}</span>
                <span className={Style.mobileLinkArrow}>↗</span>
              </Link>
            ))}
          </div>

          <div className={Style.overlayFooter} style={{ animationDelay: menuOpen ? `${navLinks.length * 0.08 + 0.1}s` : "0s" }}>
            <div className={Style.overlaySocials}>
              {overlaySocials.map(({ href, Icon }) => (
                <a key={href} href={href} className={Style.overlaySocialBtn}
                   target={href.startsWith('http') ? '_blank' : undefined}
                   rel="noopener noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
            <a href="mailto:akshaynayee2@gmail.com" className={Style.mobileCta}>
              Let's Connect ↗
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
