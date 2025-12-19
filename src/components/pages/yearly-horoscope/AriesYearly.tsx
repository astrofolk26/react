import Image from "next/image";
import Container from "@/components/layouts/Container";


const AriesYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/aries_yearly.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Aries Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
 For Aries, 2026 would likely be a year focused on personal growth, refining your identity, and making significant strides in areas of self-expression and practical foundations. You, as an Aries, are known for your pioneering spirit, energy, and desire to lead. The planetary energies of 2026 would probably direct that fire towards more structured and self-reflective endeavors.</p><br></br>
<b>General Theme: Self-Mastery & New Structures</b>
<br />
<p>
  2026 could be a year where you're called to build new, more sustainable structures in your life. This might involve letting go of old ways of doing things that no longer serve your authentic self. There could be a strong emphasis on personal responsibility and creating a solid foundation for your future ambitions.</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default AriesYearly
