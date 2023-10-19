// styles
import editorStyle from "@/styles/VisualStudioCode/Editor.module.scss";

// Icons
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import play from "@/static/play.svg";

// Libs
import SyntaxHighlighter from "react-syntax-highlighter";

// themes
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atelierCaveDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Image from "next/image";
import { useEffect, useState } from "react";

const Editor = ({ currentFile }) => {
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    setIsRun(false);
  }, [currentFile]);

  return (
    <div className={editorStyle.editor}>
      {currentFile.name ? (
        <div className={editorStyle.activityBar}>
          <span className={editorStyle.fileBox}>
            {currentFile.name} <FontAwesomeIcon icon={faXmark} />
          </span>
          <Image
            className={editorStyle.playButton}
            src={play}
            hieght={24}
            width={24}
            onClick={() => setIsRun(true)}
          />
        </div>
      ) : (
        <></>
      )}
      <div className={editorStyle.editRegion}>
        {currentFile.code ? (
          <SyntaxHighlighter
            children={currentFile.code}
            language="javascript"
            style={dracula}
            showLineNumbers
            wrapLongLines
          />
        ) : (
          <></>
        )}
      </div>
      <div className={editorStyle.terminal}>
        <SyntaxHighlighter
          children={isRun ? currentFile.output : `~Drive\\Suraj Singh >`}
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines
        />
      </div>
    </div>
  );
};

export default Editor;
