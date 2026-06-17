import React, { useEffect, useState } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import Style from "./Navbar.module.scss";
import { Box, IconButton, Drawer } from "@mui/material";
import Toggler from "./home/Toggler";
import { Link } from "react-router-dom";
import { info } from "../info/Info";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar({ darkMode, handleClick }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  //const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => Splitting(), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleSidebar = () => {
    if (sidebarOpen) {
      setClosing(true);
      setTimeout(() => { setSidebarOpen(false); setClosing(false); }, 400);
    } else {
      setSidebarOpen(true);
    }
  };

  const navLinks = [
    { name: "Home",   path: "/" },
    { name: "About",  path: "/about" },
    { name: "Resume", path: "/portfolio" },
    { name: "Blogs",  path: "/blogs" },
  ];

  return (
    <Box
      component="nav"
      className={`${Style.navbar} ${darkMode ? Style.navbarDark : Style.navbarLight} ${scrolled ? Style.scrolled : ""}`}
    >
      <Box className={Style.container}>

        {/* Left: Avatar + Logo */}
        <Box className={Style.left}>
          <img
            src={info.selfPortrait}
            alt={`${info.firstName} ${info.lastName}`}
            className={`${Style.avatar} ${Style.shadowed}`}
          />
          <a href="/" className={`${Style.logo} ${darkMode ? Style.darkText : Style.lightText}`}>
            {"Akshay".split("").map((char, i) => (
              <span key={i} style={{ "--char-index": i }}>{char}</span>
            ))}
            &nbsp;
            {"Nayee".split("").map((char, i) => (
              <span key={i + 20} style={{ "--char-index": i + 20 }}>{char}</span>
            ))}
          </a>
        </Box>

        {/* Right */}
        <Box className={Style.right}>
          <a href="mailto:akshaynayee2@gmail.com" className={Style.hireBtn}>Hire Me</a>
          <Box className={Style.togglerWrapper}>
            <Toggler darkMode={darkMode} handleClick={handleClick} />
          </Box>
          <Box onClick={toggleSidebar} className={Style.menuButton} role="button" aria-label="Menu">
            <DragHandleIcon className={darkMode ? Style.darkIcon : Style.lightIcon} />
          </Box>
        </Box>
      </Box>

      {/* Sidebar */}
      <Drawer
        anchor="right"
        open={sidebarOpen || closing}
        onClose={toggleSidebar}
        PaperProps={{
          className: `${Style.drawerPaper} ${closing ? Style.drawerPaperClosing : Style.drawerPaperOpening}`,
        }}
        hideBackdrop={false}
        ModalProps={{ keepMounted: true }}
      >
        <Box className={Style.sidebar} role="presentation">

          <IconButton onClick={toggleSidebar} className={Style.closeButton} aria-label="Close">
            <CloseIcon className={darkMode ? Style.darkIcon : Style.lightIcon} />
          </IconButton>

          <Box className={Style.sidebarTop}>
            <p>
              Looking for a full-time position where I can make a meaningful
              impact through my technical and leadership abilities.
              <br /><br />
              Let's <strong>connect</strong> and talk about the possibilities.
            </p>
            <Box className={Style.socialIcons}>
              <a href={info.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={info.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="mailto:akshaynayee2@gmail.com" aria-label="Email">
                <MailIcon />
              </a>
              <a href="tel:+18145044741" aria-label="Phone">
                <PhoneIcon />
              </a>
            </Box>
          </Box>

          <Box className={Style.sidebarBottom}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={Style.sidebarNavLink}
                onClick={toggleSidebar}
              >
                {link.name}
              </Link>
            ))}
          </Box>

        </Box>
      </Drawer>
    </Box>
  );
}
