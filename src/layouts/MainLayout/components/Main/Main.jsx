import PageTransition from "@/layouts/components/PageTransition/PageTransition";

const Main = () => {
  return (
    <main id="main-root" className="my-7.5">
      <div id="main-root__container" className="container *:*:not-first:mt-6">
        <PageTransition />
      </div>
    </main>
  );
};

export default Main;
