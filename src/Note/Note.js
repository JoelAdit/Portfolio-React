import project1 from "../Assets/project-1.jpg";
import project2 from "../Assets/project-2.jpg";
import project3 from "../Assets/project-3.jpg";
import project4 from "../Assets/project-4.jpg";
import project5 from "../Assets/project-5.webp";
import project6 from "../Assets/project6.jpg";
import { MdAdsClick } from "react-icons/md";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2018 - 2020",
    role: "Process Executive",
    company: "COGNIZANT TECHNOLOGY SOLUTION.",
    description: `• Updating of Provider information and provider hospitals and group’s data in the client software
            • Pilot batch to handle the process.
            • Got appreciated from the leads.
            • Have good rapport with the clients.
            • Handling of Emails from clients.
            • Holding good production and quality report.`,
  },

  // {
  //   year: "2024 - current",
  //   role: "Frontend Developer",
  //   company: "-",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Trip-Adviser Website",
    image: project1,
    description:
      "Its a Clone project Exactly Look Like from Original website with features like places listing overall look mirror.",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "E-Learning Website",
    image: project2,
    description:
      "This project is a basic clone of the Udemy homepage, created solely with HTML and CSS. It aims to replicate the appearance and layout of the Udemy homepage, providing users with a familiar interface for browsing courses.",
    technologies: ["React"],
    Link: (
      <a href="https://joeladit.github.io/Udemy_clone/">
        {" "}
        <MdAdsClick />{" "}
      </a>
    ),
  },
  {
    title: "e-Commerce site for 'Nature Pot' ",
    image: project3,
    description:
      "This project is a website showcasing the offerings of Green Pot Plants, a virtual plant nursery.the website provides users with an immersive experience to explore various plants and gardening products.",
    technologies: ["HTML", "React", "Tailwind", "JavaScript"],
  },
  {
    title: "e-Commerce site for 'Wear Your Comfort' ",
    image: project4,
    description:
      "This project is a e-commerce website dedicated to selling dresses. the website provides users with a seamless shopping experience, showcasing a variety of dress collections and offering essential e-commerce functionalities.",
    technologies: ["HTML", "Tailwind", "React", "JavaScript"],
  },
  {
    title: "Bulk Mail",
    image: project5,
    description:
      "This project is a bulk email sender that allows users to write a single email and send it to multiple recipients ",
    technologies: ["HTML", "Tailwind-CSS", "React", "Express", "MongoDB"],
  },
  {
    title: "Portfolio",
    image: project6,
    description:
      "This current viewing  personal portfolio website designed to showcase my work, skills, and achievements. the site provides a professional and visually appealing platform to present ma projects and experiences.The website for managing  projects, with features and progress tracking,",
    technologies: ["React", "Tailwind-CSS", "Frame Motion"],
  },
];

export const CONTACT = {
  address: " ",
  phoneNo: " ",
  email: "",
};
