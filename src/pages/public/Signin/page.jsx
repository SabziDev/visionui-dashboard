import pagesMeta from "@public/data/pages-meta/pages-meta";

import Head from "@/pages/components/Head";

import Form from "./components/Form/Form";

const Signin = () => {
  return (
    <>
      <Head>
        <title>{pagesMeta.signin.title}</title>
        <meta name="description" content={pagesMeta.signin.desc} />
      </Head>

      <div className="flex-justify-center gap-x-0 2xl:gap-x-25">
        <div className="relative hidden min-h-screen w-1/2 lg:block">
          <img
            src="/images/pictures/pages/signin/sandro-katalina.png"
            alt="bg-brand"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 m-auto flex-center flex-col text-red-500">
            <p>INSPIRED BY THE FUTURE:</p>
            <h1>THE VISION UI DASHBOARD</h1>
          </div>
        </div>

        <div className="flex-center min-h-screen w-1/2 flex-col">
          <div className="flex-justify-center flex-col items-start">
            <span className="font-PlusJakartaSansBold text-3xl">
              Nice to see you!
            </span>
            <p className="mt-1.5 font-PlusJakartaSansMedium text-sm text-gray-400">
              Enter your email and password to sign in
            </p>

            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
