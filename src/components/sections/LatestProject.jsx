
import {
  FiArrowDownRight,
  FiCircle,
} from "react-icons/fi";

import ProjectLinks from "../ProjectLinks";
import ProjectVisual from "../ProjectVisual";
import { latestProject } from "../../data/projects";

import "../../styles/project-showcase.css";

export default function LatestProject() {
  const project = latestProject;

  if (!project) return null;

  const subtitle =
    project.heroSubtitle || project.label;

  const description =
    project.heroDescription || project.description;

  const availabilityLabel = project.liveUrl
    ? "NOW LIVE"
    : project.githubUrl
      ? "SOURCE AVAILABLE"
      : "PROJECT SHOWCASE";

  return (
    <section
      id="latest"
      className="portfolio-latest-section"
      aria-labelledby="portfolio-latest-title"
    >
      <div className="portfolio-container">


        <div className="portfolio-section-kicker">
          

          <span
            className="portfolio-kicker-divider text-7xl"
            aria-hidden="true"
          />

          LATEST PROJECT
        </div>

        <div className="portfolio-latest-layout">

          {/* PROJECT IMAGE */}
          <div className="portfolio-latest-media">
            <ProjectVisual project={project} hero />
          </div>

          {/* PROJECT INFORMATION */}
          <div className="portfolio-latest-content">

            <div className="portfolio-latest-overline">
              <FiCircle aria-hidden="true" />

              <span>{availabilityLabel}</span>

              <span
                className="portfolio-overline-stroke"
                aria-hidden="true"
              />

              <span>01 / SPOTLIGHT</span>
            </div>

            {/* DYNAMIC PROJECT TITLE */}
            <h2
              id="portfolio-latest-title"
              className="portfolio-latest-heading"
            >
              <span>Meet</span>

              <strong>
                {project.title}
                <span className="portfolio-heading-period">
                  .
                </span>
              </strong>
            </h2>

            {/* DYNAMIC SUBTITLE */}
            <p className="portfolio-latest-subtitle">
              {subtitle}
            </p>

            {/* DYNAMIC DESCRIPTION */}
            <p className="portfolio-latest-description">
              {description}
            </p>

            {/* TECHNOLOGIES */}
            <div
              className="portfolio-tech-list portfolio-tech-list--hero"
              aria-label="Technologies used"
            >
              {project.tech.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            {/* PROJECT LINKS */}
            <div className="portfolio-latest-bottom">

              <div className="portfolio-latest-meta">
                <span>EXPLORE THE BUILD</span>

                <ProjectLinks
                  project={project}
                  large
                />
              </div>

              <a
                className="portfolio-all-work-link"
                href="#projects"
              >
                Browse all projects

                <FiArrowDownRight aria-hidden="true" />
              </a>
            </div>

          </div>
        </div>

        {/* FOOTER DETAILS */}
        <div
          className="portfolio-latest-footer"
          aria-hidden="true"
        >
        </div>

      </div>
    </section>
  );
}
