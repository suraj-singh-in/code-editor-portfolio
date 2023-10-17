import actionBarStyles from "@/styles/VisualStudioCode/ActionBarStyles.module.scss";
import Image from "next/image";

import folder from "@/static/folder.svg";
import search from "@/static/search.svg";
import category from "@/static/category.svg";
import setting from "@/static/setting.svg";

const ActionBar = () => {
  return (
    <div className={actionBarStyles.actionBar}>
      <div className={actionBarStyles.actionBarUpper}>
        <div className={actionBarStyles.actionBarItem}>
          <Image src={folder} width={28} height={28} alt="folder" />
        </div>
        <div className={actionBarStyles.actionBarItem}>
          <Image src={search} width={28} height={28} alt="search" />
        </div>
        <div className={actionBarStyles.actionBarItem}>
          <Image src={category} width={28} height={28} alt="category" />
        </div>
      </div>
      <div className={actionBarStyles.actionBarLower}>
        <div className={actionBarStyles.actionBarItem}>
          <Image src={setting} width={28} height={28} alt="setting" />
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
