/* eslint-disable @eslint-react/no-array-index-key */

import projects from "@public/data/projects/projects";
import ScrollContainer from "react-indiana-drag-scroll";

import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";

import ProjectsCard from "./components/ProjectsCard/ProjectsCard";

const ProjectsSection = () => {
  return (
    <section className="section-card">
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
