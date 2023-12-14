import { useQuery } from "react-query";
import ProjectCard from "../Project/ProjectCard";
import UseAxisosPublic from "../../../Hooks/UseAxisosPublic";
import useLoading from "../../../Hooks/useLoading";
import Heading from "../../Shared/Heading/Heading";

const Projects = () => {
  const Loading = useLoading();
  const axiosPublic = UseAxisosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => axiosPublic("/projects"),
  });

  return (
    <div id="projects">
    <Heading>Projects</Heading>
      <div>
        {isLoading ? (
          Loading
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 my-8">
            {data?.data?.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
