/* eslint-disable default-case */
/* eslint-disable @stylistic/padding-line-between-statements */
/* eslint-disable custom/add-blank-line-before-return */

import { toast } from "react-hot-toast";

import { i18n } from "@/i18n";

const errorHandlers = (err) => {
  switch (err.code) {
    case "ERR_NETWORK": {
      toast.error(i18n.t("errors.connection"));
      break;
    }
    case "ECONNABORTED": {
      toast.error(i18n.t("errors.abort"));
      break;
    }
  }
  switch (err.response.status) {
    case 403: {
      toast.error(i18n.t("errors.access"));
      break;
    }
    case 404: {
      toast.error(i18n.t("errors.notFound"));
      break;
    }
    case 409: {
      toast.error(i18n.t("errors.conflict"));
      break;
    }
    case 422: {
      toast.error(i18n.t("errors.validation"));
      break;
    }
  }
  if (err.response.status >= 500) {
    toast.error(i18n.t("errors.server"));
    return;
  }

  // TODO Default-Error
  toast.error(i18n.t("errors.default"));
};

export default errorHandlers;
