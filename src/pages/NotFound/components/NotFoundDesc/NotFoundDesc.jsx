import pagesSeo from "@/data/pagesSeo/pagesSeo";

const NotFoundDesc = () => {
  return (
    <p className="mb-8 max-w-md text-lg text-gray-300">
      {pagesSeo.notFound.desc}
    </p>
  );
};

export default NotFoundDesc;
