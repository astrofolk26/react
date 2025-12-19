import Image from "next/image";
import Container from "@/components/layouts/Container";


const SagitariusM = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/SagittariusMonth.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Sagittarius December Monthly </span>Horoscope Prediction </h2>
<p className='text-justify'>
For Sagittarius, December could be a month of intense focus on personal finances, values, and self-worth, followed by a strong emphasis on communication, learning, and local connections as the year closes. You, as a Sagittarius, are known for your adventurous spirit, optimism, and love for freedom. This month might direct your expansive energy towards grounding your resources and connecting more deeply with your immediate environment and intellect.
  </p><br></br>
<b>General Theme: Resource Management, Self-Worth & Sharpened Intellect</b>
<br />
<p>
December for Sagittarius might initially highlight themes of personal income, values, and what truly brings you security. As the month progresses and the Sun moves into Capricorn (Winter Solstice), your focus will shift strongly towards communication, learning, short trips, and engaging with your local community or siblings.
</p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default SagitariusM
