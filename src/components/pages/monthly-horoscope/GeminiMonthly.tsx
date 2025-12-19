import Image from "next/image";
import Container from "@/components/layouts/Container";


const GeminiYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/geminiMonth.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>December Monthly Gemini  </span>Horoscope Prediction </h2>
<p className='text-justify'>
 For Gemini, December could be a month of intense focus on relationships and partnerships, delving into shared resources or deep psychological matters, and a strong pull towards transformation as the year closes. You, as a Gemini, are known for your communication, curiosity, and adaptability. This month might challenge you to engage with others on a more profound, less superficial level, and explore your own hidden depths. </p><br></br>
<b>General Theme: Partnerships, Intimacy & Transformation</b>
<br />
<p>
  December for Gemini might heavily emphasize your one-on-one relationships, both personal and professional. The month encourages deeper engagement, compromise, and finding balance in your interactions. As the Sun moves into Capricorn (Winter Solstice), your focus could shift towards shared finances, intimacy, and profound psychological exploration.</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default GeminiYearly
