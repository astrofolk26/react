import Image from "next/image";
import Container from "@/components/layouts/Container";


const PiscesYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/PiscesYear.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Pisces Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
For Pisces, 2026 could be a significant year focused on personal identity, self-discovery, and building a strong foundation for your future. You, as a Pisces, are known for your empathy, intuition, and spiritual depth. The planetary energies of 2026 might direct your sensitive and imaginative nature towards solidifying your sense of self and creating practical, lasting structures in your life.

  </p><br></br>
<b>General Theme: Self-Definition & Foundation Building</b>
<br />
<p>
 2026 could be a year that truly defines who you are and what you stand for. You might be shedding old illusions or self-doubts and stepping into a more empowered and grounded version of yourself. There will be a strong emphasis on establishing personal independence and building secure foundations in various areas of your life.
  </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default PiscesYearly
