
import Container from "@/components/layouts/Container";
import Link from "next/link";
const yoga = () => {
    return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 '></section>
                
    <h2 className='title'><span>    Yoga  </span> Remedies </h2>
      <p className='text-justify'>
       
Yoga Remedies, which are a natural extension of mantra, meditation, and pooja remedies. They use postures (asanas), breathwork (pranayama), and mudras to balance planetary energies, strengthen the body-mind system, and dissolve karmic imbalances.
<br/>
Yoga remedies are therapeutic practices that align physical, mental, and spiritual energies with cosmic forces. Each planet and dosha can be harmonized through specific yoga techniques, making them practical and accessible for daily life.
<br/><br/>
 
 <b>Types of Yoga Remedies</b><br/>
<b> Planetary Asana Remedies</b><br/>
- Surya Namaskar (Sun Salutation) → Strengthens Sun, boosts vitality.<br/>
- Chandra Namaskar (Moon Salutation) → Calms Moon, enhances emotional balance.<br/>
- Shani Vajrasana (Diamond Pose) → Pacifies Saturn, builds patience.<br/>
<b> Pranayama Remedies  </b><br/>
- Kapalabhati → Clears Mars energy, removes aggression.<br/>
- Anulom Vilom (Alternate Nostril Breathing) → Balances Rahu/Ketu energies.<br/>
- Bhramari (Bee Breath) → Calms Mercury-related anxiety.<br/>
<b>Mudra Remedies</b> <br/>
- Surya Mudra → Increases Sun energy, improves metabolism.<br/>
- Buddhi Mudra → Enhances Mercury energy, sharpens intellect.<br/>
- Prithvi Mudra → Grounds Saturn energy, stabilizes emotions.<br/>  
- Varun Mudra → Balances Moon energy, enhances fluid balance.<br/>
 <b>Chakra Yoga Remedies</b><br/>
- Asanas and pranayama linked to chakras influenced by planets.<br/>
- Example: Heart-opening poses (Anahata chakra) for Moon balance.<br/><br/>

<b> Key Elements in Yoga Remedies</b> <br/>
- Posture: Correct alignment and steady hold of asanas.<br/>
- Breath: Conscious, rhythmic breathing to enhance energy flow.<br/>
- Focus: Mindful awareness of planetary energies during practice.<br/>
- Duration: Regular practice, ideally 20-30 minutes daily.<br/>
- Consistency: Daily practice is more effective than occasional intensity.<br/>
- Timing: Sunrise and sunset are ideal for planetary yoga remedies.<br/>
- Integration: Combine with mantra chanting or meditation for deeper impact.<br/>
- Personalization: Remedies should be adapted to one’s health and chart.<br/>
<br/>

  <b>How to Order Your Yoga Remedies</b><br/>
- Click Order Now<br/>
- Fill in your personal details and describe your issue <br/>
- Place your order and receive a customized Yoga Remedies for your needs<br/><br/>

<Container width maxWidth><section className="justify-between">
 
             
          <div className="text-[var(--background)] gap-10 p-5 rounded-md">
            <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
              <table className="">
                <tbody>
                    <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r bg-[var(--primary)]  border-[var(--primary)] w-[30%]">
                  Yoga Remedies For
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Price ($)/ (INR) </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Offer Price ($)/ (INR)</td>
                        <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Book Now</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[30%]">
                 Personalized Yoga Room 
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   $ 50/ INR 3100  </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">     $ 21 | INR 1500 </td>
                        <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >  <Link href="/remedies?type=yog"> <input
                      className="py-2 font-bold btnLink   disabled:bg-[var(--gray)]"
                      type="button" value="Book Now" /> </Link></td>
                  </tr>
                   
                </tbody>
              </table>
            </div>
          </div>
        </section>
           </Container>
</p>


    </Container>

    </section>
  )
}
export default yoga
