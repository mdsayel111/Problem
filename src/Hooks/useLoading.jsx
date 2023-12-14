import Lottie from "lottie-react";
import loading from "../assets/Animation/Animation.json";

const useLoading = () => {
  return (
    <Lottie className="w-[50vh] mx-auto" animationData={loading} loop={true} />
  );
};

export default useLoading;
