import { ViewTransition } from "react";

const TransitionOutlet = ({ children }) => {
  return (
    <ViewTransition update="page" default="none">
      {children}
    </ViewTransition>
  );
};

export default TransitionOutlet;
