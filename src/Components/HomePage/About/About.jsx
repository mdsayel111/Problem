import ExpAndEdu from "../../Shared/ExpAndEdu/ExpAndEdu";
import Heading from "../../Shared/Heading/Heading";
import ParentDiv from "../../Shared/ParentDiv/ParentDiv";

const About = () => {
  return (
    <div className="my-16" id="about">
      <Heading>self-summary</Heading>
      <div>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <ParentDiv style={{ width: "30%", aspectRatio: "1/1" }}>
            <div data-aos="fade-right" className="w-full mr-8 mb-4 img-box-about">
              <img
                className="object-cover w-full aspect-square object-top"
                src="/Image/278016950_283242957312486_4122336075588342872_n.jpg"
              ></img>
            </div>
          </ParentDiv>
          <div data-aos="fade-left" className="flex flex-col w-full lg:w-[70%]">
            <div className="flex items-center w-full h-fit mb-8 justify-center">
              <img
                src="/image/star-2.png"
                alt=""
                className="w-[13%]  lg:w-auto h-fit"
              />
              <img
                src="/image/star-2.png"
                alt=""
                className="w-[13%]  lg:w-auto h-fit"
              />
            </div>
            <div className="flex-grow">
              <ParentDiv style={{ height: "100%" }}>
                <h1 className="flex-grow flex flex-col text-3xl mb-4 font-bold txt-theme">
                  Sayel Sayed
                </h1>
                <div className="space-y-4">
                  <p>
                    Hi there! I'm Sayel Sayed a MERN stack web developer. I
                    recently completed a web development course from Programing
                    Hero. Which has given me the latest skills and knowledge in
                    the web development industry. Now I'm looking for a
                    opportunity in It companies in bangladesh in the field of
                    web development.
                  </p>
                  <p>
                    My focus on is on designing and developing websites that
                    look great and work well. I'm skilled in a range of
                    programing language and platforms, including HTML, CSS,
                    JavaScript, React, Node.js, MongoDB. I have worked on
                    different websites such as e-commerce, online marketplace
                    etc.
                  </p>
                </div>
              </ParentDiv>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <div className="flex gap-8 flex-col lg:flex-row">
          <div data-aos="fade-right" className="lg:w-1/2 flex justify-center items-center">
            <div className="w-full h-full">
              <ParentDiv
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ExpAndEdu
                  ht1={"experience"}
                  st1={"Freshers"}
                  ht2={"web desighn and devloper"}
                  st2={"M.E.R.N Stack"}
                />
              </ParentDiv>
            </div>
          </div>
          <div data-aos="fade-left" className="lg:w-1/2 space-y-4">
            <div>
              <ParentDiv>
                <ExpAndEdu
                  ht1={"education"}
                  st1={"runing"}
                  ht2={"Diploma In Engineering"}
                  st2={"Computer Science And Technology"}
                />
                <div className="my-2"></div>
                <ExpAndEdu
                  st1={"2018"}
                  ht2={"S.S.C"}
                  st2={"Science"}
                />
              </ParentDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
