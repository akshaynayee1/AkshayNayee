import React from 'react';
import Style from './About.module.scss';
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
    return (
        <Box className={Style.aboutPage}>

            {/* Summary */}
            <section className={Style.section}>
                <h3 className={Style.sectionHeading}>About Me</h3>
                <div className={Style.bioCard}>
                    <p>{info.bio}</p>
                </div>
            </section>

            {/* Skills */}
            <section className={Style.section}>
                <h3 className={Style.sectionHeading}>Skills</h3>

                <div className={Style.skillGroup}>
                    <p className={Style.skillGroupLabel}>Proficient With</p>
                    <div className={Style.chipWrap}>
                        {info.skills.proficientWith.map((s, i) => (
                            <span key={i} className={Style.chipPrimary}>{s}</span>
                        ))}
                    </div>
                </div>

                <div className={Style.skillGroup}>
                    <p className={Style.skillGroupLabel}>Exposed To</p>
                    <div className={Style.chipWrap}>
                        {info.skills.exposedTo.map((s, i) => (
                            <span key={i} className={Style.chipSecondary}>{s}</span>
                        ))}
                    </div>
                </div>

                {info.certifications && (
                    <div className={Style.skillGroup}>
                        <p className={Style.skillGroupLabel}>Certifications</p>
                        <div className={Style.chipWrap}>
                            {info.certifications.map((c, i) => (
                                <span key={i} className={Style.chipCert}>&#10003; {c}</span>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {/* Experience */}
            <section className={Style.section}>
                <h3 className={Style.sectionHeading}>Experience</h3>
                <div className={Style.timeline}>
                    {info.experience.map((exp, i) => (
                        <div key={i} className={Style.timelineItem}>
                            <div className={Style.timelineDot} />
                            <div className={Style.timelineCard}>
                                <div className={Style.expHeader}>
                                    <div>
                                        <span className={Style.company}>{exp.company}</span>
                                        <span className={Style.jobTitle}>{exp.title}</span>
                                    </div>
                                    <div className={Style.expMeta}>
                                        <span>{exp.duration}</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                                <ul className={Style.bulletList}>
                                    {exp.bullets.map((b, j) => (
                                        <li key={j}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className={Style.section}>
                <h3 className={Style.sectionHeading}>Education</h3>
                <div className={Style.eduGrid}>
                    {info.education.map((edu, i) => (
                        <div key={i} className={Style.eduCard}>
                            <span className={Style.eduYear}>{edu.year}</span>
                            <p className={Style.eduSchool}>{edu.school}</p>
                            <p className={Style.eduDegree}>{edu.degree}</p>
                            <p className={Style.eduLocation}>{edu.location}</p>
                        </div>
                    ))}
                </div>
            </section>

        </Box>
    );
}
