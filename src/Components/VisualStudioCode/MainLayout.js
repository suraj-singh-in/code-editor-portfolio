import mainLayoutStyles from "@/styles/VisualStudioCode/MainLayoutStyles.module.scss";

import ActionBar from "./ActionBar";
import SideBar from "./SideBar";

const MainLayout = () => {
  return (
    <div className={mainLayoutStyles.container}>
      <ActionBar />
      <SideBar />
      <div className={mainLayoutStyles.editor}>editor</div>
    </div>
  );
};

export default MainLayout;
