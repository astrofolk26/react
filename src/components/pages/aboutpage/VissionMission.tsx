import Container from "@/components/layouts/Container";
import Image from "next/image";
import React from 'react'

const VissionMission = () => {
  return (
    <section className="padding">
      <Container width maxWidth>
        <h2 className="title text-center mb-10">
          <span>Our </span> Vision & Mission
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <section className="relative">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <Image
                src="/assets/images/aboutus/new-4.png"
                alt="Banner"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full  bg-[var(--blue)]/55 " />
            </div>

            <section className=" px-0 sm:px-10 py-3 sm:py-30">
              <div className="">
                <h2 className="title mb-4 text-center ">
                  Vision
                </h2>
                <p className="text-center text-[var(--background)] ">
                  Astroflok aims to be the world’s leading digital platform for Vedic astrology remedies, rituals, and wisdom, empowering individuals globally to access personalized spiritual solutions that enhance their lives and well-being.



                </p>
              </div>
            </section>
          </section>
          <section className="relative">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <Image
                src="/assets/images/aboutus/new-5.png"
                alt="Banner"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full  bg-[var(--blue)]/55" />
            </div>

            <section className=" px-0 sm:px-10 py-3 sm:py-30">
              <div className="">
                <h2 className="title mb-4 text-center">
                  Mission
                </h2>
                <p className="text-center text-[var(--background)] ">
                 To bridge ancient Vedic wisdom with modern technology, creating accessible, structured, and meaningful tools for astrology, vastu, and spiritual education. We empower individuals worldwide to understand their cosmic blueprint, harmonize their environments, and participate in collective rituals that unite tradition with innovation.

                </p>
              </div>
            </section>
          </section>
        </section>
      </Container>

    </section>
  )
}

export default VissionMission

// import React from "react";

// const VissionMission = () => {
//   return (
//     <section className="padding">
//       <Container width maxWidth>
//         <div>
//           <h2 className="title text-center mb-10">
//             <span>Our </span> Vision & Mission
//           </h2>
//         </div>
//         <div>
//           <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             <Image
//               src="https://placehold.jp/500x400.png"
//               alt="logo"
//               width={500}
//               height={400}
//               className=""
//             />

//             <div>
//               <Image
//                 src="https://placehold.jp/500x400.png"
//                 alt="logo"
//                 width={500}
//                 height={400}
//                 className=""
//               />
//             </div>
//           </section>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default VissionMission;
