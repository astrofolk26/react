
import Container from "@/components/layouts/Container";
import Image from "next/image";
import React from "react";


const WhyChoose = () => {
  return (
    <section className=" border-b border-[var(--gray)] ">
      <Container width>
        <section>
          <div>
            <Image
              src="/assets/images/security/astrofolk.jpg"
              alt="logo"
              width={1500}
              height={400}
              className=""
            />
          </div>
        </section>


        <section className="grid grid-cold-1 sm:grid-cols-2 gap-5 items-center padding">
          <div>
            <Image
              src="/assets/images/security/chooseus.jpg"
              alt="logo"
              width={600}
              height={700}
              className=""
            />
          </div>
          <section className="px-5 sm:px-0">
            <h2 className="title ">
              <span>Why</span> Choose Us
            </h2>
            <p className=" text-justify py-7">
              
 <b> 
              - Birth Chart Services:</b> Personalized charts with remedies for planets, nakshatras, and doshas.
             <br/>  <b> - Remedy Catalogs: </b>Organized templates for Kavach, Yagna, Pooja, Mantra, Meditation, Yoga, Mudra, Tantra, and Aghor remedies.
            <br/>  <b>  - Dynamic Modules: </b>Vastu guidance, zodiac insights, pooja booking, and spiritual education.
            {/* <br/>  <b>  - Backend Reliability:</b> Rate limiting, payment integration, notification automation, and error-handling scripts.
            <br/>  <b>  - Frontend Usability: </b>Intuitive React-based navigation for easy access to remedies and services.
              */}
             <br/> <br/>   <br/> 
            </p>
          </section>
        </section>
      </Container>
    </section >

  );
};

export default WhyChoose;
