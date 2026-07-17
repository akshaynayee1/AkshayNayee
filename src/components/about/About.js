import React, { useEffect } from 'react';
import Style from './About.module.scss';
import { info } from "../../info/Info";
import me from '../../img/akWave.png';
import SmartToyIcon  from "@mui/icons-material/SmartToy";
import CodeIcon      from "@mui/icons-material/Code";
import StorageIcon   from "@mui/icons-material/Storage";
import CloudIcon     from "@mui/icons-material/Cloud";
import SchoolIcon    from "@mui/icons-material/School";
import LinkedInIcon  from "@mui/icons-material/LinkedIn";
import GitHubIcon    from "@mui/icons-material/GitHub";
import PhoneIcon     from "@mui/icons-material/Phone";
import VerifiedIcon  from "@mui/icons-material/Verified";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const skills = [
  { Icon: SmartToyIcon, color: "#7c3aed", name: "AI & ML",       tags: ["OpenAI GPT-4", "RAG", "Prompt Engineering", "LLM Apps", "Vector DBs"] },
  { Icon: StorageIcon,  color: "#0891b2", name: "Backend",        tags: ["Python", "FastAPI", "Django", "Node.js", "Kafka", "PostgreSQL", "Redis"] },
  { Icon: CodeIcon,     color: "#2563eb", name: "Frontend",       tags: ["React.js", "Next.js", "Angular", "TypeScript"] },
  { Icon: CloudIcon,    color: "#059669", name: "Cloud & DevOps", tags: ["AWS", "Docker", "Kubernetes", "Stripe", "Terraform"] },
];

const journey = [
  { year: "2025", emoji: "⚡",  color: "#7c3aed", event: "Software Engineer · Plaid",       place: "PA, USA",        desc: "Kafka microservices, AI-driven financial infrastructure. Still building every day.", current: true },
  { year: "2023", emoji: "✈️",  color: "#0891b2", event: "MS Computer Science · Gannon",    place: "PA, USA",        desc: "Moved to the US. Went deep into GenAI, LLMs, and distributed systems research." },
  { year: "2021", emoji: "💹",  color: "#059669", event: "Software Engineer · Rishabh",     place: "Gujarat, India", desc: "Fintech & healthcare. GraphQL APIs, Elasticsearch, PySpark pipelines at scale." },
  { year: "2020", emoji: "🚀",  color: "#2563eb", event: "Full Stack Engineer · Webbrains", place: "Gujarat, India", desc: "Angular, Node.js, PostgreSQL. Shipped real products to real users for the first time." },
  { year: "2017", emoji: "📐",  color: "#f59e0b", event: "B.Tech, Computer Engineering",    place: "Gujarat, India", desc: "Data structures, algorithms, system design. Architecture started to matter." },
  { year: "2014", emoji: "🖥️",  color: "#6b7280", event: "Diploma, Computer Engineering",   place: "Gujarat, India", desc: "First line of code. Fell completely in love with building things from scratch." },
];

const socials = [
  { href: info.linkedin,      Icon: LinkedInIcon, label: "LinkedIn",        color: "#0077b5" },
  { href: info.github,        Icon: GitHubIcon,   label: "GitHub",          color: "#7c3aed" },
  { href: "tel:+18145044741", Icon: PhoneIcon,    label: "+1 814 504 4741", color: "#f59e0b" },
];

export default function About({ darkMode }) {
  const dm = darkMode;

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(Style.revealed); obs.unobserve(e.target); }
      }),
      { threshold: 0.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`${Style.page} ${dm ? Style.dark : Style.light}`}>

      {/* ─── HERO ──────────────────────────────────────── */}
      <section className={Style.hero}>
        <div className={Style.heroInner}>

          <div className={Style.heroPhoto}>
            <div className={Style.blob}>
              <img src={me} alt="Akshay Nayee" className={Style.blobImg} />
            </div>
            <div className={Style.floatCard}>
              <span className={Style.fcVal}>5+</span>
              <span className={Style.fcLbl}>Years Exp.</span>
            </div>
          </div>

          <div className={Style.heroText}>
            <span className={Style.hiLabel}>Hey there <span className={Style.wave}>👋</span> I'm</span>
            <h1 className={Style.bigName}>
              <span className={Style.nameFill}>Akshay</span>
              <span className={Style.nameOutline}>Nayee</span>
            </h1>
            <p className={Style.heroRole}>Building AI that ships · Systems that scale · Code that matters</p>

            <div className={Style.metaChips}>
              <span className={Style.chip}><span className={Style.chipNum}>5+</span> yrs exp.</span>
              <span className={Style.chip}>@ <strong>Plaid</strong></span>
              <span className={Style.chip}>📍 PA, USA</span>
              <span className={Style.chip}>🌊 Relocate-ready</span>
            </div>

            <p className={Style.heroBio}>{info.bio}</p>

            <div className={Style.heroSocials}>
              {socials.map(({ href, Icon, color }, i) => (
                <a key={i} href={href}
                   target={href.startsWith('http') ? '_blank' : undefined}
                   rel="noopener noreferrer"
                   className={Style.socialBtn}
                   style={{ '--sc': color }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── SKILLS ────────────────────────────────────── */}
      <section className={Style.sec} data-reveal>
        <div className={Style.secLabel}>
          <span className={Style.secNum}>01</span>
          <h2 className={Style.secTitle}>What I Build</h2>
        </div>
        <div className={Style.skillsRow}>
          {skills.map(({ Icon, color, name, tags }) => (
            <div key={name} className={Style.skillPillar} style={{ '--sk-color': color }}>
              <div className={Style.skillTop}>
                <div className={Style.skillIconBox}><Icon /></div>
                <span className={Style.skillName}>{name}</span>
              </div>
              <div className={Style.skillTags}>
                {tags.map(t => <span key={t} className={Style.stag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── JOURNEY ───────────────────────────────────── */}
      <section className={Style.sec} data-reveal style={{ '--reveal-delay': '0.05s' }}>
        <div className={Style.secLabel}>
          <span className={Style.secNum}>02</span>
          <h2 className={Style.secTitle}>My Journey</h2>
        </div>
        <div className={Style.tree}>
          <div className={Style.treeLine} />
          {journey.map((j, i) => {
            const isLeft = i % 2 === 0;
            const card = (extra) => (
              <div className={`${Style.treeCard} ${j.current ? Style.treeCardNow : ''} ${extra || ''}`}
                   style={{ '--jc': j.color }}>
                <div className={Style.treeCardHead}>
                  <span className={Style.treeEmoji}>{j.emoji}</span>
                  <div className={Style.treeCardMeta}>
                    <div className={Style.treeYearRow}>
                      <span className={Style.treeYear}>{j.year}</span>
                      {j.current && <span className={Style.treeNow}>now</span>}
                    </div>
                    <span className={Style.treePlace}>{j.place}</span>
                  </div>
                </div>
                <div className={Style.treeCardBody}>
                  <p className={Style.treeEvent}>{j.event}</p>
                  <p className={Style.treeDesc}>{j.desc}</p>
                </div>
              </div>
            );
            return (
              <div key={i} className={`${Style.treeItem} ${j.current ? Style.treeCurrent : ''}`}>
                <div className={Style.treeL}>
                  {isLeft && card()}
                </div>
                <div className={Style.treeM}>
                  <div className={Style.treeDot}>
                    {j.current && <span className={Style.treePulse} />}
                  </div>
                </div>
                <div className={Style.treeR}>
                  {!isLeft && card()}
                  {isLeft && card(Style.mobileCard)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── EDUCATION ─────────────────────────────────── */}
      <section className={Style.sec} data-reveal style={{ '--reveal-delay': '0.05s' }}>
        <div className={Style.secLabel}>
          <span className={Style.secNum}>03</span>
          <h2 className={Style.secTitle}>Education</h2>
        </div>
        <div className={Style.eduCards}>
          {info.education.map((edu, i) => (
            <div key={i} className={Style.eduCard}>
              <div className={Style.eduCardTop}>
                <span className={`${Style.eduBadge} ${Style[`b${edu.level}`]}`}>{edu.level}</span>
                <span className={Style.eduDur}>{edu.duration}</span>
              </div>
              <SchoolIcon className={Style.eduIcon} />
              <p className={Style.eduSchool}>{edu.school}</p>
              <p className={Style.eduDegree}>{edu.degree}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CERTS + CONNECT ───────────────────────────── */}
      <section className={Style.sec} data-reveal style={{ '--reveal-delay': '0.05s' }}>
        <div className={Style.secLabel}>
          <span className={Style.secNum}>04</span>
          <h2 className={Style.secTitle}>Certifications</h2>
        </div>
        <div className={Style.certGrid}>
          {info.certifications.map((c, i) => {
            const name   = typeof c === 'string' ? c : c.name;
            const url    = typeof c === 'object' ? c.url : null;
            const n = name.toLowerCase();
            const u = (url || '').toLowerCase();
            const issuerMap = n.includes('aws')          ? { label: 'AWS',        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }
                            : n.includes('databricks')   ? { label: 'Databricks', logo: 'https://cdn.simpleicons.org/databricks' }
                            : n.includes('django')       ? { label: 'Udemy',      logo: 'https://cdn.simpleicons.org/udemy' }
                            : n.includes('everybody')    ? { label: 'Coursera',   logo: 'https://cdn.simpleicons.org/coursera' }
                            : u.includes('hackerrank')   ? { label: 'HackerRank', logo: 'https://cdn.simpleicons.org/hackerrank' }
                            : { label: 'Certificate',  logo: null };
            return (
              <div key={i} className={Style.certCard}>
                {issuerMap.logo && (
                  <img src={issuerMap.logo} alt="" className={Style.certWatermark} aria-hidden="true" />
                )}
                <div className={Style.certTop}>
                  <VerifiedIcon className={Style.certIcon} />
                  {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer" className={Style.certBtn}>
                      <OpenInNewIcon style={{ fontSize: '0.75rem' }} />
                    </a>
                  )}
                </div>
                <span className={Style.certName}>{name}</span>
                <span className={Style.certIssuer}>{issuerMap.label}</span>
              </div>
            );
          })}
        </div>

        {/* Connect */}
        <div className={Style.connectBand}>
          <p className={Style.connectText}>Let's build something together</p>
          <div className={Style.connectBadges}>
            {socials.map(({ href, Icon, label, color }) => (
              <a key={label} href={href}
                 target={href.startsWith('http') ? '_blank' : undefined}
                 rel="noopener noreferrer"
                 className={Style.connectBadge}
                 style={{ '--cb': color }}>
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
