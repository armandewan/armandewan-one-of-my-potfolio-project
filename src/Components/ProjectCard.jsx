
const ProjectCard = ({ project }) => {
  // console.log(project)
  return (
    <div className="card bg-blue-300 shadow-4xl p-4 items-center">
      <img src={project.image} alt={project.name} className="rounded-lg mb-4" />
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="text-sm mb-2">{project.description}</p>
      <a target="_blank" className="btn bg-blue-950 w-44 text-ml text-amber-50" href={project.liveLink}> 
        View Live
      </a>
    </div>
  );
};

export default ProjectCard;