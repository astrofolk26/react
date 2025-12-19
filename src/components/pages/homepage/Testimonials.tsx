"use client";

import React from "react";
// Import Swiper React components
import {
  Autoplay,
  FreeMode,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
//icon

//image
import Image from "next/image";
//container
import Container from "@/components/layouts/Container";
//json
import testimonials from "@/components/assets/data/Testimonials.json"; // adjust path as needed
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Testimonials = () => {
  return (
    <section className="padding">
      <Container width>
        <section className="">
          <h2 className="title text-center">
            <span className="span">WHAT</span> OUR CUSTOMERS SAY
          </h2>
        </section>
        <section className="  relative py-10 ">
          <section className=" w-[93%] mx-auto  ">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={10}
              pagination={{ clickable: true }}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              loop={true}
              navigation={{
                nextEl: ".button-next-slide-testimonial",
                prevEl: ".button-prev-slide-testimonial",
              }}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                },
                650: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: 3,
                },
              }}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              modules={[FreeMode, Autoplay, EffectCoverflow, Navigation]}
              className="mySwiper "
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <section className="flex flex-col items-center py-10 px-5 rounded-2xl border border-[var(--primary)] text-white bg-[var(--background)] h-[450px] sm:w-[400px] shadow-2xl">
                    <Image
                      src="/assets/images/homepage/testimonal.png"
                      alt="logo"
                      width={200}
                      height={100}
                      className="mb-5 h-[100px] w-[100px]"
                    />
                    <p className="text-center mb-5 text-white">
                      {item.message}
                    </p>
                    <h3 className="subTitle text-[var(--background)]">
                      {item.name}
                    </h3>
                  </section>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <div className="flex justify-between items-center absolute bottom-[50%]  w-full z-10">
            <div className="button-prev-slide-testimonial  text-[40px] font-medium text-[var(--white)]">
              <SlArrowLeft />
            </div>
            <div className="button-next-slide-testimonial text-[40px] font-medium text-[var(--white)]">
              <SlArrowRight />
            </div>
          </div>
        </section>
      </Container>
    </section>

    // <section className="  sm:padding">
    //   <Container width>
    //     <section className="">
    //       <h2 className="title text-center">
    //         <span>WHAT</span> OUR CUSTOMERS SAY
    //       </h2>
    //       <section className="sm:py-10 sm:flex justify-between gap-5 sm:h-[490px]">
    //         {[
    //           {
    //             text: "As a single mom, I often feel financially stretched. Sabka Loan gave me a sense of independence and control.",
    //             name: "Anjali Mehta",
    //             location: "Pune"
    //           },
    //           {
    //             image: true,
    //             text: "My CIBIL score wasn’t great, and most banks rejected me. But Sabka Loan gave me a chance — no judgment, just support. Truly thankful.",
    //             name: "Ravi Sharma",
    //             location: "Jaipur"
    //           },
    //           {
    //             text: "This was my second time using Sabka Loan, and again, they didn’t disappoint. Fast, fair, and completely digital. I’ll keep coming back.",
    //             name: "Deepak Nair",
    //             location: "Pune"
    //           }
    //         ].map((item, i) => (
    //           <div
    //             key={i}
    //             className="group border-2 border-[var(--primary)] py-6 px-5 rounded-4xl flex flex-col justify-center items-center mt-10 mb-9 sm:mb-0 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-[var(--primary)] hover:shadow-lg"
    //           >
    //             {item.image && (
    //               <Image
    //                 src="/assets/images/homepage/testimonal.png"
    //                 alt="logo"
    //                 width={200}
    //                 height={100}
    //                 className="mb-5 h-[150px] w-[150px]"
    //               />
    //             )}

    //             <p className="mb-5 text-center text-[var(--white)] group-hover:text-[var(--white)]">
    //               {item.text}
    //             </p>
    //             <h3 className="subTitle text-[var(--primary)] group-hover:text-[var(--white)]">
    //               — {item.name},{" "}
    //               <span className="text-[var(--white)]">{item.location}</span>
    //             </h3>
    //           </div>
    //         ))}
    //       </section>

    //     </section>
    //   </Container>
    // </section>
  );
};

export default Testimonials;
