import Image from "next/image";
import Container from "@/components/layouts/Container";



const AquariusMonthly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/AquariusMonth.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Aquarius December Monthly </span> Horoscope Prediction </h2>
<p className='text-justify'>
 For Aquarius, December could be a month of intense focus on personal identity, self-expression, and establishing a strong sense of individuality, followed by a period of introspection and attention to hidden matters or subconscious processes as the year closes. You, as an Aquarius, are known for your independence, innovation, and humanitarian spirit. This month might direct your progressive energy towards self-definition before shifting to a more reflective and private phase.
 </p><b>General Theme: Self-Assertion, Identity & Inner Reflection</b>
<br />
<p>
 December for Aquarius might initially highlight themes of self-identity, personal initiatives, and making your presence known. As the month progresses and the Sun moves into Capricorn (Winter Solstice), your focus will shift strongly towards introspection, rest, and dealing with behind-the-scenes matters or subconscious patterns.
 </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default AquariusMonthly
