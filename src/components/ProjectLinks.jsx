import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

/** Icon-only links, with descriptive labels for assistive technology. */
export default function ProjectLinks({ project, large = false }) {
  return (
    <div className={`portfolio-project-links${large ? " portfolio-project-links--large" : ""}`}>
      {project.githubUrl && (
        <a
          className="portfolio-icon-link portfolio-icon-link--github"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
          title={`${project.title} - GitHub repository`}
        >
          <FaGithub aria-hidden="true" />
        </a>
      )}
      {project.liveUrl && (
        <a
          className="portfolio-icon-link portfolio-icon-link--live"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the live ${project.title} website`}
          title={`${project.title} - Live website`}
        >
          <FiArrowUpRight aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
