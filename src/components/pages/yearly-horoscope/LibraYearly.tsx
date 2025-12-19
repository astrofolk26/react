import Image from "next/image";
import Container from "@/components/layouts/Container";


const LibraYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/LibraYear.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Libra Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
For Libra, 2026 could be a significant year focused on creativity, self-expression, children, and finding joy, while also refining your daily routines, health, and work life. You, as a Libra, are known for your desire for balance, harmony, and beautiful relationships. The planetary energies of 2026 might direct your aesthetic and relational energy towards more personal fulfillment and efficient self-management.
  </p><br></br>
<b>General Theme: Joyful Creation & Practical Harmony</b>
<br />
<p>
 2026 could be a year that brings a strong emphasis on what truly brings you joy, whether that's creative projects, hobbies, or experiences with children. Alongside this, there will be a continued focus on optimizing your daily life, routines, and health to create a harmonious and productive existence.
  </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default LibraYearly
