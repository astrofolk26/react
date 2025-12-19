import Image from "next/image";
import Container from "@/components/layouts/Container";


const CancerYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/cancerMonth.jpg"
            alt="cancerMonth"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>December Monthly Cancer  </span> Horoscope Prediction </h2>
<p className='text-justify'>
 For Cancer, December could be a month of intense focus on daily routines, health, and well-being, coupled with a strong emphasis on partnerships and relationships as the year closes. You, as a Cancer, are known for your nurturing nature, emotional depth, and desire for security. This month might direct your caring energy towards optimizing your personal efficiency and strengthening your one-on-one connections.
 </p><b>General Theme: Practicality, Wellness & Deepening Relationships</b>
<br />
<p>
  December for Cancer might initially highlight your daily life, work routines, and health practices. As the month progresses and the Sun moves into Capricorn (Winter Solstice), your focus will shift strongly towards your significant relationships, inviting you to engage more deeply with partners, both personal and professional.</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default CancerYearly
