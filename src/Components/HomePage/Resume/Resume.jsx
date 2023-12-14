import Heading from "../../Shared/Heading/Heading";
import ParentDiv from "../../Shared/ParentDiv/ParentDiv";
import ResumeDawnloadbnt from "../../Shared/ResumeDawnloadBtn/ResumeDawnloadbnt";
import "./resume.css";

const Resume = () => {
  return (
    <div className="mt-10" id="resume">
      <div className="mb-4">
        <Heading>Resume</Heading>
      </div>
      <div data-aos="zoom-in">
        <ParentDiv>
          <div className="bg-theme rounded-2xl p-4">
            <div className="card image-full w-fit mx-auto">
              <figure>
                <img
                  src="/Image/resume.png"
                  alt="Shoes"
                  className="min-w-[250px] aspect-square object-top"
                />
              </figure>
              <div className="card-body hidden justify-center">
                <div className="card-actions justify-center flex-col items-center">
                  <ResumeDawnloadbnt />
                </div>
              </div>
            </div>
          </div>
        </ParentDiv>
      </div>
    </div>
  );
};

export default Resume;
