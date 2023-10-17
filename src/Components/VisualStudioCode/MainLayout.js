import mainLayoutStyles from "@/styles/VisualStudioCode/MainLayoutStyles.module.scss";

import ActionBar from "./ActionBar";
import SideBar from "./SideBar";
import Editor from "./Editor";
import { useState } from "react";

const MainLayout = () => {
  const [currentFile, setCurrentFile] = useState({});

  return (
    <div className={mainLayoutStyles.container}>
      <ActionBar />
      <SideBar onCurrentFileChange={setCurrentFile} />
      <Editor currentFile={currentFile} />
    </div>
  );
};

export default MainLayout;
