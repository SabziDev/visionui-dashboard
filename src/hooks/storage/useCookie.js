/* eslint-disable @stylistic/padding-line-between-statements */
/* eslint-disable unicorn/no-document-cookie */

import { useState } from "react";

const useCookie = ({ key, defaultValue }) => {
  const [storedValue, setStoredValue] = useState(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${key}=`))
      ?.slice(key.length + 1);

    if (!cookieValue) return defaultValue;
    const decodedValue = decodeURIComponent(cookieValue);

    try {
      return typeof defaultValue === "string"
        ? decodedValue
        : JSON.parse(decodedValue);
    } catch {
      return defaultValue;
    }
  });

  const setValue = ({ value, options }) => {
    const serializedValue =
      typeof value === "string" ? value : JSON.stringify(value);
    const cookieValue = encodeURIComponent(serializedValue);
    let cookie = `${key}=${cookieValue}`;

    const cookieOptions = [
      ["path", options?.path],
      ["domain", options?.domain],
      ["samesite", options?.sameSite],
      ["secure", options?.secure],
      ["partitioned", options?.partitioned],
      ["max-age", options?.maxAge],
    ];
    for (const [optionKey, optionValue] of cookieOptions) {
      if (optionValue === undefined) continue;

      cookie +=
        optionValue === true
          ? `; ${optionKey}`
          : `; ${optionKey}=${optionValue}`;
    }

    document.cookie = cookie;
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useCookie;
