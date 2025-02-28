import ProjectCard from "./ProjectCard";

const mernProjects = [
  {
    id: 1,
    name: "Assest Solution",
    image : "/image/assest-solution-001.png",
    stack: ["React", "Node.js", "MongoDB"],
    description: "There are multiple matches for Asset Solution, including a real estate consulting firm, a bankruptcy annulment service, and an app for condominium management. ",
    liveLink: "https://ass-12-asset-management.web.app",
    github: " https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-armandewan",
  },
  {
    id: 2,
    name: "Safe Hands",
    image:'/image/safe-hands-002.png',
    stack: ["React", "Tailwind CSS"],
    description: "A volunteer is someone who gives their time and labor to help a cause, organization, or community without being paid.",
    liveLink:"https://volunteer-client.onrender.com/",
    github:"https://github.com/programming-hero-web-course2/b10a11-client-side-armandewan",
  },
  {
    id: 3,
    name: "Exciting Games",
    image:'/image/game-review-001.png',
    stack: ["React", "Tailwind CSS"],
    description: "Find your next captivating gaming moment and review",
    liveLink:"https://game-review-3a8i.onrender.com/",
    github:"https://github.com/programming-hero-web-course2/b10-a10-client-side-armandewan",
  },
];
const uiProjects = [
  {
    id: 1,
    name: "Rinterio",
    image:'/image/rinterio-001.png',
    stack: ["css3,html"],
    description: "A barn house of this design has a striking appearance",
    liveLink:"https://armandewan.github.io/daisyui-with-assingment-03/",
    github:"https://github.com/armandewan/daisyui-with-assingment-03",
  },
  {
    id: 2,
    name: "Fitness",
    image : "/image/fitness.png",
    stack: ["css3,html"],
    description: "We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.",
    liveLink: "https://armandewan.github.io/responsive-assigment2/",
    github: "https://github.com/armandewan/responsive-assigment2",
  },
  
  {
    id: 3,
    name: "Adop Peddy",
    image:'/image/adoptPat.png',
    stack: ["React", "Tailwind CSS","DaisyUi"],
    description: "Adopt Your Best Friend like as a pet animals.",
    liveLink:"https://pet-adopt-assignment6.surge.sh/",
    github:" https://github.com/programming-hero-web-course2/b10a6-pet-adoption-armandewan",
  },
  {
    id: 4,
    name: "Choose Top Players",
    image:'/image/top-player-select-001.png',
    stack: ["React", "Tailwind CSS","DaisyUi"],
    description: "Choose your top most valueable player in your team.",
    liveLink:" http://top-players.surge.sh/",
    github:"https://github.com/programming-hero-web-course1/b10a7-dream-11-armandewan",
  },
  {
    id: 5,
    name: "Collect Coupons",
    image:'/image/coupon-collect-001.png',
    stack: ["React", "Tailwind CSS","DaisyUi"],
    description: "Coupons seemed to be used regardless of income level.",
    liveLink:"https://coupon-collection-ass9.firebaseapp.com/",
    github:"https://github.com/programming-hero-web-course1/b10-a9-authentication-armandewan",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 border-1 m-1 rounded">
      <h2 className="text-4xl font-bold mb-4 underline text-center text-blue-950">Projects</h2>
      <h1 className="bg-amber-300 py-2 rounded-4xl text-2xl font-bold m-2 text-center text-blue-950">HTML + CSS Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-6">
        {uiProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h1 className="bg-amber-300 py-2 rounded-4xl text-2xl font-bold m-2 text-center text-blue-950">Mern Stack Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-6">
        {mernProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;