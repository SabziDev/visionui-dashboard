import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (newValue) => {
    setValue((prev) => (typeof newValue === "boolean" ? newValue : !prev));
  };

  return [value, toggleValue];
};

export default useToggle;
