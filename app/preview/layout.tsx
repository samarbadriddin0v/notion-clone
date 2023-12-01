import { ChildProps } from "@/types";
import React from "react";

const Layout = ({ children }: ChildProps) => {
  return <div className="h-full">{children}</div>;
};

export default Layout;
