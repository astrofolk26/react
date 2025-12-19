
import Container from "@/components/layouts/Container";
import Link from "next/link"; // Import Link from next/link

const meditation = () => {
    return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 '></section>
                
    <h2 className='title'><span>    Meditation  </span> Remedies </h2>
      <p className='text-justify'>
       
Meditation remedies are inner practices designed to balance planetary influences and karmic patterns through focused awareness. Unlike external rituals, they rely on mental discipline, visualization, and breath control to create harmony.
<br/><br/>
 
 <b>Types of Meditation Remedies</b><br/>
<b> Planetary Visualization Meditation</b><br/>
- Visualizing the planet’s light (e.g., golden Sun, cool Moon, blue Saturn).<br/>
- Helps strengthen benefic planets and pacify malefic ones.<br/>
<b>Chakra Alignment Meditation</b><br/>
- Linking planets to chakras (e.g., Sun → Manipura, Moon → Anahata).<br/>
- Balances energy centers and removes blockages.<br/>
<b>Breath-Based Remedies (Pranayama)<br/></b>
- Rhythmic breathing to calm planetary afflictions.<br/>
- Example: Alternate nostril breathing for Rahu/Ketu balance.<br/>
<b>Mantra-Meditation Fusion</b> <br/>
- Chanting planetary mantras silently while meditating. <br/>
- Deepens vibrational impact and mental focus.<br/>
<b>Mindfulness Remedies </b> <br/>
- Observing thoughts and emotions without attachment.<br/>
- Especially useful for Saturn, Rahu, and Ketu afflictions.<br/><br/>
 <b>Key Elements in Meditation Remedies <br/>
- Posture:</b> Sitting steady, spine erect, relaxed body. <br/>
<b>- Breath:</b> Slow, rhythmic, conscious breathing. <br/>
<b>- Focus: </b>Planetary symbol, chakra, mantra, or visualization. <br/>
<b>- Duration:</b> 15–30 minutes daily for effectiveness. <br/>
<b>- Consistency:</b> Regular practice is more powerful than occasional intensity. <br/>


<br/>

  <b>How to Order Your Meditation Remedies</b><br/>
- Click Order Now<br/>
- Fill in your personal details and describe your issue with Meditation Remedies <br/>
- Place your order and receive a customized Meditation Remedies for your needs<br/><br/>

<Container width maxWidth><section className="justify-between">
 
             
          <div className="text-[var(--background)] gap-10 p-5 rounded-md">
            <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
              <table className="">
                <tbody>
                    <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r bg-[var(--primary)]  border-[var(--primary)] w-[30%]">
                  Meditation Remedies For
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Price ($)/ (INR) </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Offer Price ($)/ (INR)</td>
                        <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Book Now</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[30%]">
                 Personalized Meditation Room
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   $ 50/ INR 4100  </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">     $ 30 | INR 2500 </td>
                        <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >  <Link href="/remedies?type=mr"> <input
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
export default meditation
