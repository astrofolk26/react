import Image from "next/image";
import Container from "@/components/layouts/Container";


const SagitariusY = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/SagittariusYear.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Sagittarius Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
 For Sagittarius, 2026 could be a significant year focused on deepening your roots, establishing home and family foundations, and expanding your creative expression and personal joy. You, as a Sagittarius, are known for your adventurous spirit, optimism, and love for freedom. The planetary energies of 2026 might direct your expansive energy towards building a strong personal sanctuary and finding joy in more established, creative pursuits.
  </p><br></br>
<b>General Theme: Rooted Growth & Joyful Creation</b>
<br />
<p>
2026 could be a year that invites you to build a more secure and nurturing personal base. This emphasis on home, family, and inner emotional security will provide a solid platform for your boundless enthusiasm, allowing you to channel it into creative projects, self-expression, and finding genuine joy.
 </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default SagitariusY
