import Image from "next/image";
import Container from "@/components/layouts/Container";


const GeminiYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/gemini_year.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Gemini Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
 For Gemini, 2026 could be a significant year focused on deepening connections, exploring spirituality or subconscious patterns, and potentially undergoing profound shifts in your worldview or approach to intimate relationships and shared resources. You, as a Gemini, are known for your curiosity, communication skills, and adaptability. The planetary energies of 2026 might direct your mental agility towards more profound, less superficial areas of life.
 </p><br></br>
<b>General Theme: Transformation & Inner Exploration</b>
<br />
<p>
  2026 could be a year that invites you to look beyond the surface, delving into mysteries, shared psychology, and perhaps confronting hidden aspects of yourself. It's a period for intense self-discovery and spiritual growth, which might require you to step out of your usual communicative, logical comfort zone.</p>
<br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default GeminiYearly
