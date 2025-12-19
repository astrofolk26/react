import Image from "next/image";
import Container from "@/components/layouts/Container";


const AriesMonthly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/ariesmonth.jpg"
            alt="ariesmonth"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>December Monthly Aries</span>  Horoscope Prediction</h2>
<p className='text-justify'>
 For Aries, December could be a month of deep reflection, intense focus on shared resources or intimate connections, and a strong pull towards higher learning or philosophical exploration as the year closes. You, as an Aries, are known for your drive and pioneering spirit. This month might temper your outward action with a call for introspection and strategic planning.</p><br></br>
<b>General Theme: Introspection, Shared Ventures & Broadening Horizons</b>
<br />
<p>
  December for Aries might emphasize looking inward, especially concerning joint finances, shared power dynamics, or deep emotional ties. As the month progresses and the Sun moves into Capricorn (Winter Solstice), your focus could shift towards professional ambition and your public image, but the initial part of the month would likely be more about hidden truths and deeper connections.</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default AriesMonthly
