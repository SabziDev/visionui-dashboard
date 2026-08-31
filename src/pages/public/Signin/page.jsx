/* eslint-disable custom/add-blank-line-before-jump-statement */

import { use } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";

import AuthContext from "@/contexts/Auth/Auth";
import Head from "@/layouts/components/Head";
import { useGetAdmin } from "@/services/features/admin/hooks/useAdmin/useAdmin";

import BgImg from "./components/BgImg/BgImg";
import Form from "./components/Form/Form";

const Signin = () => {
  const { admin } = useGetAdmin();
  const { adminId } = use(AuthContext);

  const { t } = useTranslation();

  if (adminId === admin.id) return <Navigate to="/" replace />;
  return (
    <>
      <Head />

      <div className="fixed inset-0 flex-justify-center gap-x-0 bg-navy 2xl:gap-x-25">
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
