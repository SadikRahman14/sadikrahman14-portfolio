
import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiGitBranch,
  FiLayers,
} from "react-icons/fi";

import RevealOnScroll from "../RevealOnScroll";
import cvFile from "../../assets/Sadik_Rahman_CV_2026.pdf";
import "../../styles/about.css";

const frontendSkills = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Next.js",
];

const backendSkills = [
  "Node.js",
  "Python",
  "MySQL",
  "MongoDB",
  "Laravel",
];

const education = [
  {
    degree: "B.Sc in Computer Science",
    institute:
      "Ahsanullah University of Science & Technology",
  },
  {
    degree: "Higher Secondary Certificate",
    institute: "Ispahani Public School & College",
  },
  {
    degree: "Secondary School Certificate",
    institute: "Nasirabad Government High School",
  },
];

const research = [
  {
    number: "01",
    title: "Power Grid Transmission Optimization (RL)",
    description:
      "Developing a reinforcement learning approach to reduce transmission loss to 2–3% in the Bangladeshi Power Grid.",
    technologies: [
      "Reinforcement Learning",
      "Python",
      "Simulation",
    ],
    progress:
      "Submitted to ICCIT 2026",
  },
  {
    number: "02",
    title: "Bank Note Fitness Classifier",
    description:
      "Deep learning project to classify the fitness and condition of Bangladeshi Taka notes.",
    technologies: [
      "Deep Learning",
      "ResNet",
      "EfficientNet",
      "Computer Vision",
    ],
    progress:
      "80%+ accuracy achieved on an initial 150-image dataset.",
  },
  {
    number: "03",
    title: "UCL Match Predictor",
    description:
      "Statistical modeling to predict UEFA Champions League results based on clubs' domestic performance metrics.",
    technologies: [
      "Poisson Distribution",
      "Monte Carlo Simulation",
      "Statistical Modeling",
      "Dixon-Coles"
    ],
    progress:
      "Correctly predicted 18/29 knockout matches of season 2025/26 beating bet365 on a narrow margin",
  },
];

const awards = [
  {
    title: "Code Alchemy: Refactoring Contest",
    event: "AUST CSE Carnival 5.0, Fall-23",
    result: "Champion",
  },
  {
    title: "Quiz Contest",
    event: "AUST CSE Carnival 3 & 4, Spring-23 & Fall-22",
    result: "Runners-Up",
  },
  {
    title: "Chess Competition",
    event: "AUST CSE Carnival 2.0",
    result: "Runners-Up",
  },
  {
    title: "Intra Department Football Tournament",
    event: "Fall-23",
    result: "Runners-Up",
  },
];

const extras = [
  {
    name: "LeetCode",
    detail: "100+ Problems Solved",
    href: "https://leetcode.com/u/user7126SD/",
  },
  {
    name: "Chess.com",
    detail: "Peak: 1400+",
    href: "https://www.chess.com/member/sadikrahman",
  },
  {
    name: "Lichess",
    detail: "Peak: 1450+",
    href: "https://lichess.org/@/SadikRahman",
    },
  {
    name: "Codeforces",
    detail: "Peak: 1000+",
    href: "https://codeforces.com/profile/SadikRahman14",
  },
];

function SkillList({ title, skills }) {
  return (
    <div className="sr-about-skill-group">
      <h4>{title}</h4>

      <div className="sr-about-pills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

function CardHeading({ icon: Icon, eyebrow, title }) {
  return (
    <div className="sr-about-card-heading">
      <span
        className="sr-about-card-icon"
        aria-hidden="true"
      >
        <Icon size={19} />
      </span>

      <div>
        <span className="sr-about-card-kicker">
          {eyebrow}
        </span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="sr-about"
      aria-labelledby="sr-about-title"
    >
      <div className="sr-about-shell">

        {/* INTRODUCTION AND TECH STACK */}
        <RevealOnScroll>
          <header className="sr-about-intro">
            <div className="sr-about-intro-copy">
              <div className="sr-about-kicker">
                <span
                  className="sr-about-kicker-dot"
                  aria-hidden="true"
                />
                A LITTLE ABOUT ME
              </div>

              <h2 id="sr-about-title">
                More than <span>just code.</span>
              </h2>

              <p>
                I'm a full-stack developer with a strong
                interest in building reliable, high-performance
                APIs using Node.js, Python, MySQL, and MongoDB.
                I sharpen my problem-solving skills with
                LeetCode and explore reinforcement learning,
                deep learning, and predictive modeling through
                research.
              </p>

              <div className="sr-about-intro-note">
                <FiGitBranch
                  size={16}
                  aria-hidden="true"
                />
                Small, safe changes. Clear documentation.
                Thoughtful engineering.
              </div>
            </div>

            <aside
              className="sr-about-stack"
              aria-label="Technical skills"
            >
              <div className="sr-about-stack-top">
                <div>
                  <span className="sr-about-stack-label">
                    MY TOOLKIT
                  </span>
                  <h3>Technologies I work with</h3>
                </div>

                <FiCode
                  size={23}
                  aria-hidden="true"
                />
              </div>

              <SkillList
                title="Frontend"
                skills={frontendSkills}
              />

              <SkillList
                title="Backend & data"
                skills={backendSkills}
              />
            </aside>
          </header>
        </RevealOnScroll>

        {/* EXPERIENCE AND EDUCATION */}
        <RevealOnScroll>
          <div className="sr-about-two-column">

            <article className="sr-about-panel">
              <CardHeading
                icon={FiBriefcase}
                eyebrow=""
                title="Experience"
              />

              <div className="sr-about-timeline">
                <div className="sr-about-timeline-item">
                  <span className="sr-about-period">
                    SEPT 2025 — PRESENT
                  </span>

                  <h4>Backend Developer</h4>

                  <p className="sr-about-organization">
                    AUST Ahsanullah (R.) Peace Club
                  </p>

                  <p className="sr-about-detail">
                    Building and maintaining backend
                    services and APIs used by club
                    initiatives and event platforms.
                    I focus on clean domain models,
                    predictable performance, and
                    instrumentation for quick debugging.
                  </p>

                  <div className="sr-about-pills sr-about-pills--subtle">
                    {[
                      "Node.js",
                      "Express",
                      "Supabase",
                      "JWT/Auth",
                      "Redis (cache)",
                      "GitHub Actions",
                    ].map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="sr-about-panel">
              <CardHeading
                icon={FiBookOpen}
                eyebrow=""
                title="Education"
              />

              <ol className="sr-about-education-list">
                {education.map((item, index) => (
                  <li key={item.degree}>
                    <span className="sr-about-edu-number">
                      0{index + 1}
                    </span>

                    <div>
                      <h4>{item.degree}</h4>
                      <p>{item.institute}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

          </div>
        </RevealOnScroll>

        {/* RESEARCH */}
        <RevealOnScroll>
          <section
            className="sr-about-research"
            aria-labelledby="sr-about-research-title"
          >
            <div className="sr-about-section-heading">
              <div>
                <span className="sr-about-section-kicker">
                  EXPLORING WHAT'S NEXT
                </span>

                <h3 id="sr-about-research-title">
                  Research <span>& interests.</span>
                </h3>
              </div>
            </div>

            <div className="sr-about-research-grid">
              {research.map((item) => (
                <article
                  key={item.number}
                  className="sr-about-research-card"
                >
                  <div className="sr-about-research-top">
                    <span>
                      RESEARCH / {item.number}
                    </span>
                    <FiLayers
                      size={18}
                      aria-hidden="true"
                    />
                  </div>

                  <h4>{item.title}</h4>

                  <p className="sr-about-research-description">
                    {item.description}
                  </p>

                  <div className="sr-about-pills sr-about-pills--subtle">
                    {item.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="sr-about-progress">
                    <span
                      className="sr-about-progress-dot"
                      aria-hidden="true"
                    />

                    <div>
                      <strong>PROGRESS</strong>
                      <p>{item.progress}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* AWARDS AND EXTRA ACTIVITIES */}
        <RevealOnScroll>
          <div className="sr-about-two-column sr-about-bottom-grid">

            <article className="sr-about-panel">
              <CardHeading
                icon={FiAward}
                eyebrow=""
                title="Awards & recognition"
              />

              <ul className="sr-about-awards-list">
                {awards.map((award) => (
                  <li key={award.title}>
                    <div>
                      <h4>{award.title}</h4>
                      <p>{award.event}</p>
                    </div>

                    <span className="sr-about-award-result">
                      {award.result}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="sr-about-panel">
              <CardHeading
                icon={FiArrowUpRight}
                eyebrow=""
                title="Beyond development"
              />
              <div className="sr-about-extras-list">
                {extras.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.name} profile`}
                  >
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.detail}</span>
                    </div>

                    <FiExternalLink
                      size={17}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </article>

          </div>
        </RevealOnScroll>

        {/* DOWNLOAD CV */}
        <RevealOnScroll>
          <section
            id="cv"
            className="sr-about-cv"
            aria-labelledby="sr-about-cv-title"
          >
            <div>
              <span className="sr-about-cv-kicker">
                MORE ABOUT MY WORK
              </span>

              <h3 id="sr-about-cv-title">
                Want the full picture?
              </h3>

              <p>
                Take a closer look at my experience,
                skills, and background.
              </p>
            </div>

            <div className="sr-about-cv-actions">
              <a
                href={cvFile}
                download="Sadik_Rahman_CV.pdf"
                className="sr-about-cv-primary"
              >
                <FiDownload
                  size={17}
                  aria-hidden="true"
                />
                Download CV
              </a>

              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-about-cv-secondary"
              >
                <FiExternalLink
                  size={17}
                  aria-hidden="true"
                />
                View online
              </a>
            </div>
          </section>
        </RevealOnScroll>

      </div>
    </section>
  );
}
