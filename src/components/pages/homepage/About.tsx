import Container from "@/components/layouts/Container";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const About = () => {
    return (
        <section className="padding  text-white">
             <Container width>
        <section className="sm:grid justify-between" style={{  marginBottom: '5%' }}>
          <section className=" ">
            {/* <h1 className="title text-3xl sm:text-[40px]">
                          <span className="text-[var(--white)]">New Year 2026 - </span> New Beginings Astrological Awakening
                         
            </h1> */}
            {/* <p className="mb-5">
             Step into the year with your unique astrology guide — a celestial journey crafted for your soul.
            </p> */}
            <div className=" flex sm:flex gap-5">
                          <Link href="/live-astro-counselling">
                              <input
                                  
                                  className="font-bold btnLink w-full flex justify-center disabled:bg-[var(--gray)] mb-5 sm:m-0 popup-animation"
                                  type="submit"
                                  value="Astrology Consultation"
                                  width={340}
                                  height={70}
                              />
              
              </Link>
                          <Link href="/vastu">  <input

                              className="font-bold btnLink w-full flex justify-center disabled:bg-[var(--white)] mb-5 sm:m-0 popup-animation"
                              type="submit"
                              value="Vastu Consultation"
                              width={340}
                              height={70}
                          />         </Link>

                          <Link href="/yearly-prediction">  <input

                              className="font-bold btnLink w-full flex justify-center disabled:bg-[var(--gray)] mb-5 sm:m-0"
                              type="submit"
                              value="Personalized Yearly Report"
                              width={340}
                              height={70}
                          />         </Link>

                           <Link href="/birth-time-rectification">  <input

                              className="font-bold btnLink w-full flex justify-center disabled:bg-[var(--gray)] mb-5 sm:m-0 popup-animation"
                              type="submit"
                              value="Birth -Time Rectification"
                              width={340}
                              height={70}
                          />         </Link>
                           <Link href="/mantra-remedies">  <input

                              className="font-bold btnLink w-full flex justify-center disabled:bg-[var(--gray)] mb-5 sm:m-0 popup-animation"
                              type="submit"
                              value="Mantra Remedies"
                              width={340}
                              height={70}
                          />         </Link>
                           {/* <Link href="#">  <input

                              className="font-bold btnLink w-full flex justify-center disabled:bg-[var(--gray)] mb-5 sm:m-0"
                              type="submit"
                              value="Kundali"
                              width={340}
                              height={70}
                          />         </Link>
                           <Link href="#">  <input

                              className="font-bold btnLink w-full flex justify-center disabled:bg-[var(--gray)] mb-5 sm:m-0"
                              type="submit"
                              value="Kundali"
                              width={340}
                              height={70}
                          />         </Link>
                           <Link href="#">  <input

                              className="font-bold btnLink w-full flex justify-center disabled:bg-[var(--gray)] mb-5 sm:m-0"
                              type="submit"
                              value="Kundali"
                              width={340}
                              height={70}
                          />         </Link> */}
            </div>
          </section>

         
        </section>
      </Container>
             <Container width>
               <section className="flex flex-col items-center justify-center">
                 <h2 className="title text-center text-black text-2xl sm:text-4xl font-bold style={{ padding: '-1px' }}>">
                           ZODIAC {" "}
                        <span className="text-[var(--primary)]">PREDICTIONS</span>
                    </h2>
 <section className="flex flex-wrap justify-center ">
             
             <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
                <Link href="/yearly-aries"> 
   
              <Image
                                   src="/assets/images/security/Aries.jpg"
                                   alt="aries"
                                   width={160}
                                   height={160}
                                   className="mb-5"
                                 />
                                 <p className="text-center"> March 21 – April 19</p>
                                 </Link>
                               </div>{/* <img
                                src="/assets/images/security/Aries.jpg"
                                alt="aries" 
                             width={200}
                                height={200}    
                                    className="mb-5"
                            />
Symbol:  <span className="text-[var(--primary)]">The Ram</span>
Element:  <span className="text-[var(--primary)]">Fire</span>
Modality:  <span className="text-[var(--primary)]">Cardinal (initiating energy)</span>
Ruling Planet:  <span className="text-[var(--primary)]">Mars</span>
Polarity:  <span className="text-[var(--primary)]">Positive</span>
Lucky Gem:  <span className="text-[var(--primary)]">Diamond</span>
Spirit Color:  <span className="text-[var(--primary)]">Red</span>

                        </div> */}
                                    
          <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
                <Link href="/yearly-taurus"> 
    <Image
                                src="/assets/images/security/Taurus.jpg"
                                alt="Taurus"
                             width={160}
                                height={160}    
                               className="mb-5"
                            />
                                                      <p className="text-center"> April 20 – May 20
</p>         </Link>       </div>
         <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
                <Link href="/yearly-gemini"> 
      <Image
                                src="/assets/images/security/Gemini.jpg"
                                alt="Gemini"
                                width={160}
                                height={160}
                               className="mb-5"
                            />
                             <p className="text-center">  May 21 – June 20
</p></Link>
                        </div>
               <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
               <Link href="/yearly-cancer"> 
    <Image
                                src="/assets/images/security/Cancar.jpg"
                                alt="Cancer"
                                width={160}
                                height={160}
                               className="mb-5"
                            />
                             <p className="text-center">  June 21 – July 22
</p></Link>
                        </div>
                 <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
              <Link href="/yearly-leo"> 
   
                  <Image
                                src="/assets/images/security/leo.jpg"
                                alt="Leo"
                                width={200}
                                height={200}
                                   className="mb-5"
                            />
                                                         <p className="text-center">  July 23 – August 22
</p></Link>
                        </div>
                     <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
              <Link href="/yearly-virgo"> 
   
              <Image
                                src="/assets/images/security/virgo.jpg"
                                alt="virgo"
                                width={160}
                                height={160}
                                    className="mb-5"
                            />
                                   <p className="text-center">  August 23 – September 22

</p></Link>
                        </div>
          <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
              <Link href="/yearly-libra"> 
   
              <Image
                                src="/assets/images/security/Libra.jpg"
                                alt="Libra"
                                width={160}
                                height={160}
                                className="mb-5"
                            />
                            <p className="text-center">   September 23 – October 22

</p></Link>
                        </div>
                      <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
             
               <Link href="/yearly-scorpio"> 
   
                            <Image
                                src="/assets/images/security/Scorpio.jpg"
                                alt="Scorpio"
                                width={160}
                                height={160}
                               className="mb-5"
                            /><p className="text-center">  October 23 – November 21


</p></Link>
                        </div>
                  <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
              <Link href="/yearly-sagittarius"> 
   
               <Image
                                src="/assets/images/security/Sagittarius.jpg"
                                alt="Sagittarius"
                                width={160}
                                height={160}
                                 className="mb-5"
                            /><p className="text-center">  November 22 – December 21


</p></Link>
                        </div>
                 <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
             
               <Link href="/yearly-capricorn"> 
   
                            <Image
                                src="/assets/images/security/Capricorn.jpg"
                                alt="Capricorn"
                                width={200}
                                height={200}
                                 className="mb-5"
                            /><p className="text-center">  December 22 – January 19


</p></Link>
                        </div>
                 <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
             
               <Link href="/yearly-aquarius"> 
   
                            <Image
                                src="/assets/images/security/Aquarius.jpg"
                                alt="Aquarius"
                                width={160}
                                height={160}
                                 className="mb-5"
                            /><p className="text-center">  January 20 – February 18

</p></Link>
                        </div>

                       <div className="flex flex-col items-center  mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
             
               <Link href="/yearly-pisces"> 
   
                            <Image
                                src="/assets/images/security/Pisces.jpg"
                                alt="Pisces"
                                width={160}
                                height={160}
                              className="mb-5"
                            /><p className="text-center">  February 19 – March 20

</p></Link>
                        </div>
                      
                   
                    </section>
                </section>
            </Container>
        </section>
    );
};
export default About;
