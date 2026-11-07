/* eslint-disable unicorn/no-document-cookie */

import { useState } from "react";

const useCookie = ({ key, defaultValue }) => {
  const [storedValue, setStoredValue] = useState(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${key}=`))
      ?.slice(key.length + 1);

    return cookieValue
      ? JSON.parse(decodeURIComponent(cookieValue))
      : defaultValue;
  });

  const setValue = ({ value, options }) => {
    const cookieValue = encodeURIComponent(JSON.stringify(value));

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
