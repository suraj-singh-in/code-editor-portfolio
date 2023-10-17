// Icons
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import {
  faSquareJs,
  faPython,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

export const initialFolderStructure = [
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
];