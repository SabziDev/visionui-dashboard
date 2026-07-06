import pagesMeta from "@public/data/pages-meta/pages-meta";

import Head from "@/pages/components/Head";

import BgImg from "./components/BgImg/BgImg";
import Form from "./components/Form/Form";

const Signin = () => {
  return (
    <>
      <Head>
        <title>{pagesMeta.signin.title}</title>
        <meta name="description" content={pagesMeta.signin.desc} />
      </Head>

      <div className="flex-justify-center gap-x-0 max-lg:relative 2xl:gap-x-25">
        <div className="relative w-1/2 max-lg:hidden">
          <BgImg />
          <div className="absolute inset-0 m-auto flex-center flex-col">
            <p className="text-sm tracking-[0.18em] xl:text-xl">
              INSPIRED BY THE FUTURE:
            </p>
            <h1 className="font-PlusJakartaSansBold text-2xl tracking-[0.18em] xl:text-4xl">
              THE VISION UI DASHBOARD
            </h1>
          </div>
        </div>

        <BgImg className="opacity-25 blur-sm lg:hidden" />

        <div className="flex-center min-h-screen w-1/2 flex-col max-lg:z-100">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Signin;
