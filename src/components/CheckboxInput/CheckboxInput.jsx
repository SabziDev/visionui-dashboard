import { useId } from "react";

import Skeleton from "@/components/Skeleton/Skeleton";

import NormalInput from "./components/NormalInput/NormalInput";
import RHFInput from "./components/RHFInput/RHFInput";

const CheckboxInput = ({
  children,
  handelWithRHF,
  checked = false,
  isPending,
  onChange,
}) => {
  const id = useId();
  let inputContent = null;

  if (!inputContent && isPending) {
    inputContent = <Skeleton borderRadius={4} className="w-50" />;
  }
  if (!inputContent && handelWithRHF) {
    inputContent = (
      <RHFInput name={handelWithRHF.name} register={handelWithRHF.register}>
        {children}
      </RHFInput>
    );
  }
  if (!inputContent) {
    inputContent = (
      <NormalInput id={id} checked={checked} onChange={onChange}>
        {children}
      </NormalInput>
    );
  }

  return (
    <label
      htmlFor={handelWithRHF?.name ?? id}
      className="flex-center cursor-pointer gap-x-2.5"
    >
      {inputContent}
    </label>
  );
};

export default CheckboxInput;
