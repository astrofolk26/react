import Image from "next/image";
import Container from "@/components/layouts/Container";


const MainHoro = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/DMHP.jpg"
            alt="DMHP"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>December Monthly </span> Horoscope Prediction</h2>
<p className='text-justify'>
  "December Monthly Horoscope Prediction" provides a general astrological outlook for each of the twelve zodiac signs for the month of December. It typically covers major planetary movements (transits, retrogrades, aspects, moon phases) occurring within December and how they might influence different areas of life for people born under each sign.

</p><br></br>
<b>What a "December Monthly Horoscope Prediction" Generally Covers (for each sign):</b>
<br />
<p>
  A good monthly horoscope prediction usually breaks down the month into various life categories, looking at the general trends and opportunities or challenges that planetary transits (like the Sun's movement, Mercury's retrogrades, Venus's romantic shifts, Mars's energy, and major aspects involving slower-moving planets) might bring to each Sun/Moon/Ascendant sign.

</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default MainHoro
