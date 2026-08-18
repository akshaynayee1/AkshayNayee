import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/newAK.jpg';
import { info } from "../../info/Info";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Home() {
   return (
      <main className={Style.hero}>

         {/* ── Left ── */}
         <div className={Style.left}>
            <h1 className={Style.headline}>
               I'm&nbsp;
               <span className={Style.nameBadge}>{info.firstName}</span>
               <span className={Style.arrows}>▶▶</span>
            </h1>

            <p className={Style.subtitle}>Embedded Software Engineer &amp; Firmware Developer</p>

            <div className={Style.chips}>
               {info.miniBio.map((bio, i) => (
                  <span key={i} className={Style.chip}
                        style={{ animationDelay: `${0.35 + i * 0.09}s` }}>
                     <span className={Style.chipEmoji}>{bio.emoji}</span>
                     {bio.text}
                  </span>
               ))}
            </div>

            <div className={Style.ctaRow}>
               <a href="/about" className={Style.aboutBtn}>
                  <span className={Style.aboutBtnShimmer} />
                  <span className={Style.aboutBtnLabel}>About Me</span>
                  <span className={Style.aboutBtnIcon}>
                     <span className={Style.aboutBtnArrow}>→</span>
                  </span>
               </a>
            </div>

            <div className={Style.connectSection}>
               <p className={Style.connectText}>Find me on</p>
               <div className={Style.socialRow}>
                  <a href={info.linkedin} target="_blank" rel="noopener noreferrer"
                     className={Style.socialIcon} aria-label="LinkedIn">
                     <LinkedInIcon fontSize="small" />
                  </a>
                  <a href={info.github} target="_blank" rel="noopener noreferrer"
                     className={Style.socialIcon} aria-label="GitHub">
                     <GitHubIcon fontSize="small" />
                  </a>
                  <a href="tel:+18145044741"
                     className={Style.socialIcon} aria-label="Phone">
                     <PhoneIcon fontSize="small" />
                  </a>
               </div>
            </div>
         </div>

         {/* ── Right: Photo ── */}
         <div className={Style.right}>
            <div className={Style.photoWrap}>
               <img src={me} alt={info.firstName} className={Style.photo} />
               <div className={Style.expBadge}>
                  <span className={Style.expValue}>6+</span>
                  <span className={Style.expLabel}>Years of{'\n'}Experience</span>
               </div>
            </div>
         </div>

      </main>
   );
}
