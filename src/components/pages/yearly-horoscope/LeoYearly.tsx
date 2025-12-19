import Image from "next/image";
import Container from "@/components/layouts/Container";


const LeoYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/leoYear.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Leo Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
 For Leo, 2026 could be a significant year focused on deepening relationships, navigating partnerships, and potentially a major emphasis on career ambitions and public image. You, as a Leo, are known for your creativity, leadership, and desire to shine. The planetary energies of 2026 might direct your vibrant energy towards how you interact with others and how you present yourself to the wider world.
  </p><br></br>
<b>General Theme: Partnerships & Public Persona</b>
<br />
<p>
 2026 could be a year that brings your relationships—both personal and professional—to the forefront. You might be called to refine how you collaborate, compromise, and engage with others on a deeper level. Your public image and career trajectory could also undergo significant development, demanding your full attention.
 </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default LeoYearly
