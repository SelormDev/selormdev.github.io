import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import projects from "../projects";

const CaseStudies = () => {
  const caseStudies = projects.filter((p) => p.hasCaseStudy);

  return (
    <MainLayout>
      <h1>Case Studies</h1>
      {caseStudies.map((project) => (
        <div key={project.slug}>
          <h2>
            <Link to={`/case-studies/${project.slug}`}>{project.title}</Link>
          </h2>
          <p>{project.description}</p>
        </div>
      ))}
    </MainLayout>
  );
};

export default CaseStudies;
