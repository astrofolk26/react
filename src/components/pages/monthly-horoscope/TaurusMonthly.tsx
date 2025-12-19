import Image from "next/image";
import Container from "@/components/layouts/Container";


const ATaurusYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/TaurusMonth.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>December Monthly Taurus  </span> Horoscope Prediction</h2>
<p className='text-justify'>
 For Taurus, December could be a month of intense focus on relationships and partnerships, a journey into higher knowledge or travel, and a strong pull towards expansive experiences as the year closes. You, as a Taurus, are known for your stability, practicality, and desire for security. This month might challenge you to be more adaptable in your relationships and open your mind to new philosophies or adventures.
</p><br /><b>General Theme: Partnerships, Expansion & Philosophical Growth</b>
<br />
<p className='text-justify'>
December for Taurus might heavily emphasize your one-on-one relationships, both personal and professional. The month encourages deeper engagement, compromise, and finding balance in your interactions. As the Sun moves into Capricorn (Winter Solstice), your focus could shift towards broader horizons, higher learning, and even travel, expanding your worldview.</p>
         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default ATaurusYearly
