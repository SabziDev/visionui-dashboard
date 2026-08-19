import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (newValue) => {
    setValue(typeof newValue === "boolean" ? newValue : (prev) => !prev);
  };

  return [value, toggleValue];
};

export default useToggle;
