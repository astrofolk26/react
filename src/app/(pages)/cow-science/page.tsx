import Container from "@/components/layouts/Container";
import Image from "next/image";
const page = () => {
  return (
    <section className="padding">
      <Container width>
       
                 <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                   <Image
                     src="/assets/images/security/cowscenice.jpg"
                     alt="logo"
                     width={450}
                     height={500}
                     className=""
                   />
                   <div className=''>
                     <h2 className='title'><span>Cow  </span> Science</h2>
         <p className='text-justify'>
         
“Cow science” refers to both the biological study of cows (Bos taurus) and, in India, a cultural‑scientific movement that blends traditional wisdom with modern sustainability practices to preserve indigenous breeds and promote rural development.
 <br /><br />
<b>- Biological Science of Cows </b> <br/>
- Scientific name: Bos taurus<br/>
- Belong to the family Bovidae, alongside sheep, goats, and bison.<br/>
- Digestive system: complex ruminant stomach with four chambers (rumen, reticulum, omasum, abomasum).<br/>
- Global population: nearly 1.5 billion cows worldwide.<br/>
- Uses: dairy (Holstein), beef (Angus), dual‑purpose (Hereford).<br/>



</p> </div>
           </section>
      </Container>
 <Container width maxWidth>
    <br/><br/>
     <b>- Cultural & Rural “Cow Science” in India </b> <br/>
- Origin: Initiatives like the Param Pujya Madhan Gau Vigyan Anusandhan Samiti .<br/>
- Aim: Revive indigenous breeds such as Tharparkar, Gir, Sanchori, Nagauri, and Rathi.<br/>
- Approach: Combines traditional Vedic knowledge with modern animal husbandry.<br/>
- Impact: Empowers rural communities, sustains biodiversity, and integrates cows into holistic village life.<br/>


 <p className="text-center">  Cow Science related one course will be lunch as soon as possible</p>
        
        
      </Container>
    </section>
  );
};

export default page;
