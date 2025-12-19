import Container from "@/components/layouts/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Security = () => {
  return (
    <section className="padding  text-white">
      <Container width>
        <section className="flex flex-col items-center justify-center gap-10">
          <h2 className="title text-center text-black text-2xl sm:text-4xl font-bold">
            Astrology {" "}
            <span className="text-[var(--primary)]">Services</span>
          </h2>

          <section className="flex flex-wrap justify-center mt-4">
            
           
            <div className="flex flex-col items-center items-center w-[200px] h-[200px]  rounded-md p-2">
             <Link href="/yearly-prediction">   <Image
                src="/assets/images/security/KUNDALI.jpg"
                alt="Kundali"
          width={200}
                height={200}
                className="object-contain w-full h-full"
              />
           <p className="text-center"> Kundali</p> </Link>
            </div>
            
     
            
           <div className="flex flex-col items-center items-center w-[200px] h-[200px]  rounded-md p-2">
                 <Link href="/astrology-course"> <Image
                src="/assets/images/security/astrocourse.jpg"
                alt="Astrology Course"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
              <p className="text-center">Astrology Course</p>
              </Link>
            </div>
              <div className="flex flex-col items-center items-center w-[200px] h-[200px]  rounded-md p-2">
              <Link href="/#">  <Image
                src="/assets/images/security/as.jpg"
                alt="Astro Shopping"
                  width={200}
                height={200}
                className="object-contain w-full h-full"
              />
              <p className="text-center">Astro Shopping</p>
              </Link>
            </div>
            <div className="flex flex-col items-center items-center w-[200px] h-[200px]  rounded-md p-2">
                <Link href="/cowproducts">  <Image
                src="/assets/images/security/cpt.jpg"
                alt="Cow Traditional Products"
                   width={200}
                height={200}
                className="object-contain w-full h-full"
              />
              <p className="text-center">Cow Traditional Products</p>
              </Link>
            </div>

          
                        {/* <div className="flex justify-center items-center w-[200px] h-[200px] rounded-md p-2">
              <Image
                src="/assets/images/security/rbi.png"
                alt="RBI"
              width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div> */}

            {/* <div className="flex justify-center items-center w-[200px] h-[200px]  text-center  rounded-full p-2 font-bold text-lg text-black bg-[var(--primary)]">
              RBI Registered
            </div>
             */}
  
            <div className="flex flex-col items-center items-center w-[200px] h-[200px]  rounded-md p-2">
             <Link href="/cow-science">  <Image
                src="/assets/images/security/cow.jpg"
                alt="Cow Science"
        width={200}
                height={200}
                className="object-contain w-full h-full"
              />
              <p className="text-center">Cow Science</p></Link>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Security;
