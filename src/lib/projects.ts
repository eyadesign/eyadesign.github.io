export interface Block {
  title: string;
  text?: string[];
  list?: string[];
  /** One image renders full width, two render side by side. */
  images?: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** Short line under the card title. */
  tagline: string;
  category: string;
  platform: string;
  client: string;
  /** Label for the client field, e.g. "Client" or "Market". */
  clientLabel?: string;
  summary: string;
  cover: string;
  blocks: Block[];
  note?: string;
}

const s = (slug: string, n: number) =>
  `/work/${slug}/${String(n).padStart(2, "0")}.webp`;

export const projects: Project[] = [
  {
    slug: "maintenance-tracker",
    title: "Maintenance Tracker",
    tagline: "B2B SaaS for Car Maintenance Centers",
    category: "B2B SaaS",
    platform: "Web App",
    clientLabel: "Market",
    client: "USA",
    summary:
      "A SaaS product designed for car maintenance centers in the USA. It streamlines daily operations, enhances efficiency and reduces costs, tailored to the needs of each maintenance center.",
    cover: "/work/maintenance-tracker/cover.webp",
    blocks: [
      {
        title: "The Problem",
        text: [
          "Users were struggling with the work order flow: the place where they receive cars, inspect them and carry out every procedure a car needs, across the different roles inside a maintenance center.",
          "As a UX design team, our goal was to analyze the pain points raised by the business team in the work order flow, and implement design improvements that make it easier to use and reduce task time.",
        ],
        images: [s("maintenance-tracker", 1)],
      },
      {
        title: "Task Analysis & Usability Review",
        text: [
          "We ran a task analysis to understand the users' goals and the tasks they perform to achieve them, breaking complex tasks into smaller steps and identifying pain points where users might struggle.",
          "Hierarchical task analysis diagrams were built for each core role, such as the engineer (inspector) and the service advisor, then paired with an expert usability review of every step of the flow.",
        ],
        images: [s("maintenance-tracker", 2), s("maintenance-tracker", 3)],
      },
      {
        title: "Expert Review Findings",
        list: [
          "There was no edit or delete option for an inspection.",
          "The plus icon conveyed the wrong meaning.",
          "Two lines of tabs went against the best practices of tabs.",
          "Saving a report was not clear or descriptive.",
          "The “show to technician” option appeared before any technician was selected.",
        ],
        images: [s("maintenance-tracker", 4)],
      },
      {
        title: "Ideating Solutions",
        text: [
          "Before usability testing, we ideated solutions for the problems uncovered by the task analysis and review: a more descriptive inspection flow with inline “add inspection”, a cleaner parts mapping step, clearer client approval with confirmation, and a maintenance view split into parts, operations and programming.",
        ],
        images: [
          s("maintenance-tracker", 5),
          s("maintenance-tracker", 6),
          s("maintenance-tracker", 7),
        ],
      },
      {
        title: "Usability Testing",
        text: [
          "To validate whether the proposed solutions improved the work order flow, we ran usability testing tailored to car maintenance engineers. The second inspection proposal proved more usable and resulted in a lower task time.",
        ],
        images: [s("maintenance-tracker", 8), s("maintenance-tracker", 9)],
      },
      {
        title: "Designing a Better Experience",
        text: [
          "With enough data to understand the flow's problems, we designed the improved experience across inspection, parts mapping, client approval, parts order, maintenance, validation and history.",
        ],
        images: [s("maintenance-tracker", 10)],
      },
    ],
  },
  {
    slug: "carhive",
    title: "CarHive",
    tagline: "Car Rental Mobile App in KSA",
    category: "Car Rental",
    platform: "Mobile App",
    clientLabel: "Market",
    client: "Saudi Arabia",
    summary:
      "A leading car rental app in KSA. CarHive lets customers search available rental cars, choose pick-up and drop-off locations and select rental periods directly from their phone.",
    cover: "/work/carhive/cover.webp",
    note: "Due to NDA restrictions, the full case study is available upon request.",
    blocks: [
      {
        title: "Problem & Goal",
        text: [
          "CarHive, a car rental service based in Saudi Arabia, was facing low conversion rates and high cancellation rates on its mobile app, resulting in a poor experience for customers.",
          "Our goal was to identify the pain points in the app's user journey and implement design improvements that increase conversion, reduce cancellations and improve the overall experience.",
          "We chose the design thinking framework (Empathize, Define, Ideate, Prototype, Test) as a user-centric way to deeply understand user needs, the problem context and its constraints.",
        ],
        images: [s("carhive", 1)],
      },
      {
        title: "01 — Information Architecture",
        text: [
          "Using information architecture testing methods like card sorting and tree testing, we tested CarHive's information architecture to identify findability problems.",
        ],
        images: [s("carhive", 2)],
      },
      {
        title: "02 — Competitive Analysis",
        text: [
          "Analyzing competitors' booking flows helped us identify problems in our own process. By studying their flows thoroughly, we found areas for improvement.",
        ],
        images: [s("carhive", 3)],
      },
      {
        title: "03 — Heuristic Evaluation",
        text: [
          "A heuristic evaluation surfaced deeper issues that are easy to miss but quietly affect the experience, and we recommended a solution for each one.",
        ],
        images: [s("carhive", 4)],
      },
      {
        title: "04 — Usability Testing",
        text: [
          "We used Useberry to run unmoderated usability testing and gather feedback efficiently, then complemented it with remote moderated sessions to explore user behavior in more depth.",
        ],
        images: [s("carhive", 5)],
      },
      {
        title: "05 — Designing a Better Experience",
        text: [
          "With enough data to understand the problem and the market, we designed an improved experience across search, car details and booking.",
        ],
        images: [s("carhive", 6)],
      },
    ],
  },
  {
    slug: "pex",
    title: "Palestine Exchange",
    tagline: "Stock Exchange Platform Redesign",
    category: "Fintech",
    platform: "Desktop & Mobile Web",
    client: "Palestine Exchange",
    summary:
      "The official Palestine stock exchange platform, giving users comprehensive stock tracking, legal insights and in-depth Palestinian market information, redesigned for usability and visual clarity.",
    cover: "/work/pex/cover.webp",
    blocks: [
      {
        title: "Goals",
        list: [
          "Align with the business on all needs.",
          "Identify usability issues and possible information architecture enhancements.",
          "Design a more usable, useful and visually appealing platform.",
        ],
        images: [s("pex", 1)],
      },
      {
        title: "01 — Competitive Analysis",
        text: [
          "A thorough competitive analysis identified industry-leading standards in information architecture, navigation and visual data representation.",
        ],
        images: [s("pex", 2)],
      },
      {
        title: "02 — Medium Fidelity Wireframes",
        text: [
          "Medium fidelity wireframes established the right information architecture, intuitive navigation and effective visual data representation before any visual design.",
        ],
        images: [s("pex", 3)],
      },
      {
        title: "03 — Designing a Better Experience",
        text: [
          "The wireframes were transformed into high fidelity designs that blend aesthetics with stronger functionality, elevating the trading experience.",
        ],
        images: [s("pex", 4)],
      },
      {
        title: "Before & After",
        images: [s("pex", 5), s("pex", 6), s("pex", 7)],
      },
    ],
  },
  {
    slug: "ams",
    title: "AMS Mobile App",
    tagline: "Antimicrobial Stewardship · Pfizer",
    category: "Healthcare",
    platform: "Mobile App",
    client: "Pfizer",
    summary:
      "Improve antibiotic use in your hospital with an AMS assessment. A mobile app that guides healthcare professionals through assessing their Antimicrobial Stewardship Program and delivers Pfizer certificates for hospitals.",
    cover: "/work/ams/cover.webp",
    blocks: [
      {
        title: "Goal & Scope",
        text: [
          "Design a user interface for a mobile app that guides healthcare professionals through an assessment of their Antimicrobial Stewardship Program (ASP).",
          "The project focused on an intuitive, user-friendly UI that walks users through a comprehensive assessment, highlighting areas of strength and identifying opportunities for improvement.",
        ],
        images: [s("ams", 1)],
      },
      {
        title: "01 — Competitive Analysis",
        text: [
          "We analyzed existing indirect competitors to identify their strengths, weaknesses and potential areas for improvement in the proposed app.",
        ],
        images: [s("ams", 2)],
      },
      {
        title: "02 — Ideation",
        text: [
          "Using the “Crazy 8s” technique, we rapidly generated a diverse range of UI concepts and functionalities within a time-boxed session.",
        ],
        images: [s("ams", 3)],
      },
      {
        title: "03 — UI Design",
        text: [
          "Based on the insights from the previous phases, we designed the app's interface for clarity, intuitiveness and a seamless assessment experience.",
        ],
        images: [s("ams", 4)],
      },
    ],
  },
  {
    slug: "gaith",
    title: "Gaith",
    tagline: "Donation Platform Mobile App",
    category: "Non-profit",
    platform: "Mobile App",
    clientLabel: "Market",
    client: "Arab World",
    summary:
      "One of the largest donation platforms in the Arab world, redesigned as a mobile app that makes giving simpler, more transparent and accessible.",
    cover: "/work/gaith/cover.webp",
    blocks: [
      {
        title: "Goals",
        list: [
          "Create a user-friendly and intuitive mobile application.",
          "Let users view detailed information about charities.",
          "Make the app accessible to users with disabilities.",
        ],
        images: [s("gaith", 1)],
      },
      {
        title: "01 — User Research",
        text: [
          "Extensive research to understand the target audience, including their needs, preferences and pain points.",
        ],
        images: [s("gaith", 2)],
      },
      {
        title: "02 — Low Fidelity Wireframes",
        text: [
          "The research and personas shaped a basic layout and structure for the mobile application.",
        ],
        images: [s("gaith", 3)],
      },
      {
        title: "03 — Designing a Better Experience",
        text: [
          "In the high fidelity phase, the client's vision and user needs became pixel-perfect screens, with refined typography, color and layout for a cohesive interface.",
        ],
        images: [s("gaith", 4), s("gaith", 5), s("gaith", 6)],
      },
      {
        title: "04 — Interactive Prototype",
        text: [
          "The high fidelity screens became a functional prototype, letting users explore the solutions and give feedback before development.",
        ],
        images: [s("gaith", 7)],
      },
      {
        title: "05 — Usability Testing",
        text: [
          "Participants navigated the prototype through real-world scenarios, helping us identify usability issues and make sure the final product felt intuitive and seamless.",
        ],
        images: [s("gaith", 8)],
      },
    ],
  },
  {
    slug: "tarasol",
    title: "Tarasol",
    tagline: "Ministries Communication App",
    category: "Government",
    platform: "Tablet & Mobile",
    client: "Egyptian Ministries",
    summary:
      "The main tool used by Egyptian ministries for internal and external communication: exchanging correspondence, tasks and attachments, redesigned for clarity and usability.",
    cover: "/work/tarasol/cover.webp",
    blocks: [
      {
        title: "Overview & Scope",
        text: [
          "Tarasol is a tablet and mobile application that streamlines communication within Egyptian government ministries. The project aimed to improve its usability and adoption across ministries.",
          "The scope covered UI simplification, optimizing functionality for efficient access to information, and consistency across the tablet and mobile apps.",
        ],
        images: ["/work/tarasol/overview.webp"],
      },
      {
        title: "Challenges",
        list: [
          "Complex interface: the initial interface was cluttered and lacked intuitive navigation, causing confusion and frustration.",
          "Information overload: users needed to access all relevant content at once, without excessive scrolling, to act efficiently.",
        ],
        images: [s("tarasol", 1)],
      },
      {
        title: "01 — Competitive Analysis",
        text: [
          "To find best practices in flow efficiency and task completion time, we analyzed indirect competitors and evaluated their strengths and weaknesses.",
        ],
        images: [s("tarasol", 2)],
      },
      {
        title: "02 — Ideation & Testing",
        text: [
          "Using the “Crazy 8s” technique, we rapidly generated a diverse range of UI concepts and functionalities within a time-boxed session.",
        ],
        images: [s("tarasol", 3)],
      },
      {
        title: "03 — UI Design",
        text: [
          "Based on the insights from the previous phases, we designed an interface built for clarity, intuitiveness and a seamless experience on tablet and mobile.",
        ],
        images: [s("tarasol", 4)],
      },
    ],
  },
];

export const featured = projects.slice(0, 4);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function moreProjects(slug: string, count = 2) {
  const i = projects.findIndex((p) => p.slug === slug);
  return Array.from(
    { length: count },
    (_, k) => projects[(i + 1 + k) % projects.length]
  );
}
