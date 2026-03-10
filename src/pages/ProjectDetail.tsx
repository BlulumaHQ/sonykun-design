import { useParams, Navigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/caseStudies";
import CaseStudy from "./CaseStudy";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // If it's a case study, render the case study page
  if (slug && caseStudies[slug]) {
    return <CaseStudy />;
  }

  // If project has a live URL, redirect to it
  if (project?.liveUrl) {
    window.location.href = project.liveUrl;
    return null;
  }

  // Fallback: redirect to work page
  return <Navigate to="/work" replace />;
};

export default ProjectDetail;
