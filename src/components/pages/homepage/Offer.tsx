import Container from "@/components/layouts/Container";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Offer = () => {
   return (
     <section className="padding  text-white">
                 <Container width>
                   <section className="flex flex-col items-center justify-center mt-10">
                     <h2 className="title text-center text-black text-2xl sm:text-4xl font-bold style={{ padding: '-1px' }}>">
                                  What We {" "}
             <span className="text-[var(--primary)]">Offer</span>
           </h2>
 
           <section className="flex flex-wrap justify-center ">
             
             <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px] rounded-md p-2">
                 <Link href="/yagna-remedies"> 
              <Image
                src="/assets/images/security/pooja.jpg"
                alt="pooja"
                width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center">Vedic Yagana Pooja</p>
              </Link>
            </div>

            <div className="flex flex-col items-center mt-14  items-center w-[160px] h-[160px]  rounded-md p-2">
             <Link href="/yearly-prediction"> 
              <Image
                src="/assets/images/security/pyp.jpg"
                alt="Personalized Yearly Prediction 2026"
                width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center">Personalized 2026 Prediction</p>
              </Link>
            </div>

             <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
              <Link href="/rahu-ketu-transit"> 
              <Image
                src="/assets/images/security/pt.jpg"
                alt="Planets Transit 2026"
                width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center">Planets Transit </p>
              </Link>
            </div>

           <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
                <Link href="/jupiter-transit-report">  <Image
                src="/assets/images/security/obf.jpg"
                alt="Own Business forecast"
                width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center">Own Business forecast</p>
              </Link>
            </div>

             <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
              <Link href="/life-prediction-report">  <Image
                src="/assets/images/security/clp.jpg"
                alt="Complete Life Prediction"
                width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center"> Life Prediction Report</p>
              </Link>
            </div>

             <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
               <Link href="/health-report">  <Image
                src="/assets/images/security/ahp.jpg"
                alt="Astrology Health Prediction"
                width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center">Astrology Health Prediction</p>
              </Link>
            </div>

            <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
              <Link href="/live-astro-counselling">   <Image
                src="/assets/images/security/oac.jpg"
                alt="Astrology consultation online"
                width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center">Online Astrology consultation </p>
              </Link>
            </div>

            
               <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
             <Link href="/meditation-remedies">  <Image
                src="/assets/images/security/medi.jpg"
                alt="Meditation and Yoga"
                width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center">Meditation and Yoga</p>
              </Link>
            </div>
<div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
              
           <Link href="/natural-remedies"><Image
                src="/assets/images/security/remedies.jpg"
                alt="Natural Remedies"
        width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center"> Natural Remedies</p></Link> 
            </div>
              
            <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
                <Link href="/life-love-prediction">    <Image
                src="/assets/images/security/match.jpg"
                alt="Compatibilty Matching"
        width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center"> Compatibilty Matching</p></Link>
            </div>
              <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
              <Link href="/numerology"> 
              <Image
                src="/assets/images/security/Numerology.jpg"
                alt="Numerology"
                width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center">Numerology</p>
              </Link>
            </div>
            <div className="flex flex-col items-center mt-14 items-center w-[160px] h-[160px]  rounded-md p-2">
              <Link href="/love-relation">  <Image
                src="/assets/images/security/love.jpg"
                alt="Love"
          width={160}
                height={160}
                className="mb-5"
              />
              <p className="text-center"> Love Relationship</p></Link>
            </div>

          </section>
        </section>
      </Container>
    </section>
  );
};

export default Offer;
