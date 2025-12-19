import Image from "next/image";
import Container from "@/components/layouts/Container";


const VirgoMonthly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/VirgoMonth.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Virgo December Monthly  </span>Horoscope Prediction</h2>
<p className='text-justify'>
For Virgo, December could be a month of intense focus on home, family, and personal foundations, followed by a strong pull towards creativity, self-expression, and joy as the year closes. You, as a Virgo, are known for your practicality, analytical mind, and desire for order. This month might direct your meticulous energy towards creating harmony in your domestic life and then finding outlets for your inner creativity.
 </p><br></br>
<b>General Theme: Domestic Harmony, Foundations & Creative Expression</b>
<br />
<p>
 December for Virgo might initially highlight themes of home, family, and your emotional roots. As the month progresses and the Sun moves into Capricorn (Winter Solstice), your focus will shift strongly towards your creative endeavors, children (if applicable), romance, and finding more joy and playfulness in life.
  </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default VirgoMonthly
