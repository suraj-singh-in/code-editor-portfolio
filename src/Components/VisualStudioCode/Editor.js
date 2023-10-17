import editorStyle from "@/styles/VisualStudioCode/Editor.module.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Editor = ({ currentFile }) => {
  console.log("🚀 ~ file: Editor.js:6 ~ Editor ~ currentFile:", currentFile);

  return (
    <div className={editorStyle.editor}>
      <div className={editorStyle.activityBar}>
        <span className={editorStyle.fileBox}>
          {currentFile.name} <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
      <div className={editorStyle.editRegion}>{currentFile.name}</div>
      <div className={editorStyle.terminal}>{currentFile.name}</div>
    </div>
  );
};

export default Editor;
