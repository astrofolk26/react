import Container from "@/components/layouts/Container";
import Image from "next/image";
const page = () => {
  return (
    <section className="padding">
      <Container width>
       
                 <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                   <Image
                     src="/assets/images/security/cowproducts.jpg"
                     alt="logo"
                     width={450}
                     height={500}
                     className=""
                   />
                   <div className=''>
                     <h2 className='title'><span>Traditional </span>Cow-Based Products </h2>
         <p className='text-justify'>
         
Traditional cow-based products in India include items like A2 ghee, cow butter, curd, cow dung cakes, and gau mutra (cow urine), all of which are rooted in Vedic practices and widely used for health, rituals, and daily living.
 <br /><br />
<b>Key Traditional Cow Products</b> <br />
- A2 Ghee: Pure clarified butter rich in omega-3 fatty acids <br />
- Cow Butter: Nutrient-dense fat for cooking and wellness <br />
- Curd (Dahi): Probiotic-rich yogurt for digestion <br />
- Cow Dung Cakes: Used for fuel, fertilizer, and purification rituals <br />
- Gau Mutra: Traditional remedy in Ayurvedic medicine <br />
<br />


</p> </div>
           </section>
      </Container>
 <Container width maxWidth>
     <b>Cultural & Practical Significance</b> <br />
- Spiritual rituals: Cow dung cakes and gau mutra are integral in poojas, yagnas, and purification ceremonies. <br />
- Ayurveda: A2 ghee, curd, and gau mutra are considered healing, balancing digestion, immunity, and energy. <br />
- Sustainable living: Cow dung is eco-friendly fuel and fertilizer; gaushalas promote organic, rural livelihoods. <br />
- Daily diet: Butter, curd, and ghee remain staples in Indian kitchens, valued for nutrition and taste. <br />
<br />  
 <b>Why They Matter</b> <br />
- Health benefits: A2 ghee and curd are easier to digest and rich in nutrients. <br />
- Eco-conscious: Using cow dung and urine supports natural farming and reduces chemical dependency. <br />
- Cultural continuity: These products preserve Vedic traditions while serving modern wellness needs. <br />
 <p className="text-center">  Products will be Lunch as soon as possible</p>
        
        
      </Container>
    </section>
  );
};

export default page;
