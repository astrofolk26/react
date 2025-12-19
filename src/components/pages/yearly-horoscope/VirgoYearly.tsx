import Image from "next/image";
import Container from "@/components/layouts/Container";


const VirgoYearly = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/security/VirgoYear.jpg"
            alt="logo"
            width={450}
            height={500}
            className=""
          />
          <div className=''>
            <h2 className='title'><span>Virgo Yearly Horoscope </span> Prediction 2026</h2>
<p className='text-justify'>
For Virgo, 2026 could be a significant year focused on deepening relationships, navigating partnerships, and a major emphasis on daily routines, health, and personal well-being. You, as a Virgo, are known for your meticulousness, analytical mind, and desire for service. The planetary energies of 2026 might direct your practical energy towards refining how you interact in close relationships and optimizing your personal and professional efficiency.
 </p><br></br>
<b>General Theme: Refined Partnerships & Optimized Well-being</b>
<br />
<p>
 2026 could be a year that brings your close relationships—both personal and professional—to the forefront. You might be called to refine how you collaborate, compromise, and engage with others on a deeper, more committed level. Simultaneously, there will be a strong focus on optimizing your daily life, routines, and overall health to support these dynamic shifts.
 </p><br />

         
            </div>
        </section>
      </Container>

    </section>
  )
}

export default VirgoYearly
