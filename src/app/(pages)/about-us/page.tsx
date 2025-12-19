import AboutUs from "@/components/pages/aboutpage/AboutUs";
import VissionMission from "@/components/pages/aboutpage/VissionMission";
import WhyChoose from "@/components/pages/aboutpage/WhyChoose";
// import Faq from "@/components/pages/homepage/Faq";
// import Testimonials from "@/components/pages/homepage/Testimonials";
import React from "react";

const page = () => {
  return (
    <main>
      <AboutUs />
      <WhyChoose />
      <VissionMission />
      {/* <Testimonials /> */}
      {/* <Faq /> */}
    </main>
  );
};

export default page;
