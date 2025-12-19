import Image from "next/image";
import Container from "@/components/layouts/Container";


const ATaurusYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/taurus_yearly.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Taurus 2026 Yearly Horoscope </span> : A Year of Inner Release and Foundations</h2>
<p className='text-justify'>
 For Taurus, 2026 is a deeply significant year of introspection, preparation, and clearing the decks. The major planetary shifts point towards a period where the most important work you do will be internal and behind the scenes. You are preparing for a major new life cycle, and this year is about letting go of the past, healing old wounds, and quietly laying the foundation for the future. While the world may not see a lot of flashy external changes yet, the internal shifts will be profound. It's a year to be gentle with yourself and trust the process of transformation that is underway.
 
</p><br />


         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default ATaurusYearly
