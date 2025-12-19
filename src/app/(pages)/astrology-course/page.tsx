import Container from "@/components/layouts/Container";
import Image from "next/image";
const page = () => {
  return (
    <section className="padding">
      <Container width>
       
                 <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                   <Image
                     src="/assets/images/security/astrologyCourse.jpg"
                     alt="logo"
                     width={450}
                     height={500}
                     className=""
                   />
                   <div className=''>
                     <h2 className='title'><span>Foundation Module  </span>– Introduction to Vedic Astrology</h2>
         <p className='text-justify'>
         <b>- History and philosophy of Jyotish Shastra</b>  <br />
- Importance of astrology in daily life and spiritual practice  <br />
- Overview of zodiac signs, planets, and houses  <br />
- Ethical use of astrology  <br /><br />
<b>Core Concepts</b> <br />
- Zodiac Signs (Rashis): Characteristics, strengths, and weaknesses <br />
- Planets (Grahas): Roles, influences, and mythological significance <br />
- Houses (Bhavas): Life areas and their meanings <br />
- Nakshatras: Lunar mansions and their spiritual symbolism <br />
</p> </div>
           </section>
      </Container>
 <Container width maxWidth>
       
<b>Chart Reading & Calculations</b><br />
- Constructing a birth chart (Janma Kundali)<br />
- Understanding ascendant (Lagna) and its importance<br />
- Planetary positions and aspects (Drishti)<br />
- Dashas (planetary periods) and transits<br />
<br />
<b>Predictive Techniques</b><br />
- Interpreting planetary combinations (Yogas)<br />
- Timing events with Vimshottari Dasha<br />
- Transit analysis for career, health, and relationships<br />
- Case studies with real-life examples<br /><br />

<b> Remedies & Applications</b><br />
- Spiritual Remedies: Mantras, poojas, yagnas<br />
- Material Remedies: Gemstones, kavach, donations<br />
- Lifestyle Guidance: Vastu principles, daily rituals<br />
- Integrating astrology into modern decision-making<br />
<br />
<b>Specialized Modules</b><br />
- Child & Teen Astrology<br />
- Compatibility & Relationship Analysis<br />
- Vastu Shastra integration<br />
- Medical & Psychological perspectives in astrology<br />
- Global astrology traditions compared with Vedic<br />
<br />
<b>Practical Workshops</b><br />
- Hands-on chart analysis<br />
- Group discussions and Q&A sessions<br />
- Guided meditation and mantra practice<br />
- Assignments and feedback<br />

<b>Certification & Community</b><br />
- Final assessment (chart reading + written test)<br />
- Astroflok Certificate of Completion<br />
- Access to Astroflok’s global community for continued learning<br />
- Opportunities to contribute to Astroflok’s knowledge base<br />

         <br />
      <p className="text-center">  Full Course will be Lunch as soon as possible</p>
        
        
      </Container>
    </section>
  );
};

export default page;
