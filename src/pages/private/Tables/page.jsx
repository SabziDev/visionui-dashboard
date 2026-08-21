import Head from "@/layouts/components/Head";

import ProjectsTableSection from "../sections/ProjectsTableSection/section";
import AuthorsTableSection from "./sections/AuthorsTableSection/section";

const Tables = () => {
  return (
    <>
      <Head />

      <div className="space-y-6 fa:rtl">
        <AuthorsTableSection />
        <ProjectsTableSection />
      </div>
    </>
  );
};

export default Tables;
