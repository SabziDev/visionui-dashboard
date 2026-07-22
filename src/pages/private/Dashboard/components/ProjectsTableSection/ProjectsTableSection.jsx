import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";
import TableTitleMoreBtn from "@/pages/private/components/Table/components/TableTitleMoreBtn/TableTitleMoreBtn";
import Table from "@/pages/private/components/Table/Table";
import { useProjectsQuery } from "@/services/hooks/useProjects/useProjects";

const ProjectsTableSection = ({ isShowMoreBtn = false }) => {
  const { projects, isPending } = useProjectsQuery();

  return (
    <section className="w-full section-card pb-2 fa:rtl">
      <div className="flex items-start justify-between">
        <SectionTitle
          title="pages.private.components.projectsTable.title"
          desc={{
            value: "pages.private.components.projectsTable.desc",
          }}
          isShowTick
        />

        {isShowMoreBtn && <TableTitleMoreBtn />}
      </div>

      <Table
        data={projects}
        colsTitles={[
          "pages.private.components.projectsTable.cols.company",
          "pages.private.components.projectsTable.cols.budget",
          "pages.private.components.projectsTable.cols.completion",
        ]}
        colsData={[
          { type: "TITLE", dataKey: "title" },
          { type: "BUDGET", dataKey: "budget" },
          { type: "COMPLETION", dataKey: "completion" },
        ]}
        isPending={isPending}
      />
    </section>
  );
};

export default ProjectsTableSection;
