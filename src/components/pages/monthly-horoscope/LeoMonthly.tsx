import Image from "next/image";
import Container from "@/components/layouts/Container";


const LeoYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/LeoMonth.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Leo December Monthly </span>Horoscope Prediction</h2>
<p className='text-justify'>
 For Leo, December could be a month of intense focus on creativity, self-expression, children, and finding more joy and passion in life, coupled with a growing emphasis on daily routines, health, and work as the year closes. You, as a Leo, are known for your creativity, leadership, and desire to shine. This month might blend your playful spirit with a practical push towards greater efficiency and well-being.
   </p><br></br>
<b>General Theme: Creative Fulfillment, Joy, & Practical Optimization</b>
<br />
<p>
 The first half of December for Leo might be vibrant and expressive, filled with opportunities for joy, romance, and creative endeavors. As the month progresses and the Sun moves into Capricorn (Winter Solstice), your focus will shift towards more practical matters, inviting you to optimize your daily life, health routines, and work environment.
 </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default LeoYearly
