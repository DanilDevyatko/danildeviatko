import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    pinedev,
    hbf,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Digital Suits",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2020 - Apr 2021",
      points: [
        "Developing and maintaining stores based on Shopify",
        "Collaborating with cross-functional teams including designers, product managers, and customers.",
        "Implementing accessabilities.",
        "Teaching to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "PineDev",
      icon: pinedev,
      iconBg: "#383E56",
      date: "May 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "HBF",
      icon: hbf,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Feb 2023",
      points: [
        "Markup development for Drupal (mobile-first) with different designs.",
        "Bug-fixing styles, and restyling to new designs and improving sites by installing plugins.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Balto",
      description:
        "I'm grateful to this project for working with an amazing team with a cool PM. Markup, Liquid development from scratch. Used Figma design. Installation application: reviews, custom fields, etc. Also used JS plugins: Slick slider, Lottie animation. Native JS functionality for validation forms, redirections, and interactive elements like popups.",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://balto.fr",
    },
    {
      name: "Trafficox",
      description:
      "Had an excellent opportunity to work as a mentor with a nice person. Our team did a lot of small projects one of these was TrafficOX. Dmitry studied as fast as it is possible and get everything. My tasks were: code review, help with markup, and JS also I had the role of Project manager.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "HTML5",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.trafficox.com",
    },
    {
      name: "DanilDeviatko",
      description:
        "My React based portfolio. I started learn React.js and also used Vite, Tailwindcss, Three.js, Emailjs. The most interesting project for a last time for me. I like when I need to learn and do some project at the same time.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };