import Image from "next/image";
import Container from "@/components/layouts/Container";


const CapricornY = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/CapricornYear.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Capricorn Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
For Capricorn, 2026 could be a significant year focused on creativity, self-expression, children, and finding more joy and passion in life. You, as a Capricorn, are known for your discipline, ambition, and practical approach. The planetary energies of 2026 might direct your structured energy towards cultivating more personal fulfillment, creative pursuits, and enjoying the fruits of your labor.</p><br></br>
<b>General Theme: Self-Mastery & New Structures</b>
<br />
<p>
  2026 could be a year that invites you to tap into your inner child, explore your creative talents, and find more avenues for genuine enjoyment and self-expression. While your practical nature will remain, there will be a strong emphasis on balancing responsibility with play, and nurturing your unique spirit.</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default CapricornY
