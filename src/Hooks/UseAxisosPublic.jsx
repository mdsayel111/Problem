import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://my-portfolio-server-cyan.vercel.app/",
});

const UseAxisosPublic = () => {
  return axiosPublic;
};

export default UseAxisosPublic;
