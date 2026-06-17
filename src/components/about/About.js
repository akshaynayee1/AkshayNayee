import React, { useEffect } from 'react';
import Style from './About.module.scss';
import { info } from "../../info/Info";
import me from '../../img/akWave.png';
import SmartToyIcon       from "@mui/icons-material/SmartToy";
import CodeIcon            from "@mui/icons-material/Code";
import StorageIcon         from "@mui/icons-material/Storage";
import CloudIcon           from "@mui/icons-material/Cloud";
import SchoolIcon          from "@mui/icons-material/School";
import LinkedInIcon        from "@mui/icons-material/LinkedIn";
import GitHubIcon          from "@mui/icons-material/GitHub";
import MailIcon            from "@mui/icons-material/Mail";
import PhoneIcon           from "@mui/icons-material/Phone";
import VerifiedIcon        from "@mui/icons-material/Verified";
import OpenInNewIcon       from "@mui/icons-material/OpenInNew";

const skillCategories = [
  {
    Icon: SmartToyIcon,
    name: "AI & Machine Learning",
    color: "#7c3aed",
    tags: ["OpenAI GPT-4", "RAG Pipelines", "Prompt Engineering", "LLM Apps", "Vector DBs", "TensorFlow", "Scikit-learn"],
  },
  {
    Icon: CodeIcon,
    name: "Frontend",
    color: "#2563eb",
    tags: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript ES6+"],
  },
  {
    Icon: StorageIcon,
    name: "Backend & APIs",
    color: "#0891b2",
    tags: ["Python", "FastAPI", "Django", "Node.js", "GraphQL", "PostgreSQL", "Redis", "Apache Kafka", "Stripe"],
  },
  {
    Icon: CloudIcon,
    name: "Cloud & DevOps",
    color: "#059669",
    tags: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  },
];


export default function About({ darkMode }) {
  const dm = darkMode;

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add(Style.revealed);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`${Style.page} ${dm ? Style.dark : Style.light}`}>

      {/* ════════ HERO ════════ */}
      <section className={Style.heroSection}>

        <div className={Style.photoCol} data-reveal>
          <div className={Style.photoRing}>
            <img src={me} alt="Akshay Nayee" className={Style.photo} />
          </div>
          <div className={Style.expBadge}>
            <span className={Style.expNum}>5+</span>
            <span className={Style.expLabel}>Years of{'\n'}Experience</span>
          </div>
        </div>

        <div className={Style.infoCol} data-reveal style={{ '--reveal-delay': '0.15s' }}>
          <p className={Style.heroEyebrow}>
            <span className={Style.eyebrowLine} />
            Software Engineer &amp; AI/ML Data Engineer
          </p>
          <h2 className={Style.heroTitle}>
            My Name is <span className={Style.accent}>Akshay</span>
          </h2>
          <p className={Style.heroBio}>{info.bio}</p>

          <div className={Style.metaRow}>
            <div className={Style.metaItem}>
              <span className={Style.metaLabel}>Location</span>
              <span className={Style.metaValue}>PA, USA</span>
              <span className={Style.relocationBadge}>
                <span className={Style.relocationWave}>🌊</span>
                Open for relocation
              </span>
            </div>
            <div className={Style.metaDivider} />
            <div className={Style.metaItem}>
              <span className={Style.metaLabel}>Phone</span>
              <span className={Style.metaValue}>+1 814 504 4741</span>
            </div>
            <div className={Style.metaDivider} />
            <div className={Style.metaItem}>
              <span className={Style.metaLabel}>Email</span>
              <span className={Style.metaValue}>akshaynayee2@gmail.com</span>
            </div>
          </div>
        </div>
      </section>


      {/* ════════ SKILLS ════════ */}
      <section className={Style.section} data-reveal>
        <div className={Style.sectionHead}>
          <p className={Style.sectionLabel}>
            <span className={Style.sectionNum}>01</span> Expertise
          </p>
          <h2 className={Style.sectionTitle}>My Skills</h2>
          <p className={Style.sectionSub}>Technologies and tools I work with daily</p>
        </div>

        <div className={Style.skillGrid}>
          {skillCategories.map(({ Icon, name, color, tags }) => (
            <div key={name} className={Style.skillCard}>
              <div className={Style.skillIcon} style={{ background: `${color}18`, color }}>
                <Icon />
              </div>
              <h4 className={Style.skillName}>{name}</h4>
              <div className={Style.skillTags}>
                {tags.map(t => <span key={t} className={Style.skillTag}>{t}</span>)}
              </div>
              <div className={Style.skillAccent} style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
            </div>
          ))}
        </div>

        {info.certifications && (
          <div className={Style.certGrid}>
            {info.certifications.map((c, i) => {
              const name   = typeof c === 'string' ? c : c.name;
              const url    = typeof c === 'object' ? c.url : null;
              const issuer = name.toLowerCase().includes('aws') ? 'Amazon Web Services'
                           : name.toLowerCase().includes('databricks') ? 'Databricks'
                           : name.toLowerCase().includes('django') ? 'Udemy'
                           : name.toLowerCase().includes('python') && name.toLowerCase().includes('everybody') ? 'Coursera'
                           : name.toLowerCase().includes('generative') ? 'Certification'
                           : 'Certification';
              return (
                <div key={i} className={Style.certCard} style={{ '--reveal-delay': `${i * 0.07}s` }} data-reveal>
                  <div className={Style.certIconWrap}>
                    <VerifiedIcon />
                  </div>
                  <div className={Style.certInfo}>
                    <p className={Style.certName}>{name}</p>
                    <span className={Style.certIssuer}>{issuer}</span>
                  </div>
                  {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer"
                       className={Style.certViewBtn} onClick={e => e.stopPropagation()}>
                      <OpenInNewIcon style={{ fontSize: '0.85rem' }} />
                      View
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ════════ EXPERIENCE ════════ */}
      <section className={Style.section}>
        <div className={Style.sectionHead} data-reveal>
          <p className={Style.sectionLabel}>
            <span className={Style.sectionNum}>02</span> Career
          </p>
          <h2 className={Style.sectionTitle}>Work Experience</h2>
          <p className={Style.sectionSub}>My professional journey across companies</p>
        </div>

        <div className={Style.expTimeline}>
          {info.experience.map((exp, i) => (
            <div key={i} className={Style.expRow} data-reveal style={{ '--reveal-delay': `${i * 0.08}s` }}>
              <div className={Style.expLeft}>
                <span className={Style.expCompany}>{exp.company}</span>
                <span className={Style.expDuration}>{exp.duration}</span>
                <span className={Style.expLoc}>{exp.location}</span>
              </div>

              <div className={Style.expCenter}>
                <div className={Style.expDot} />
                {i < info.experience.length - 1 && <div className={Style.expLine} />}
              </div>

              <div className={Style.expRight}>
                <div className={Style.expCard}>
                  <div className={Style.expMobileHeader}>
                    <span className={Style.expCompany}>{exp.company}</span>
                    <span className={Style.expDuration}>{exp.duration}</span>
                    <span className={Style.expLoc}>{exp.location}</span>
                  </div>
                  <span className={Style.expTitle}>{exp.title}</span>
                  <ul className={Style.expBullets}>
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ EDUCATION ════════ */}
      <section className={Style.section} data-reveal>
        <div className={Style.sectionHead}>
          <p className={Style.sectionLabel}>
            <span className={Style.sectionNum}>03</span> Education
          </p>
          <h2 className={Style.sectionTitle}>My Education</h2>
          <p className={Style.sectionSub}>Academic background and qualifications</p>
        </div>

        <div className={Style.eduTrack}>
          {/* horizontal line */}
          <div className={Style.eduRail} />

          {info.education.map((edu, i) => (
            <div key={i} className={Style.eduCol} data-reveal style={{ '--reveal-delay': `${i * 0.1}s` }}>
              <div className={Style.eduDot} />
              <div className={Style.eduCard}>
                <span className={`${Style.eduLevel} ${Style[`eduLevel${edu.level}`]}`}>{edu.level}</span>
                <span className={Style.eduDuration}>{edu.duration}</span>
                <div className={Style.eduIcon}><SchoolIcon /></div>
                <p className={Style.eduSchool}>{edu.school}</p>
                <p className={Style.eduDegree}>{edu.degree}</p>
                <span className={Style.eduLocation}>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ CONNECT ════════ */}
      <section className={Style.connectSection} data-reveal>
        <p className={Style.connectLabel}>Connect with me</p>
        <div className={Style.connectIcons}>
          {[
            { href: info.linkedin,             Icon: LinkedInIcon, label: "LinkedIn", color: "#0077b5" },
            { href: info.github,               Icon: GitHubIcon,   label: "GitHub",   color: "#333" },
            { href: "mailto:akshaynayee2@gmail.com", Icon: MailIcon, label: "Email", color: "#7c3aed" },
            { href: "tel:+18145044741",        Icon: PhoneIcon,    label: "Phone",    color: "#059669" },
          ].map(({ href, Icon, label, color }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
               rel="noopener noreferrer" className={Style.connectIcon}
               aria-label={label} style={{ '--icon-color': color }}>
              <Icon />
              <span className={Style.connectIconLabel}>{label}</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
