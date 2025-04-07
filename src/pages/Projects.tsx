import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import projects from "../projects";

const Projects = () => {
  return (
    <MainLayout>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.slug}>
          <h2>
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
          </h2>
          <p>{project.description}</p>
          <small>{project.date}</small>
        </div>
      ))}
    </MainLayout>
  );
};

export default Projects;
