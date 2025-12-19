import Image from "next/image";
import Container from "@/components/layouts/Container";



const AquariusYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/AquariusYear.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Aquarius Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
 For Aquarius, 2026 could be a significant year focused on home, family, foundations, and a deeper exploration of your roots and emotional security. You, as an Aquarius, are known for your independence, innovation, and focus on the collective. The planetary energies of 2026 might direct your forward-thinking energy towards nurturing your inner world and building a stronger sense of belonging.</p><br></br>
<b>General Theme: Rooting & Emotional Security</b>
<br />
<p>
  2026 could be a year that invites you to focus on your domestic life, family connections, and establishing a more solid emotional foundation. While your outward-looking nature remains, there will be a strong emphasis on creating a secure base from which to launch your innovative ideas and engage with the world.</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default AquariusYearly
