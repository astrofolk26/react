import Image from "next/image";
import Container from "@/components/layouts/Container";


const LibraYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/LibraMonth.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Libra December Monthly</span> Horoscope Prediction </h2>
<p className='text-justify'>
For Libra, December could be a month of intense focus on communication, learning, and local environment, followed by a strong pull towards home, family, and personal foundations as the year closes. You, as a Libra, are known for your balance, diplomacy, and desire for harmony. This month might direct your social energy towards deeper connections within your immediate surroundings and within your home life.  </p><br></br>
<b>General Theme: Communication, Community & Nurturing Home Life</b>
<br />
<p>
 December for Libra might initially highlight themes of communication, short trips, learning, and engagement within your local community or with siblings. As the month progresses and the Sun moves into Capricorn (Winter Solstice), your focus will shift strongly towards your domestic life, family matters, and building secure personal foundations. </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default LibraYearly
