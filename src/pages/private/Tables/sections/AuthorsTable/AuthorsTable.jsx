import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";
import Table from "@/pages/private/components/Table/Table";
import { useAuthorsQuery } from "@/services/hooks/useAuthors/useAuthors";

const AuthorsTable = () => {
  const { authors, isPending } = useAuthorsQuery();

  return (
    <div className="w-full rounded-2xl px-5 pt-7 pb-2 bg-primary-gradient">
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
    </div>
  );
};

export default AuthorsTable;
