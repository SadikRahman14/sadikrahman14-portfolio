
import { FaGithub } from "react-icons/fa6";
import {
  FiArrowUpRight,
  FiCode,
  FiGitBranch,
  FiServer,
} from "react-icons/fi";

import ProjectLinks from "../ProjectLinks";
import ProjectVisual from "../ProjectVisual";
import SectionHeading from "../SectionHeading";

import {
  engineeringProjects,
  featuredProjects,
  liveProjects,
  repositoryProjects,
} from "../../data/projects";

import "../../styles/project-showcase.css";

const repositoryIcons = {
  backend: FiServer,
  react: FiCode,
  algorithms: FiGitBranch,
};

/* ==========================================
   EXISTING PROJECT CARD
========================================== */

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`portfolio-work-card ${
        featured ? "portfolio-work-card--featured" : ""
      }`}
    >
      <ProjectVisual project={project} />

      <div className="portfolio-work-content">
        <div className="portfolio-card-meta">
          <span>{project.label}</span>

          {project.liveUrl ? (
            <span className="portfolio-live-indicator">
              <i aria-hidden="true" /> LIVE
            </span>
          ) : (
            <span className="portfolio-source-indicator">
              SOURCE AVAILABLE
            </span>
          )}
        </div>

        <h4>{project.title}</h4>

        <p>{project.description}</p>

        <div className="portfolio-card-footer">
          <div
            className="portfolio-tech-list"
            aria-label={`${project.title} technologies and topics`}
          >
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

/* ==========================================
   EXISTING PROJECT COLLECTION
========================================== */

function WorkGroup({
  number,
  title,
  description,
  projects,
  featured = false,
}) {
  return (
    <div className="portfolio-work-group">
      <div className="portfolio-work-group-header">
        <div>
          <div className="portfolio-work-overline">
            <span>{number}</span> / COLLECTION
          </div>

          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <span className="portfolio-work-count">
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      <div
        className={`portfolio-project-grid ${
          featured ? "portfolio-project-grid--featured" : ""
        }`}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={featured}
          />
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   NEW — REPOSITORY CARD
========================================== */

function RepositoryCard({ repository }) {
  const Icon =
    repositoryIcons[repository.visual] ?? FiCode;

  return (
    <article className="portfolio-repo-card">

      <div className="portfolio-repo-top">
        <span
          className="portfolio-repo-icon"
          aria-hidden="true"
        >
          <Icon size={23} />
        </span>

        <span className="portfolio-repo-kind">
          {repository.label}
        </span>
      </div>

      <h4>{repository.title}</h4>

      <p>{repository.description}</p>

      <div
        className="portfolio-tech-list portfolio-repo-tech"
        aria-label={`${repository.title} topics`}
      >
        {repository.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="portfolio-repo-bottom">
        {repository.githubUrl ? (
          <a
            href={repository.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-repo-link"
            aria-label={`Explore ${repository.title} on GitHub`}
          >
            <FaGithub aria-hidden="true" />
            <span>Explore repository</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ) : (
          <span className="portfolio-repo-link-pending">
            Repository link unavailable
          </span>
        )}
      </div>

    </article>
  );
}

/* ==========================================
   NEW — REPOSITORY COLLECTION
========================================== */

function RepositoryGroup({ repositories }) {
  return (
    <div className="portfolio-work-group">

      <div className="portfolio-work-group-header">
        <div>
          <div className="portfolio-work-overline">
            <span>04</span> / COLLECTION
          </div>

          <h3>Codebases &amp; learning notes</h3>

          <p>
            Reusable reference material, documented
            experiments, and learning-by-building
            repositories.
          </p>
        </div>

        <span className="portfolio-work-count">
          {String(repositories.length).padStart(2, "0")}{" "}
          REPOSITORIES
        </span>
      </div>

      <div className="portfolio-repository-grid">
        {repositories.map((repository) => (
          <RepositoryCard
            key={repository.id}
            repository={repository}
          />
        ))}
      </div>

    </div>
  );
}

/* ==========================================
   PROJECTS SECTION
========================================== */

export default function Projects() {
  const totalProjects =
    featuredProjects.length +
    liveProjects.length +
    engineeringProjects.length;

  const liveBuilds = [
    ...featuredProjects,
    ...liveProjects,
    ...engineeringProjects,
  ].filter((project) => Boolean(project.liveUrl)).length;

  return (
    <section
      id="projects"
      className="portfolio-projects-section"
      aria-label="Selected projects"
    >
      <div className="portfolio-container">

        <div className="portfolio-projects-heading">
          <SectionHeading>Selected Work</SectionHeading>

          <p>
            Projects across full-stack engineering,
            creative web experiences, mobile development,
            and documented learning.
          </p>

          <div
            className="portfolio-work-tally"
            aria-label={`${totalProjects} projects, ${liveBuilds} deployed websites, ${repositoryProjects.length} repositories`}
          >
            <span>
              <strong>
                {String(totalProjects).padStart(2, "0")}
              </strong>
              PROJECTS
            </span>

            <span
              className="portfolio-tally-divider"
              aria-hidden="true"
            />

            <span>
              <strong>
                {String(liveBuilds).padStart(2, "0")}
              </strong>
              LIVE BUILDS
            </span>

            <span
              className="portfolio-tally-divider"
              aria-hidden="true"
            />

            <span>
              <strong>
                {String(repositoryProjects.length).padStart(2, "0")}
              </strong>
              REPOSITORIES
            </span>
          </div>
        </div>

        <WorkGroup
          number="01"
          title="Featured projects"
          description="Full-stack products where the frontend and backend come together."
          projects={featuredProjects}
          featured
        />

        <WorkGroup
          number="02"
          title="More live projects"
          description="Experiments, experiences, and useful tools you can try right now."
          projects={liveProjects}
        />

        <WorkGroup
          number="03"
          title="Other engineering projects"
          description="Code-focused work with source available to explore."
          projects={engineeringProjects}
        />

        {/* After Shanjeeban and Beacon */}
        <RepositoryGroup repositories={repositoryProjects} />

      </div>
    </section>
  );
}
