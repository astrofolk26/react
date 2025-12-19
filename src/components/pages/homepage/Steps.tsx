//container
import Container from "@/components/layouts/Container";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <section className="padding">
      <Container width>
        <h2 className="title text-center">
          <span className="">
Latest Articles</span> In Blog
        </h2>
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 justify-between   ">
          <div className="mb-10 sm:mb-0   text-center sm:text-left flex flex-col justify-center ">
            <Image
              src="/assets/images/Security/marriage.jpg"
              alt="logo"
              width={300}
              height={300}
              className="mb-5 mx-auto sm:mx-0 h-[300px]"
            />
            <div>
              
              <h3 className="subTitle">Delay or Denial in Marriage</h3>
              <p>Are you facing delay in your marriage? Certain planetary placements, aspects, and house lords are traditionally associated with marital prospects....</p>
              <p className="text-[var(--primary)]"><Link href="/delay-in-marriage"> Read More... </Link></p>
            </div>
          </div>

          <div className="mb-10 sm:mb-0   text-center sm:text-left flex flex-col justify-center ">
            <Image
              src="/assets/images/Security/backtoVedic.jpg"
              alt=">Back to Vadic"
              width={300}
              height={300}
              className="mb-5 mx-auto sm:mx-0 h-[300px]"
            />
            <div>
              
              <h3 className="subTitle">Back to Vedic </h3>
              <p>"Back to Vedic" can imply a return to or a focus on the principles, practices, and products rooted in the ancient Vedic traditions of India .....</p>
           <p className="text-[var(--primary)]"><Link href="/back-to-vedic"> Read More...</Link></p>
            </div>
          </div>
          <div className="text-center sm:text-left flex flex-col justify-center ">
            <Image
              src="/assets/images/Security/newastro.jpg"
              alt="logo"
              width={300}
              height={300}
              className="mb-5 mx-auto sm:mx-0 h-[300px]"
            />
            <div>
              
              <h3 className="subTitle">Astrological Awakening</h3>
              <p>New Beginnings Astrological Awakening a wonderful phrase that encapsulates the experience of a transformative period in one's life, often triggered... </p>
              <p className="text-[var(--primary)]"><Link href="/astrological-awakening">Read More...</Link></p>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Steps;
