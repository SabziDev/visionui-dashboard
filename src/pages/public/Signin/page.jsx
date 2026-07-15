import { use } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";

import AuthContext from "@/contexts/Auth";
import Head from "@/pages/components/Head";
import { useAdminsQuery } from "@/services/hooks/useAdmins/useAdmins";

import BgImg from "./components/BgImg/BgImg";
import Form from "./components/Form/Form";

const Signin = () => {
  const { admin, isPending, isError } = useAdminsQuery();
  const { adminId } = use(AuthContext);

  const { t } = useTranslation();

  if (isPending || isError) return;

  return adminId === admin.id ? (
    <Navigate to="/" replace />
  ) : (
    <>
      <Head>
        <title>{t("pagesMeta.signin.title")}</title>
        <meta name="description" content={t("pagesMeta.signin.desc")} />
      </Head>

      <div className="flex-justify-center gap-x-0 bg-navy max-lg:relative 2xl:gap-x-25">
        <div className="relative w-1/2 max-lg:hidden">
          <BgImg />
          <div className="absolute inset-0 m-auto flex-center flex-col">
            <p className="text-sm tracking-ultra-wide xl:text-xl">
              {t("pages.public.signin.desc")}
            </p>
            <h1 className="font-VazirBold text-2xl tracking-ultra-wide xl:text-4xl">
              {t("pages.public.signin.title")}
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
