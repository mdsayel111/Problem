import About from "../Components/HomePage/About/About";
import Banner from "../Components/HomePage//Banner/Banner";
import Skill from "../Components/HomePage//Skill/Skill";
import Resume from "../Components/HomePage/Resume/Resume";
import ContactMe from "../Components/HomePage/ContactMe/ContactMe";
import Projects from "../Components/HomePage/Projects/Projects";
import Particles from "react-tsparticles";
import particleConfig from "../Config/particle.config";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skill />
      <Projects />
      <Resume />
      <ContactMe />
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: false,
              opacity: 0.03,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default Home;
