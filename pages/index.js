import React from "react";
// import Dashboard from "./dashboard";
import dynamic from "next/dynamic";

const LandingPage = () => {
  const Dynamicheader = dynamic(() => import("./dashboard"),{
    ssr: false,
  })
  return ( <>
    <Dynamicheader/>
  </> );
}
 
export default LandingPage;