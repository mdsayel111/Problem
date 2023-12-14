import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import TsParticales from "../Components/TsParticales/TsParticales";

const RootLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <TsParticales /> */}
    </div>
  );
};

export default RootLayOut;
