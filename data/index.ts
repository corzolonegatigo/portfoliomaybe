const url1 = "https://github.com/Felbadatcoding/Predicting-Ageing-Population-using-Ridge-Regression"



export const navItems = [
  { name: "About", link: "#about", id: 1 },
  { name: "Projects", link: "#projects", id:2 },
  { name: "Competitions", link: "#competitions", id:3 },
  { name: "Contacts", link: "#contactme", id:4 },
];

export const gridItems = [
  {
    id: 1,
    title: "Interning part time at A*STAR",
    description: "Currently",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end drop-shadow-md text-white",
    img: "/biiPortfolio.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "My Technical Skills",
    description: "Hungry to Improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Contact Me!",
    description: "Always open to new opportunites",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const featureprojects = [
  {
    id: 1,
    title: "Differentiating Between Medical Conditions with AI",
    des: "Being developed in conjunction with A*STAR and SGH along 3 other teammates, to mitigate risk of misdiagnosis of medical issues.",
    img: "/biiPortfolio.jpeg",
    iconLists: ["python.svg","jupyter.svg","scikit-learn-seeklogo.svg"],
    opt: "Private"
  },
  {
    id: 2,
    title: "Automatic Pill Dispensor",
    des: "Developed at a hackathon-styled event in a team, with the aim of ensuring adherence to medical prescriptions in the elderly population. ",
    img: "/sutdPortfolio.jpeg",
    iconLists: ["arduino.svg","cpp_logo.svg"],
    opt: "https://docs.google.com/presentation/d/1acXAifk1toHtccAKwYVcd6Mb7JgGSChJUJtDTnPKBfY/present?usp=sharing",
    link: "https://docs.google.com/presentation/d/1acXAifk1toHtccAKwYVcd6Mb7JgGSChJUJtDTnPKBfY/present?usp=sharing",

  },
  {
    id: 3,
    title: "Virtual Photo Booth using Computer Vision",
    des: "Virtual Photo Booth for SST's 15th anniversary, developed as a coursework project.",
    img: "/cv_coursework_portfolio.png",
    iconLists: ["/python.svg", "/opencv.svg"],
    link: "https://github.com/corzolonegatigo/Virtual-Photo-Booth",
    opt: "https://github.com/corzolonegatigo/Virtual-Photo-Booth"

  },
  {
    id: 4,
    title: "Predicting Singapore Population Growth with AI",
    des: "Using past recorded population data and the scikit-learn machine learning library to predict future population size.",
    img: "/popPredict.png",
    iconLists: ["python.svg", "jupyter.svg", "/scikit-learn-seeklogo.svg"],
    link: url1,
    opt: url1,
  },
];
export const projects = [
  {
    id: 1,
    title: "Differentiating Between Medical Conditions with AI",
    des: "Being developed in conjunction with A*STAR and SGH along 3 other teammates, to mitigate risk of misdiagnosis of medical issues.",
    img: "/biiPortfolio.jpeg",
    iconLists: ["python.svg","jupyter.svg","scikit-learn-seeklogo.svg"],
    opt: "Private",
  },
  {
    id: 2,
    title: "Automatic Pill Dispensor",
    des: "Developed at a hackathon-styled event in a team, with the aim of ensuring adherence to medical prescriptions in the elderly population. ",
    img: "/sutdPortfolio.jpeg",
    iconLists: ["arduino.svg","cpp_logo.svg"],
    opt: "https://docs.google.com/presentation/d/1acXAifk1toHtccAKwYVcd6Mb7JgGSChJUJtDTnPKBfY/present?usp=sharing",
    link: "https://docs.google.com/presentation/d/1acXAifk1toHtccAKwYVcd6Mb7JgGSChJUJtDTnPKBfY/present?usp=sharing",

  },
  {
    id: 3,
    title: "Virtual Photo Booth using Computer Vision",
    des: "Virtual Photo Booth for SST's 15th anniversary, developed as a coursework project.",
    img: "/cv_coursework_portfolio.png",
    iconLists: ["/python.svg", "/opencv.svg"],
    link: "https://github.com/corzolonegatigo/Virtual-Photo-Booth",
    opt: "https://github.com/corzolonegatigo/Virtual-Photo-Booth"

  },
  {
    id: 4,
    title: "Predicting Singapore Population Growth with AI",
    des: "Using past recorded population data and the scikit-learn machine learning library to predict future population size.",
    img: "/popPredict.png",
    iconLists: ["python.svg", "jupyter.svg", "/scikit-learn-seeklogo.svg"],
    link: url1,
    opt: url1,
  },
  {
    id: 5,
    title: "Textfighter in Python",
    des: "Turn-Based Singleplayer Text-Based game developed in python. Working on making it in C#.",
    img: "/pythontextfighter.png",
    iconLists: ["python.svg"],
    opt: "https://github.com/Felbadatcoding/Simple-Text-Fighter",
    link: "https://github.com/Felbadatcoding/Simple-Text-Fighter"
  },
  {
    id: 6,
    title: "Portfolio Website",
    des: "Made by following a tutorial as well as adding my personal touch to it, to customise it for my purposes. Hosted on Vercel and uses UI components from the Aceternity UI Library.",
    img: "/portfolioPic_portfolio.png",
    iconLists: ["/next.svg", "/tail.svg", "/re.svg"],
    link: "https://github.com/corzolonegatigo/portfoliomaybe",
    opt: "https://github.com/corzolonegatigo/portfoliomaybe",
  },
];

export const testimonials = [
  {
    quote: "/pctc r2.jpg",
    name: "Perse Coding 2024 Round 2",
    title: "Won Merit.",
  },
  {
    quote:
      "/pctc r1 2024.png",
    name: "Perse Coding 2024 Round 1",
    title: "Won Distinction.",
  },
  {
    quote: "/sutdPortfolio.jpeg",
    name: "SUTD Big - D Camp",
    title: "Hackathon-styled camp where my team built a tech-based solution to solve real-world problems. Won Team-Spirit award for strong collaboration and commuincation throughout the camp.",
  },
  {
    quote: "/pctc 2023 r2.pdf.png",
    name: "Perse Coding 2023 Round 2",
    title: "",
  },
  {
    quote: "/perse r1 2023.png",
    name: "Perse Coding 2023 Round 1",
    title: "Won Distinction.",
  },
  {
    quote: "/smu-sst camp.jpeg",
    name: "SMU Technopreneurship Camp",
    title: "2-Day Hackathon-styled camp where my team designed a solution for young technopreneurs lacking ways to platform themselves",
  },
  {
    quote: "/sieberrsecCert.png",
    name: "Sieberrsec CTF",
    title: "Achieved 12th place in this National DSTA-Sponsored cybersecurity competition organised by Hwa Chong Institute",
  },
  {
    quote: "/aiocertPortfolio.png",
    name: "Australian Informatics Olympiad",
    title: "",
  },


];



