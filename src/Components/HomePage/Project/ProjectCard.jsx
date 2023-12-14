import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { imgLink, liveLink, gitLink, projectName, description } = project;
  console.log(imgLink);
  return (
    <div data-aos="zoom-in" className="bg-theme project-card cursor-pointer rounded-2xl p-4">
      <div className="card image-full">
        <figure>
          <img
            src={imgLink}
            alt="Shoes"
            className="min-w-[250px] aspect-square"
          />
        </figure>
        <div className="card-body hidden justify-center">
          <div className="card-actions justify-center flex-col items-center">
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="btn  bg-theme txt-theme"
            >
              Live Link
            </a>
            <a
              href={gitLink}
              rel="noreferrer"
              className="btn  bg-theme txt-theme"
            >
              Git Link
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl mt-4 p-3 font-semibold text-center">
          {projectName}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
