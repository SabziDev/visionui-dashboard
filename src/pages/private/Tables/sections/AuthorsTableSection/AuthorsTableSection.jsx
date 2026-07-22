import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";
import Table from "@/pages/private/components/Table/Table";
import { useAuthorsQuery } from "@/services/hooks/useAuthors/useAuthors";

const AuthorsTableSection = () => {
  const { authors, isPending } = useAuthorsQuery();

  return (
    <section className="w-full section-card pb-2.5">
      <SectionTitle title="pages.private.tables.authorTable.title" />

      <Table
        data={authors}
        colsTitles={[
          "pages.private.tables.authorTable.cols.author",
          "pages.private.tables.authorTable.cols.function",
          "pages.private.tables.authorTable.cols.status",
          "pages.private.tables.authorTable.cols.employed",
        ]}
        colsData={[
          { type: "TITLE", dataKey: "fullName" },
          { type: "FUNCTION", dataKey: "function" },
          { type: "STATUS", dataKey: "status" },
          { type: "EMPLOYED", dataKey: "employed" },
        ]}
        isPending={isPending}
      />
    </section>
  );
};

export default AuthorsTableSection;
