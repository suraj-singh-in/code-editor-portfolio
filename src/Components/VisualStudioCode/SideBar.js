import sideBarStyles from "@/styles/VisualStudioCode/SideBarStyles.module.scss";
import Image from "next/image";

import more from "@/static/more.svg";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import {
  faFolderOpen,
  faFolder,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareJs,
  faPython,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  const [folderStructure, setFolderStructure] = useState([
    {
      name: "Proffesional",
      key: "Proffesional",
      isOpen: true,
      files: [
        { name: "Freecharge.js", key: "Freecharge", icon: faSquareJs },
        { name: "ProsperMe.js", key: "ProsperMe", icon: faSquareJs },
      ],
    },
    {
      name: "Education",
      key: "Education",
      files: [
        { name: "Engineering.py", key: "Engineering", icon: faPython },
        { name: "Schooling.py", key: "Schooling", icon: faPython },
      ],
    },
    {
      name: "Technical Skills",
      key: "technical-skills",
      files: [
        { name: "web-development.html", key: "web-development", icon: faHtml5 },
        { name: "Programming.html", key: "Programming", icon: faHtml5 },
        { name: "Tools.html", key: "Tools", icon: faHtml5 },
        { name: "Languages.md", key: "Languages", icon: faCircleInfo },
      ],
    },
  ]);

  const handleFolderPress = (folder) => {
    let newFolderStructure = folderStructure.map((fold, foldIndex) => {
      if (folder.key === fold.key) {
        return { ...fold, isOpen: !fold.isOpen };
      } else {
        return fold;
      }
    });
    setFolderStructure(newFolderStructure);
  };

  return (
    <div className={sideBarStyles.sidebar}>
      <div className={sideBarStyles.projectHeader} key="projectHeader">
        <div>Portfolio</div>
        <div>
          <Image src={more} height={24} width={24} alt="more" />
        </div>
      </div>
      <div className={sideBarStyles.filesExplorer} key="filesExplorer">
        <div className={sideBarStyles.treeView}>
          <ul className={sideBarStyles.root} key={"unqiue-key"}>
            <li className={`${sideBarStyles.isFolder} `}>
              <div className="checkbox partial-check">
                <label>
                  {/* <FontAwesomeIcon icon="fa-regular fa-mug-hot" /> */}
                  <strong>EXPLORER</strong>
                </label>
              </div>
              <ul>
                {folderStructure.map((folder, folderIndex) => {
                  return (
                    <li
                      className={`${sideBarStyles.isFolder} `}
                      key={`${folder.key}-${folderIndex}`}
                    >
                      <label onClick={() => handleFolderPress(folder)}>
                        <FontAwesomeIcon
                          icon={folder.isOpen ? faFolderOpen : faFolder}
                        />
                        <strong className={sideBarStyles.folderName}>
                          {folder.name}
                        </strong>
                      </label>
                      <ul
                        className={`${
                          folder.isOpen
                            ? sideBarStyles.open
                            : sideBarStyles.close
                        }`}
                        key={`${folder.key}-${folderIndex}`}
                      >
                        {folder.files.map((file, fileIndex) => {
                          return (
                            <div
                              index={`${file.key}-${fileIndex}`}
                              className={sideBarStyles.isFile}
                            >
                              <FontAwesomeIcon icon={file.icon} />
                              <span className={sideBarStyles.fileName}>
                                {file.name}
                              </span>
                            </div>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
