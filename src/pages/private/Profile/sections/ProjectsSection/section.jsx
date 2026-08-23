/* eslint-disable @eslint-react/no-array-index-key */

import ScrollContainer from "react-indiana-drag-scroll";

import projects from "@/data/features/projects/projects";
import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";

import ProjectsCard from "./components/ProjectsCard/ProjectsCard";

const ProjectsSection = () => {
  return (
    <section className="gradient-card">
      <SectionTitle
        title="pages.private.profile.projects.title"
        desc={{ value: "pages.private.profile.projects.desc" }}
      />

      <ScrollContainer className="flex-items-center w-full justify-between gap-6">
        {projects.map((project, i) => (
          <ProjectsCard
            key={i}
            title={project.title}
            desc={project.desc}
            name={project.name}
            imgSrc={project.imgSrc}
          />
        ))}
      </ScrollContainer>
    </section>
  );
};

export default ProjectsSection;
