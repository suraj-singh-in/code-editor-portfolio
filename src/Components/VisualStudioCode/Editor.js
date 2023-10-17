import editorStyle from "@/styles/VisualStudioCode/Editor.module.scss";

const Editor = ({ currentFile }) => {
  console.log("🚀 ~ file: Editor.js:6 ~ Editor ~ currentFile:", currentFile);

  return (
    <div className={editorStyle.editor}>
      <div className={editorStyle.activityBar}>{currentFile.name}</div>
      <div className={editorStyle.editRegion}>{currentFile.name}</div>
      <div className={editorStyle.terminal}>{currentFile.name}</div>
    </div>
  );
};

export default Editor;
