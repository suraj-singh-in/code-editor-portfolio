// Icons
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import {
  faSquareJs,
  faPython,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const freeChargeCode = `
/**
 * Represents work experience at a company.
 */
class WorkExperience {
  /**
   * Create a new WorkExperience instance.
   * @param {string} company - The name of the company.
   * @param {string} location - The location of the company.
   * @param {string} position - The job position.
   * @param {string} startDate - The start date of the job.
   * @param {string} endDate - The end date of the job.
   * @param {string[]} responsibilities - An array of responsibilities.
   */
  constructor(company, location, position, startDate, endDate, responsibilities) {
    this.company = company;
    this.location = location;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.responsibilities = responsibilities;
  }

  /**
   * Render and display the work experience details.
   */
  render() {
    console.log(\`Company: \${this.company}\`);
    console.log(\`Location: \${this.location}\`);
    console.log(\`Position: \${this.position}\`);
    console.log(\`Duration: \${this.startDate} - \${this.endDate}\`);
    console.log("Responsibilities:");
    this.responsibilities.forEach((responsibility, index) => {
      console.log(\`\${index + 1}. \${responsibility}\`);
    });
  }
}

/**
 * Responsibilities for the Freecharge work experience.
 * @type {string[]}
 */
const responsibilities = [
  "Implemented the core Content Management System (CMS), completing the project within a time-frame of 6 months.",
  "Enhanced the primary back-end of the customer app, leading to a 20% decrease in response time.",
  "Worked on several projects such as Merchant Business Website, Payment solution dashboard, and support website.",
  "Migrated Operation Panel from Angular JS to React."
];

/**
 * Represents the work experience at Freecharge.
 * @type {WorkExperience}
 */
const freechargeExperience = new WorkExperience(
  "Freecharge Payment Technologies Pvt. Ltd.",
  "Gurugram, India",
  "Software Developer Engineer",
  "Jul 2022",
  "Present",
  responsibilities
);

// Render and display the work experience details
freechargeExperience.render();
`;

const freeChargeOutput = `
~Drive\\Suraj Singh\\Experience\\prosperMe>node freecharge.js


Company: Freecharge Payment Technologies Pvt. Ltd.

Location: Gurugram, India

Position: Software Developer Engineer

Duration: Jul 2022 - Present

Responsibilities:
1. Implemented the core Content Management System (CMS), completing the project within a time-frame of 6 months.
2. Enhanced the primary back-end of the customer app, leading to a 20% decrease in response time.
3. Worked on several projects such as Merchant Business Website, Payment solution dashboard, and support website.
4. Migrated Operation Panel from Angular JS to React.
`;

const prosperMeCode = `
/**
 * Represents work experience at a company.
 * @constructor
 * @param {string} company - The name of the company.
 * @param {string} location - The location of the company.
 * @param {string} position - The job position.
 * @param {string} startDate - The start date of the job.
 * @param {string} endDate - The end date of the job.
 * @param {string[]} responsibilities - An array of responsibilities.
 */
function WorkExperience(company, location, position, startDate, endDate, responsibilities) {
  this.company = company;
  this.location = location;
  this.position = position;
  this.startDate = startDate;
  this.endDate = endDate;
  this.responsibilities = responsibilities;
}

/**
 * Render and display the work experience details.
 */
WorkExperience.prototype.render = function () {
  console.log(\`Company: \${this.company}\`);
  console.log(\`Location: \${this.location}\`);
  console.log(\`Position: \${this.position}\`);
  console.log(\`Duration: \${this.startDate} - \${this.endDate}\`);
  console.log("Responsibilities:");
  this.responsibilities.forEach((responsibility, index) => {
    console.log(\`\${index + 1}. \${responsibility}\`);
  });
};

/**
 * Responsibilities for the ProsperMe work experience.
 * @type {string[]}
 */
const prosperMeResponsibilities = [
  "Built ProsperMe Greens website to bring an online presence for the company’s new brand.",
  "Implemented features like reminder, lead on-boarding, and tracking for internal lead management system."
];

/**
 * Represents the work experience at ProsperMe Developers Pvt. Ltd.
 * @type {WorkExperience}
 */
const prosperMeExperience = new WorkExperience(
  "ProsperMe Developers Pvt. Ltd.",
  "New Delhi, India",
  "Intern - Developer",
  "Feb 2021",
  "Jul 2021",
  prosperMeResponsibilities
);

// Render and display the work experience details
prosperMeExperience.render();
`;

const prosperMeOutput = `
~Drive\\Suraj Singh\\Experience\\prosperMe>node ProsperMe.js

Company: ProsperMe Developers Pvt. Ltd.

Location: New Delhi, India

Position: Intern - Developer

Duration: Feb 2021 - Jul 2021

Responsibilities:
1. Built ProsperMe Greens website to bring an online presence for the company's new brand.
2. Implemented features like reminder, lead on-boarding, and tracking for internal lead management system.
`;

export const initialFolderStructure = [
  {
    name: "Proffesional",
    key: "Proffesional",
    isOpen: true,
    files: [
      {
        name: "Freecharge.js",
        key: "Freecharge",
        icon: faSquareJs,
        code: freeChargeCode,
        output: freeChargeOutput,
      },
      {
        name: "ProsperMe.js",
        key: "ProsperMe",
        icon: faSquareJs,
        code: prosperMeCode,
        output: prosperMeOutput,
      },
      { name: "MSI-Power.js", key: "MSI", icon: faSquareJs },
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
  {
    name: "Project",
    key: "Project",
    files: [
      { name: "Actor.js", key: "Actor", icon: faSquareJs },
      { name: "Portfolio.jsx", key: "Portfolio", icon: faReact },
    ],
  },
  {
    name: "Achievements",
    key: "Achievements",
    files: [{ name: "FC Warrior", key: "FC-Warrior", icon: faSquareJs }],
  },
];
