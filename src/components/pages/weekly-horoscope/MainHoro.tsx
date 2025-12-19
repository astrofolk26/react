import Image from "next/image";
import Container from "@/components/layouts/Container";


const MainHoro = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/weekly.jpg"
            alt="weekly"
            width={450}
            height={500}
            className=""
          />
          <div className='text-justify'>
            <h2 className='title'><span> Weekly </span> Horoscope Prediction</h2>

  This week, the energy shifts from the initial enthusiasm of Sagittarius season into a slightly more pragmatic phase. As we head toward December, many signs will feel the tug-of-war between wanting to expand their horizons and the need to buckle down and handle practical responsibilities before the holidays fully kick in. It’s a week for balancing big dreams with necessary details.
<br></br>
<b>What a "Weekly Horoscope Prediction" Generally Covers (for each sign):</b>
<br />

  A good Weekly horoscope prediction usually breaks down the month into various life categories, looking at the general trends and opportunities or challenges that planetary transits (like the Sun's movement, Mercury's retrogrades, Venus's romantic shifts, Mars's energy, and major aspects involving slower-moving planets) might bring to each Sun/Moon/Ascendant sign.


<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default MainHoro
