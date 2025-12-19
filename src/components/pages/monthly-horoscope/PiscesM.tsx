import Image from "next/image";
import Container from "@/components/layouts/Container";


const PiscesYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/PiscesMonth.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Pisces December Monthly  </span>Horoscope Prediction </h2>
<p className='text-justify'>
For Pisces, December could be a month of intense focus on career ambition, public image, and community involvement, followed by a period of introspection and attention to hidden matters or subconscious processes as the year closes. You, as a Pisces, are known for your empathy, intuition, and spiritual depth. This month might direct your compassionate energy towards making a public impact before shifting to a more reflective and private phase of spiritual grounding.

  </p><br></br>
<b>General Theme: Public Achievement, Social Impact & Quiet Reflection</b>
<br />
<p>
 December for Pisces might initially highlight themes of career, public recognition, and your role in the wider world. As the month progresses and the Sun moves into Capricorn (Winter Solstice), your focus will shift strongly towards friendships, group activities, humanitarian causes, and making an impact within your social networks. The very end of the month might invite deeper spiritual contemplation.
  </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default PiscesYearly
