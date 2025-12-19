import React from "react";
import Container from "../../layouts/Container";

const AboutUs = () => {
  return (
    <section className="padding">
      <Container width>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 items-center">
            <h1 className="title layoutPadding">
              <span>About</span> Astro folk
            </h1>
            <div>
              <p className="py-2 text-justify">
                Astrofolk is the visionary platform,  — a digital ecosystem designed to modernize and democratize Vedic astrology by making remedies, rituals, and wisdom accessible to people across all countries. It’s not just a website; it’s a structured knowledge hub that blends ancient traditions with modern technology.

              </p>
              <p className="py-2 text-justify"> 
                At Zodiac Predictions, we specialize in delivering comprehensive astrological solutions through our meticulously designed full-stack application. Our platform is built to provide users with accurate and personalized astrological insights, supported by a robust backend and an intuitive frontend interface.
            
              </p>
              <p className="text-justify"></p>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutUs;
//  you&apos;re