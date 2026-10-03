import TransitionOutlet from "@/layouts/components/TransitionOutlet/TransitionOutlet";

const Main = () => {
  return (
    <main id="main-root" className="my-7.5">
      <div id="main-root__container" className="container *:*:not-first:mt-6">
        <TransitionOutlet />
      </div>
    </main>
  );
};

export default Main;
