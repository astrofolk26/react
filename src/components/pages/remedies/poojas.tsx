//container
import Container from "@/components/layouts/Container";
//image
import Image from "next/image";
//link
import Link from "next/link";
import React from "react";

const Poojas = () => {
  return (
    <section className="padding">
      <Container width>
        <h2 className="title text-center">
          <span className="">
Latest Ceremonies</span> In Vedic Poojas
        </h2>
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 justify-between   ">
          <div className="mb-10 sm:mb-0   text-center sm:text-left flex flex-col justify-center ">
            <Image
              src="/assets/images/Security/Rudrabhisek.jpg"
              alt="logo"
              width={300}
              height={300}
              className="mb-5 mx-auto sm:mx-0 h-[300px]"
            />
            <div>
              
              <h3 className="subTitle">Rudrabhishek Pooja & Yagna</h3>
              <p>- Rudrabhishek is a sacred Vedic ritual dedicated to Lord Shiva, performed by bathing the Shivling with holy offerings while chanting Sri Rudram and Chamakam mantras.....</p>
              <p className="text-[var(--primary)]"><Link href="/rudrabhishekpooja"> Read More...</Link></p>
            </div>
          </div>

          <div className="mb-10 sm:mb-0   text-center sm:text-left flex flex-col justify-center ">
            <Image
              src="/assets/images/Security/Hanuman.jpg"
              alt=">Back to Vadic"
              width={300}
              height={300}
              className="mb-5 mx-auto sm:mx-0 h-[300px]"
            />
            <div>
              
              <h3 className="subTitle">Celebrates Lord Hanuman’s Jayanti. </h3>
              <p>Hanuman Jayanti in 2026 will be celebrated on Thursday, April 2, coinciding with Chaitra Purnima. It marks the divine birth of Lord Hanuman, the epitome of strength, devotion, and courage.....</p>
           <p className="text-[var(--primary)]">Read More...</p>
            </div>
          </div>
          <div className="text-center sm:text-left flex flex-col justify-center ">
            <Image
              src="/assets/images/Security/ganga.jpg"
              alt="logo"
              width={300}
              height={300}
              className="mb-5 mx-auto sm:mx-0 h-[300px]"
            />
            <div>
              
              <h3 className="subTitle">Ganga Dussehra Kanakdhara Yagna</h3>
              <p>Ganga Dussehra (also called Gangavataran) is a major Vedic festival that celebrates the descent of the holy river Ganga from heaven to earth. It is observed on the tenth day (Dashami) of the waxing moon.... </p>
              <p className="text-[var(--primary)]">Read More...</p>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Poojas;
