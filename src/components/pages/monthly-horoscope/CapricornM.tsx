import Image from "next/image";
import Container from "@/components/layouts/Container";


const CapricornM = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/CapricornMonth.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Capricorn December Monthly  </span>Horoscope Prediction </h2>
<p className='text-justify'>
For Capricorn, December could be a month of intense focus on friendships, group activities, and future aspirations, followed by a powerful period of personal renewal, self-assertion, and new beginnings as the year closes. You, as a Capricorn, are known for your discipline, ambition, and practical approach. This month might direct your structured energy towards social impact and then powerfully shift inward for a personal reset.
</p><br></br>
<b>General Theme: Social Connections, Future Vision & Personal Rebirth</b>
<br />
<p>
  December for Capricorn might initially highlight themes of social networks, group collaborations, and humanitarian causes. As the month progresses and the Sun moves into your sign (Capricorn, marking the Winter Solstice), your focus will shift strongly towards your personal identity, self-assertion, and initiating new cycles, essentially experiencing a powerful rebirth for the new year.</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default CapricornM
