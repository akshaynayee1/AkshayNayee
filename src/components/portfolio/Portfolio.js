import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Style from './Portfolio.module.scss';
import StarIcon         from '@mui/icons-material/Star';
import ForkRightIcon    from '@mui/icons-material/ForkRight';
import OpenInNewIcon    from '@mui/icons-material/OpenInNew';
import GitHubIcon       from '@mui/icons-material/GitHub';
import CloseIcon        from '@mui/icons-material/Close';
import ArticleIcon      from '@mui/icons-material/Article';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const GITHUB_USER = 'akshaynayee1';

const FEATURED = [
  {
    name: 'Melolem | Marketplace of Tastes',
    tagline: 'Full-Stack E-Commerce Platform',
    description:
      'A production-grade multi-role e-commerce platform built with Python & Django. Ships three fully independent modules — Customer (browse, cart, checkout), Vendor (product & inventory management), and Admin (platform oversight, order control, analytics). Live payments via Stripe, deployed on AWS with PostgreSQL.',
    roles: ['Customer', 'Vendor', 'Admin'],
    tech: ['Python', 'Django', 'PostgreSQL', 'Stripe', 'AWS', 'HTML/CSS', 'JavaScript', 'REST APIs'],
    live: 'https://melolem.com/',
    color: '#3572A5',
  },
  {
    name: 'Virtual Fault Current Limiting System',
    tagline: 'Distributed IoT Architecture for Smart Electrical Protection',
    description:
      'A multi-module IoT system for real-time fault current detection and automated limitation in electrical networks. Four independent components work in concert — core fault control logic, a live monitoring GUI, encrypted data storage, and a hardware signal sender — designed to protect electrical infrastructure through smart automation.',
    modules: [
      { label: 'vfcl_iot',      repo: 'vfcl_iot',      desc: 'Core fault control' },
      { label: 'iotgui',        repo: 'iotgui',         desc: 'Live dashboard GUI' },
      { label: 'dir_encrypt',   repo: 'dir_encrypt',    desc: 'Encrypted storage' },
      { label: 'signal-sender', repo: 'signal-sender',  desc: 'Signal transmitter' },
    ],
    tech: ['Python', 'IoT', 'MQTT', 'Raspberry Pi', 'Cryptography', 'Signal Processing', 'GPIO'],
    color: '#059669',
  },
];

const LANG_COLORS = {
  Python:     '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  HTML:       '#e34c26',
  CSS:        '#563d7c',
  Java:       '#b07219',
  Go:         '#00ADD8',
  Rust:       '#dea584',
  Shell:      '#89e051',
  Jupyter:    '#DA5B0B',
};

function LangDot({ lang }) {
  const color = LANG_COLORS[lang] || '#7c3aed';
  return (
    <span className={Style.lang}>
      <span className={Style.langDot} style={{ background: color }} />
      {lang}
    </span>
  );
}

function ReadmeModal({ repo, darkMode, onClose }) {
  const [html,    setHtml]    = useState('');
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`https://api.github.com/repos/${GITHUB_USER}/${repo.name}/readme`, {
      headers: { Accept: 'application/vnd.github.html+json' },
    })
      .then(r => { if (!r.ok) throw new Error(); return r.text(); })
      .then(setHtml)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [repo.name]);

  // Close on Escape
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className={Style.modalBackdrop} onClick={onClose}>
      <div
        className={`${Style.modal} ${darkMode ? Style.dark : Style.light}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className={Style.modalHeader}>
          <div className={Style.modalTitle}>
            <GitHubIcon style={{ fontSize: '1.1rem', color: '#7c3aed' }} />
            <span>{repo.name}</span>
            {repo.language && <LangDot lang={repo.language} />}
          </div>
          <div className={Style.modalActions}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
               className={Style.modalLink} title="Open on GitHub">
              <OpenInNewIcon style={{ fontSize: '1rem' }} />
              GitHub
            </a>
            {repo.homepage && (
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
                 className={`${Style.modalLink} ${Style.modalLinkLive}`} title="Live Demo">
                <OpenInNewIcon style={{ fontSize: '1rem' }} />
                Live Demo
              </a>
            )}
            <button className={Style.modalClose} onClick={onClose} aria-label="Close">
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* README content */}
        <div className={Style.modalBody}>
          {loading && (
            <div className={Style.readmeLoading}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={Style.readmeSkeleton}
                     style={{ width: `${60 + Math.random() * 35}%` }} />
              ))}
            </div>
          )}
          {error && (
            <div className={Style.readmeError}>
              <ArticleIcon style={{ fontSize: '2rem', opacity: 0.35 }} />
              <p>No README found for this repository.</p>
            </div>
          )}
          {!loading && !error && (
            <div
              className={Style.readmeContent}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ darkMode }) {
  const [repos,     setRepos]     = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);
  const [filter,    setFilter]    = useState('All');
  const [activeRepo, setActiveRepo] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=50`)
      .then(r => { if (!r.ok) throw new Error('GitHub API error'); return r.json(); })
      .then(data => {
        const sorted = data
          .filter(r => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const languages = useMemo(() => (
    ['All', ...new Set(repos.map(r => r.language).filter(Boolean))]
  ), [repos]);

  const visible = filter === 'All' ? repos : repos.filter(r => r.language === filter);

  const openRepo  = useCallback(repo => setActiveRepo(repo), []);
  const closeRepo = useCallback(() => setActiveRepo(null), []);

  return (
    <div className={`${Style.page} ${darkMode ? Style.dark : Style.light}`}>

      {/* Header */}
      <div className={Style.pageHeader}>
        <p className={Style.eyebrow}>
          <span className={Style.eyebrowLine} />
          GitHub Projects
        </p>
        <h1 className={Style.pageTitle}>My Portfolio</h1>
        <p className={Style.pageSub}>Click any project to read the full README</p>
      </div>

      {/* ── Featured Projects ── */}
      <div className={Style.featuredSection}>
        <p className={Style.featuredLabel}>
          <RocketLaunchIcon style={{ fontSize: '0.85rem' }} /> Featured Projects
        </p>
        {FEATURED.map((p, idx) => (
          <div key={p.name} className={Style.featuredCard} style={{ '--feat-color': p.color }}>
            <div className={Style.featuredBg} />
            <span className={Style.featuredIdx}>0{idx + 1}</span>

            <div className={Style.featuredLeft}>
              {/* Header row */}
              <div className={Style.featuredTopRow}>
                <div className={Style.featuredWindowDots}>
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span className={Style.featuredBadge}>
                  {p.live ? '● Live' : '◆ Open Source'}
                </span>
              </div>

              <h2 className={Style.featuredName}>{p.name}</h2>
              <p className={Style.featuredTagline}>{p.tagline}</p>
              <p className={Style.featuredDesc}>{p.description}</p>

              {p.roles && (
                <div className={Style.featuredRoles}>
                  {p.roles.map(r => (
                    <span key={r} className={Style.featuredRoleChip}>{r}</span>
                  ))}
                </div>
              )}
              {p.modules && (
                <div className={Style.featuredModules}>
                  {p.modules.map(m => (
                    <a key={m.repo}
                       href={`https://github.com/${GITHUB_USER}/${m.repo}`}
                       target="_blank" rel="noopener noreferrer"
                       className={Style.featuredModuleChip}
                       style={{ '--mc': p.color }}>
                      <GitHubIcon style={{ fontSize: '0.72rem' }} />
                      <span className={Style.moduleName}>{m.label}</span>
                      <span className={Style.moduleDesc}>{m.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right panel — tech stack + CTA */}
            <div className={Style.featuredRight}>
              <div className={Style.featuredTechPanel}>
                <span className={Style.techPanelLabel}>Tech Stack</span>
                <div className={Style.featuredTech}>
                  {p.tech.map(t => (
                    <span key={t} className={Style.featuredTechChip}>{t}</span>
                  ))}
                </div>
              </div>
              {p.live ? (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className={Style.featuredLiveBtn}>
                  <OpenInNewIcon style={{ fontSize: '0.95rem' }} />
                  Visit Live Site
                </a>
              ) : p.modules && (
                <a href={`https://github.com/${GITHUB_USER}/${p.modules[0].repo}`}
                   target="_blank" rel="noopener noreferrer"
                   className={Style.featuredLiveBtn}>
                  <GitHubIcon style={{ fontSize: '0.95rem' }} />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Language filter */}
      {!loading && !error && (
        <div className={Style.filterRow}>
          {languages.map(lang => (
            <button
              key={lang}
              className={`${Style.filterBtn} ${filter === lang ? Style.filterActive : ''}`}
              onClick={() => setFilter(lang)}
            >
              {lang !== 'All' && (
                <span className={Style.filterDot} style={{ background: LANG_COLORS[lang] || '#7c3aed' }} />
              )}
              {lang}
            </button>
          ))}
        </div>
      )}

      {/* Loading skeletons */}
      {loading && (
        <div className={Style.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={Style.skeleton} />
          ))}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className={Style.error}>
          <GitHubIcon style={{ fontSize: '2.5rem', opacity: 0.4 }} />
          <p>Could not load repositories. Check your connection and try again.</p>
        </div>
      )}

      {/* Grid */}
      {!loading && !error && (
        <>
          <div className={Style.grid}>
            {visible.map(repo => {
              const langColor = LANG_COLORS[repo.language] || '#7c3aed';
              return (
              <div key={repo.id} className={Style.card} onClick={() => openRepo(repo)}
                   style={{ '--lang-color': langColor }}>

                {/* Coloured header band */}
                <div className={Style.cardHeader}>
                  <div className={Style.cardHeaderBg} style={{ background: `linear-gradient(135deg, ${langColor}22, ${langColor}08)` }} />
                  <div className={Style.windowDots}>
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#febc2e' }} />
                    <span style={{ background: '#28c840' }} />
                  </div>
                  <h3 className={Style.repoName}>{repo.name.replace(/-/g, ' ')}</h3>
                  <div className={Style.cardHeaderMeta}>
                    {repo.language && (
                      <span className={Style.langPill} style={{ background: `${langColor}22`, color: langColor, border: `1px solid ${langColor}44` }}>
                        <span className={Style.langDot} style={{ background: langColor }} />
                        {repo.language}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className={Style.cardBody}>
                  <p className={Style.repoDesc}>
                    {repo.description || 'Click to read the README for more details.'}
                  </p>

                  {repo.topics?.length > 0 && (
                    <div className={Style.topics}>
                      {repo.topics.slice(0, 3).map(t => (
                        <span key={t} className={Style.topic}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className={Style.cardFooter}>
                  <div className={Style.stats}>
                    <span className={Style.metaStat}>
                      <StarIcon style={{ fontSize: '0.8rem' }} />
                      {repo.stargazers_count}
                    </span>
                    <span className={Style.metaStat}>
                      <ForkRightIcon style={{ fontSize: '0.8rem' }} />
                      {repo.forks_count}
                    </span>
                  </div>
                  <div className={Style.cardLinks}>
                    <span className={Style.readmeHint}>
                      <ArticleIcon style={{ fontSize: '0.8rem' }} /> Read More
                    </span>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
                         className={Style.liveChip}
                         onClick={e => e.stopPropagation()}>
                        <OpenInNewIcon style={{ fontSize: '0.75rem' }} /> Live
                      </a>
                    )}
                  </div>
                </div>

              </div>
            )})}
          </div>

          {visible.length === 0 && (
            <p className={Style.empty}>No repositories found for this language.</p>
          )}

          <p className={Style.footer}>
            <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer">
              View all on GitHub ↗
            </a>
          </p>
        </>
      )}

      {/* README Modal */}
      {activeRepo && (
        <ReadmeModal repo={activeRepo} darkMode={darkMode} onClose={closeRepo} />
      )}
    </div>
  );
}
