import sideBarStyles from "@/styles/VisualStudioCode/SideBarStyles.module.scss";
import Image from "next/image";

import more from "@/static/more.svg";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faFolder,
  faFolderClosed,
} from "@fortawesome/free-solid-svg-icons";

import { initialFolderStructure } from "@/utils/constant";

const SideBar = ({ onCurrentFileChange }) => {
  const [folderStructure, setFolderStructure] = useState(
    initialFolderStructure
  );

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
            <li
              className={`${sideBarStyles.isFolder}  ${sideBarStyles.rootFolder}`}
            >
              <div>
                <label>
                  <FontAwesomeIcon icon={faFolderClosed} />
                  <strong className={sideBarStyles.folderName}>EXPLORER</strong>
                </label>
              </div>
              <ul>
                {folderStructure.map((folder, folderIndex) => {
                  return (
                    <li
                      className={`${sideBarStyles.isFolder}`}
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
                              onClick={() => onCurrentFileChange(file)}
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
