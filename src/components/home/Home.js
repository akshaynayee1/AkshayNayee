import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/newAK.jpg';
import { info } from "../../info/Info";

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

            <p className={Style.subtitle}>AI Software Engineer &amp; Full Stack Developer</p>

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
               <a href={info.resumePdf} target="_blank" rel="noopener noreferrer" className={Style.hireBtn}>
                  Download Resume
               </a>
               <a href={info.linkedin} target="_blank" rel="noopener noreferrer"
                  className={Style.arrowBtn} aria-label="LinkedIn">
                  ↗
               </a>
            </div>

            <div className={Style.socialRow}>
               {info.socials.map((s, i) => (
                  <a key={i} href={s.link} target="_blank" rel="noopener noreferrer"
                     className={Style.socialIcon} aria-label={s.label}>
                     <i className={s.icon} />
                  </a>
               ))}
            </div>
         </div>

         {/* ── Right: Photo ── */}
         <div className={Style.right}>
            <div className={Style.photoWrap}>
               <img src={me} alt={info.firstName} className={Style.photo} />
               <div className={Style.expBadge}>
                  <span className={Style.expValue}>4+</span>
                  <span className={Style.expLabel}>Years of{'\n'}Experience</span>
               </div>
            </div>
         </div>

      </main>
   );
}
