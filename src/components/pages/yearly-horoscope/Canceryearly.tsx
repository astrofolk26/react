import Image from "next/image";
import Container from "@/components/layouts/Container";


const CancerYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/cancer_year.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Cancer Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
 For Cancer, 2026 could be a pivotal year focused on significant shifts in personal identity and core relationships, particularly those involving partnerships and self-expression. You, as a Cancer, are known for your nurturing nature, emotional depth, and strong connection to home and family. The planetary energies of 2026 might call for you to balance your need for security with a desire for more authentic self-expression and interaction with others.</p><br></br>
<b>General Theme: Redefining Self & Relationships</b>
<br />
<p>
  2026 could bring a strong focus on your relationships and how you define yourself within them. You might experience profound changes in your partnerships, leading to either deeper commitment or necessary separation. This year would encourage you to be more assertive about your needs and desires.</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default CancerYearly
