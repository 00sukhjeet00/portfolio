import React from "react";
import Lottie from "lottie-react";
import DevJson from "@/lib/utils/dev.json";
import PersonJson from "@/lib/utils/person.json";

export function Animation() {
  return (
    <>
      <LandingAnimation />
      <PersonWithLaptop />
    </>
  );
}

function LandingAnimation() {
  return (
    <div className="landing-animation">
      <Lottie animationData={DevJson} loop />
    </div>
  );
}

function PersonWithLaptop() {
  return (
    <div className="person-animation">
      <Lottie animationData={PersonJson} loop />
    </div>
  );
}
