import bodyshop from "../assets/bodyshop.png";
import foodmenu from "../assets/foodmenu.png";
import nayomi from "../assets/nayomi.png";
import portfolio from "../assets/portfolio.png";
import lectureProject from "../assets/lectureProject.png";
import netflixclone from "../assets/netflixclone.png";
const info = {
  // ============ MAIN DETAILS ============
  main: {
    name: "Sayar Samanta",
    description: `I  am a seasoned React Native developer with 7 years of professional experience building scalable, user-friendly mobile applications. My expertise lies in crafting
        cross-platform solutions, optimizing performance, and delivering high-quality
        apps that meet user needs and business goals.
        Eager to expand my skill set, I am currently exploring React.js and Node.js to
        transition into a successful full stack developer. My goal is to leverage my mobile
        development expertise while deepening my understanding of backend and
        full-stack development to build end-to-end, impactful solutions. I am passionate
        about continuous learning, staying updated with the latest technologies, and
        collaborating on innovative projects.`,
    shortDes:
      "I am an experienced React Native developer with over 7 years of expertise in building scalable and intuitive mobile applications. I specialize in creating cross-platform solutions, optimizing app performance, and delivering high-quality applications that align with both user expectations and business objectives.",
    role: "Senior React Native Developer",
    photo: "../profilePic.png",
    email: "sayarsamanta@gmail.com",
  },
  // ============ TYPE WRITER TEXT ============
  loopText: [
    "Quick Learner",
    "Self Driven",
    "Innovative Thinker",
    "Team Management",
  ],

  // ============ SOCIAL LINKS ============
  socials: {
    github: "https://github.com/sayarsamanta",
    linkedin: "https://www.linkedin.com/in/sayarsamanta/",
    instagram: "https://www.instagram.com/sayarsamanta5/",
    facebook: "https://www.facebook.com/sayar.barrackpore/",
  },

  // ============ PROJECTS ============
  projects: {
    title: "My Recent Works",
    card: [
      {
        title: "Netflix Clone",
        description:
          "Created Netflix like clone using create react app. This has the firebase authentication, Google sign in option. Features like add to favorite and search for a specific movie is implemented.",
        technologies: "React, Tailwind, Redux",
        github: "https://github.com/sayarsamanta/sayar_netflix_clone",
        image: netflixclone,
      },
      {
        title: "Basic Food Ordering App Till Cart Page",
        description:
          "Created a basic food ordering app from scratch using the fundamental knowledge of javaScript and React Core modules. Used Redux to store the app state and used RTK query to fetch data from API.",
        technologies: "React, Tailwind, Redux",
        github: "https://github.com/sayarsamanta/sayar_namaste_react",
        image: foodmenu,
      },

      {
        title: "Portfolio",
        description:
          "Developed a React based portfolio to showcase my skills. Uses tailwind to customize to app as well as to enable dark mode. Have an inbuilt PDF reader to read PDF files from local storage.",
        technologies: "React PDF, Tailwind, JavaScript, Context",
        github:
          "https://github.com/sayarsamanta/my-portfolio/tree/sayar-develop",
        image: portfolio,
      },
      {
        title: "Nayomi",
        description:
          "Developed a React Native based mobile application. Currently available to download from app and play store respectively.",
        technologies: "React Native, Firebase, Redux",
        link: "https://play.google.com/store/apps/details?id=com.nayomi.app&hl=en",
        image: nayomi,
      },
      {
        title: "The Body Shop",
        description:
          "Using redux to maintain state of the application and followed best practices for ui design using material theme highly scalable application which also supports payment integration.",
        technologies: "React Native, WebView, Redux",
        link: "https://play.google.com/store/apps/details?id=com.tbs.saudiwest&hl=en",
        image: bodyshop,
      },
      {
        title: "Lecturenotes an e learning app",
        description:
          "Involved in initial app life cycle method for a smooth transition of making an react native application from an existing android application from scratch which also has more than five million downloads. ",
        technologies: "React Native, Native Module, Redux",
        link: "https://play.google.com/store/apps/details?id=in.lecturenotes.lecturenotes&hl=en",
        image: lectureProject,
      },
    ],
  },

  // ============ EDUCATION ============
  education: [
    {
      school: "RCC Institute Of Information And Technology",
      degree: "Bachelor of Technology in Information Technology",
      duration: "2010 - 2014",
      image: "rcc.png",
    },
    {
      school: "Palle Technology",
      degree: "Training in Mobile App",
      duration: "2016 - 2017",
      image: "palle.png",
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "Senior Frontend Developer",
      company: "Astria Digital Private Limited.",
      duration: "April 2024 - Jan 2025 (10 Months)",
      image: "astria.png",
      descriptions: [
        "Coordinated efforts to develop and launch multiple cutting-edge UI updates,significantly increasing user satisfaction.",
        "Led the effort to upgrade outdated apps to a more contemporary React-based framework, which improved application speed and reduced load times by 30%",
        "Carried out comprehensive code reviews, greatly improving the development team's code quality and consistency while encouraging a culture of excellence.",
      ],
    },
    {
      position: "System Analyst",
      company:
        "Iksula Private Limited & Kamal Osman Jamjoom Tech Services Private Limited",
      duration: "Nov 2019 - Dec 2019 (2 Years 2 Months)",
      image: "kamal.png",
      descriptions: [
        "Enhanced user interface and implemented dynamic features in a customer-focused application improving functionality.",
        "Captured user feedback to implement system change requirements.Facilitated agile practices, encouraging team adoption of React Native best practices.",
        "Improved company's primary mobile application user engagement by 30% after adding scalable, fast, and responsive components.",
      ],
    },
    {
      position: "Software Engineer",
      company: "Knowlarity Cloud Communication Private Limited",
      duration: "April 2021 - Feb 2022 (11 Months)",
      image: "knowlarity.png",
      descriptions: [
        "Developed and deployed responsive websites and mobile applications following a mobile-first strategy",
        "Worked with stakeholders to include improvements and new features for overall product success.",
        "Conducted code testing and debugging to ensure the functionality of software programs.",
      ],
    },
    {
      position: "Senior Software Engineer",
      company: "Lecturenotes Technology Private Limited",
      duration: "July 2019 - April 2021 (1 Year 10 Months)",
      image: "lecturenotes.png",
      descriptions: [
        "Analysed user feedback to make informed decisions on software enhancements, leading to a 25% increase in customer satisfaction.",
        "Implemented security protocols and encryption techniques, safeguarding sensitive data and complying with industry regulations.",
        "Managed a team of developers, improving the organization's performance through innovative solutions.",
      ],
    },
    {
      position: "Android Developer",
      company: "Ladybird Web Solution Private Limited",
      duration: "April 2017 - May 2019 (2 Year 2 Months)",
      image: "ladybird.png",
      descriptions: [
        "Developed user-centric Android applications that exceeded customer expectations",
        "Implemented industry standards to produce reliable, user-friendly apps. Mentored and trained young engineers and developers.",
        "Managed application updates on Google Play Store, including version control and release notes documentation.",
      ],
    },
  ],

  // ============ SKILLS ============
  skills: {
    title: "Professional Skillset",
  },

  tools: {
    title: "Tools Used",
  },

  // ============ CERTIFICATES ============
  certificates: [
    {
      title: "Namaste React",
      description: "Provided by NamasteDev",
    },
    {
      title: "Android Foundation",
      description: "Provided by Palle Technology",
      //   link: "https://www.credly.com/badges/fa00026a-4db5-4269-ab4f-340f5382ac03",
    },
    {
      title: "The Modern JavaScript",
      description: "Provided by Udemy",
      //   link: "https://www.credly.com/badges/fa00026a-4db5-4269-ab4f-340f5382ac03",
    },
  ],

  // ============ CONTACT ============
  contact: {
    title: "Let's Get in Touch: Ways to Connect with Me",
    description:
      "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at sayarsamanta@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
  },

  // ============ FOOTER ============
  footer: "© 2024 Sayar Samanta. All Rights Reserved",
};

export default info;
