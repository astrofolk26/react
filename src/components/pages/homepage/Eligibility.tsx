import Container from "@/components/layouts/Container";
import Image from "next/image";
import React from "react";

const Eligibility = () => {
  return (
  
    <section className="relative">
      <section className=" overflow-hidden mt-10" >
       
        {/* Background Image */}
        <Image
          src="/assets/images/Security/banner-bg1.jpg"
          alt=""
          width={1800}
          height={400}
          className="object-cover w-full h-[280px] "
        />
      </section>

      {/* Overlay Content */}
      <section className="absolute inset-0 bg-black/50 flex flex-col justify-center text-[var(--background)] ">
        <Container width>
          <section className="sm:flex justify-between items-center  mt-3  sm:mt-20">
            <h2 className="title mb-5 sm:mb-0">
            
            </h2>
            <ul className="list-disc list-inside space-y-2">
            
               <b> "Indian Astrology" (also known as Vedic Astrology or Jyotish) and "Western Astrology" are both ancient and complex systems that interpret celestial phenomena to gain insights into human affairs and events. While they share the fundamental premise of a connection between the cosmos and life on Earth, they diverge significantly in their astronomical basis, calculation methods, philosophical underpinnings, and interpretive techniques.
          
              </b>
            </ul>

          </section>
        </Container>
      </section>
    </section>
  );
};

export default Eligibility;
