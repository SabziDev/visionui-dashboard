import ProjectsCardBtn from "./ProjectsCardBtn/ProjectsCardBtn";
import ProjectsCardDesc from "./ProjectsCardDesc/ProjectsCardDesc";
import ProjectsCardImg from "./ProjectsCardImg/ProjectsCardImg";
import ProjectsCardNumber from "./ProjectsCardNumber/ProjectsCardNumber";
import ProjectsCardTitle from "./ProjectsCardTitle/ProjectsCardTitle";

const ProjectsCard = ({ title, desc, name, imgSrc }) => {
  return (
    <article className="w-full max-w-92.5 shrink-0">
      <ProjectsCardImg title={title} imgSrc={imgSrc} />

      <ProjectsCardNumber name={name} />
      <ProjectsCardTitle title={title} />
      <ProjectsCardDesc desc={desc} />
      <ProjectsCardBtn />
    </article>
  );
};

export default ProjectsCard;
