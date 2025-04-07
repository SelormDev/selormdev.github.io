import { useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import projects from "../projects";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.hasCaseStudy) {
    return (
      <MainLayout>
        <h1>404 – Case Study Not Found</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{project.title} – Case Study</h1>
      <div dangerouslySetInnerHTML={{ __html: project.caseStudyContent }} />
    </MainLayout>
  );
};

export default CaseStudyDetail;
