import Image from "next/image";
import Container from "@/components/layouts/Container";


const MainHoro = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/yhp.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Yearly Horoscope</span> Prediction for 2026</h2>
<p className='text-justify'>
  A "Yearly Horoscope Prediction for 2026" provides a general astrological outlook for each of the twelve zodiac signs for the upcoming year. It typically covers major planetary movements (transits) and how they might influence different areas of life for people born under each sign.
</p><br></br>
<b>What a "Yearly Horoscope Prediction 2026" Generally Covers (for each sign):</b>
<br />
<p>
  A good yearly horoscope prediction usually breaks down the year into various life categories, looking at the general trends and opportunities or challenges that planetary transits (like Jupiter, Saturn, Rahu/Ketu, Uranus, Neptune, Pluto) might bring to each Sun/Moon/Ascendant sign.
</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default MainHoro
