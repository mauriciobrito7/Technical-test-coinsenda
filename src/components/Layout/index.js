import React from "react";
import { MainContent } from "./Layout.style";

function Layout({ children }) {
  return <MainContent>{children}</MainContent>;
}

export default Layout;
