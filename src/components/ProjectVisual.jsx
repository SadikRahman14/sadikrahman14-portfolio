
import {
  FiActivity,
  FiBriefcase,
  FiCode,
  FiFileText,
  FiHeart,
  FiMessageCircle,
  FiShoppingBag,
  FiTarget,
  FiZap,
} from "react-icons/fi";

import { getProjectScreenshot } from "../data/projects";

const icons = {
  finance: FiActivity,
  commerce: FiShoppingBag,
  space: FiZap,
  chat: FiMessageCircle,
  tool: FiFileText,
  sports: FiTarget,
  mobile: FiHeart,
  enterprise: FiBriefcase,
};

export default function ProjectVisual({
  project,
  hero = false,
}) {
  const Icon = icons[project.visual] || FiCode;

  // Automatically find the hero image for ANY project.
  // Example:
  // zero-gravity -> zero-gravity-hero.png
  // innovest     -> innovest-hero.png
  // vien         -> vien-hero.png
  //
  // You can also override the filename using
  // project.heroScreenshot in projects.js.

  const heroImageFilename =
    project.heroScreenshot || `${project.id}-hero.png`;

  const screenshotUrl =
    (hero && getProjectScreenshot(heroImageFilename)) ||
    getProjectScreenshot(project.screenshot);

  return (
    <div
      className={`portfolio-project-visual ${
        hero ? "portfolio-project-visual--hero" : ""
      }`}
      data-visual={project.visual}
    >
      {screenshotUrl ? (
        <img
          className="portfolio-project-image"
          src={screenshotUrl}
          alt={`${project.title} project screenshot`}
          loading={hero ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div
          className="portfolio-project-placeholder"
          aria-hidden="true"
        >
          <div className="portfolio-placeholder-ring portfolio-placeholder-ring--one" />

          <div className="portfolio-placeholder-ring portfolio-placeholder-ring--two" />

          <div className="portfolio-placeholder-icon">
            <Icon />
          </div>

          <div className="portfolio-placeholder-caption">
            <span>
              PROJECT /{" "}
              {project.id.toUpperCase().replaceAll("-", " ")}
            </span>

            <strong>{project.title}</strong>
          </div>
        </div>
      )}

      <div
        className="portfolio-visual-glow"
        aria-hidden="true"
      />

      {hero && (
        <span className="portfolio-visual-tag">
          {project.heroTag || "PROJECT SPOTLIGHT"}
        </span>
      )}
    </div>
  );
}
