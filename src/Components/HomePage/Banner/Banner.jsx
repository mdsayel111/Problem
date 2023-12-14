import ResumeDawnloadbnt from "../../Shared/ResumeDawnloadBtn/ResumeDawnloadbnt";

const Banner = () => {
  return (
    <div
      id="home"
      className="flex p-6 bg-theme rounded-2xl mt-10 flex-col-reverse lg:flex-row lg:justify-evenly justify-center"
    >
      <div data-aos="fade-right" className="lg:w-fit items-center flex justify-center space-y-4  lg:space-y-10 flex-col">
        <h2 className="lg:text-5xl text-2xl font-bold txt-theme">Hello! I’m</h2>
        <h1 className="lg:text-8xl text-4xl font-bold txt-theme">
          Sayel Sayed
        </h1>
        <p className="lg:text-2xl text-lg">I develop website</p>
        <ResumeDawnloadbnt />
      </div>
      <div data-aos="fade-left">
        <div className="w-fit mx-auto img-box mb-8">
          <img
            className="object-cover"
            src="/Image/sayel-removebg-preview.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
