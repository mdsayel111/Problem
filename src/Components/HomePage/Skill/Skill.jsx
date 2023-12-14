import Heading from "../../Shared/Heading/Heading";

const Skill = () => {
  return (
    <div id="skill">
      <Heading>Skill</Heading>
      <div data-aos="zoom-in" className="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2 mt-6 rounded-2xl py-8 bg-theme items-center">
        <div className="w-fit mx-auto">
          <h3 className="font-bold">HTML</h3>
          <progress className="progress w-56" value="90" max="100"></progress>
        </div>
        <div className="w-fit mx-auto">
          <h3 className="font-bold">CSS</h3>
          <progress className="progress w-56" value="85" max="100"></progress>
        </div>
        <div className="w-fit mx-auto">
          <h3 className="font-bold">JavaScript</h3>
          <progress className="progress w-56" value="80" max="100"></progress>
        </div>
        <div className="w-fit mx-auto">
          <h3 className="font-bold">React</h3>
          <progress className="progress w-56" value="70" max="100"></progress>
        </div>
        <div className="w-fit mx-auto">
          <h3 className="font-bold">Node.js</h3>
          <progress className="progress w-56" value="60" max="100"></progress>
        </div>
        <div className="w-fit mx-auto">
          <h3 className="font-bold">MongoDB</h3>
          <progress className="progress w-56" value="50" max="100"></progress>
        </div>
        <div className="w-fit mx-auto">
          <h3 className="font-bold">Express.js</h3>
          <progress className="progress w-56" value="50" max="100"></progress>
        </div>
      </div>
    </div>
  );
};

export default Skill;
