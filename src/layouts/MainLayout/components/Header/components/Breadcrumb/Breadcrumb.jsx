const Breadcrumb = ({ pagePath }) => {
  return (
    <div className="mb-1.5 font-VazirMedium text-sm">
      <span className="text-slate-400">Pages</span>
      <span> / {pagePath}</span>
    </div>
  );
};

export default Breadcrumb;
