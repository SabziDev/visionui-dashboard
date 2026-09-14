import pagesSeo from "@/data/pagesSeo/pagesSeo";

const NotFoundTitle = () => {
  return (
    <h2 className="mb-2 text-3xl font-bold text-white">
      {pagesSeo.notFound.title}
    </h2>
  );
};

export default NotFoundTitle;
