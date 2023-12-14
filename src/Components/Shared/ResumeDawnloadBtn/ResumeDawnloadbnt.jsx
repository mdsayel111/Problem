// import url from "/File/Sayel_Sayed_Web_Developer_Resume.pdf"

const ResumeDawnloadbnt = () => {
  const dawnload = () => {
    // Create a temporary link element
    const link = document.getElementById("dawnload-resume");

    // Set the download attribute with the desired file name
    link.download = "sayel_sayed_web_developer_.pdf";
  };
  return (
    <a id="dawnload-resume" href="https://drive.google.com/uc?export=download&id=1eFWMpSmT239CrwnAS4tHHHyxn_e1yI7-">
      <button
        className="btn btn-them font-bold"
        onClick={() => dawnload("/File/Sayel_Sayed_Web_Developer_Resume.pdf")}
      >
        Dawnload My Resume
      </button>
    </a>
  );
};

export default ResumeDawnloadbnt;
