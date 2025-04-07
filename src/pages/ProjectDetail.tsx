import { useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import projects from "../projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <MainLayout>
        <h1>404 – Project Not Found</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{project.title}</h1>
      <p>
        <strong>Tech:</strong> {project.tech.join(", ")}
      </p>
      <div dangerouslySetInnerHTML={{ __html: project.content }} />
      <div>
        <a href={project.live} target="_blank" rel="noreferrer">
          Live Site
        </a>{" "}
        |{" "}
        <a href={project.repo} target="_blank" rel="noreferrer">
          Source Code
        </a>
      </div>
    </MainLayout>
  );
};

export default ProjectDetail;
