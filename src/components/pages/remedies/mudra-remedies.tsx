import Link from "next/link";
import Container from "@/components/layouts/Container";

const mudra = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
    <h2 className='title'><span>    Mudra  </span> Remedies </h2>
     
       
Mudra Remedies, which are subtle yet powerful hand gestures used in Yoga and Vedic traditions to channel energy, balance planetary influences, and heal physical/mental imbalances.
<br/>Mudras are symbolic hand positions that redirect prana (life force) within the body. Each mudra corresponds to an element (fire, water, earth, air, space) and can be applied as a remedy for planetary afflictions, doshas, or health concerns.

<br/><br/>
 
 <b>Types of Mudra Remedies</b><br/>
<b> Surya Mudra (Fire Element)</b><br/>
- Lowers Kapha, boosts metabolism, strengthens Sun energy.<br/>
- Remedy for weak Sun (low confidence, vitality).<br/>
<b> Prithvi Mudra (Earth Element)</b><br/>
- Increases stability, patience, and Saturn’s grounding energy.<br/>
- Remedy for Saturn afflictions, anxiety, lack of focus.<br/>
<b> Varun Mudra (Water Element)</b><br/>
- Enhances Moon energy, balances fluids, improves emotional harmony.<br/>
- Remedy for Moon afflictions, stress, dehydration.<br/>
<b> Gyan Mudra (Air Element)</b><br/>
- Improves Mercury energy, intellect, and concentration.<br/>
- Remedy for weak Mercury, confusion, poor memory.<br/>
<b>Apan Mudra (Detoxification)</b><br/>
- Purifies body, strengthens Venus energy, aids elimination.<br/>
- Remedy for Venus afflictions, reproductive health issues.<br/>
<b>Shunya Mudra (Space Element)</b><br/>
- Balances ether, reduces ear problems, pacifies Rahu/Ketu.<br/>
- Remedy for karmic confusion, illusions, instability.<br/>
<br/>
<b> Planetary Mudras</b><br/>
- Surya Mudra → Increases Sun energy, improves metabolism.<br/>
- Chandra Mudra → Calms Moon energy, enhances emotional balance.<br/>   
- Buddhi Mudra → Enhances Mercury energy, sharpens intellect.<br/>
- Prithvi Mudra → Grounds Saturn energy, stabilizes emotions.<br/>  
- Varun Mudra → Balances Moon energy, enhances fluid balance.<br/>
    <b>Elemental Mudras</b><br/>
- Agni Mudra (Fire) → Boosts energy, digestion, and willpower.<br/>
- Jala Mudra (Water) → Enhances fluid balance, emotional stability.<br/>
- Prithvi Mudra (Earth) → Increases strength, stability, and grounding.<br/>
- Vayu Mudra (Air) → Alleviates anxiety, improves circulation.<br/>
- Akasha Mudra (Space) → Promotes mental clarity, spiritual connection.<br/><br/>
    <b> Key Elements in Mudra Remedies</b> <br/>    

- Posture: Sit comfortably with a straight spine.<br/>  
- Breath: Deep, rhythmic breathing to enhance energy flow.<br/>
- Duration: Hold mudras for 15-30 minutes daily.<br/>

<br/>

  <b>How to Order Your Mudra Remedies</b><br/>
- Click Order Now<br/>
- Fill in your personal details and describe your issue with Mudra Remedies <br/>
- Place your order and receive a customized Mudra Remedies for your needs<br/><br/>

<Container width maxWidth><section className="justify-between">
 
             
          <div className="text-[var(--background)] gap-10 p-5 rounded-md">
            <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
              <table className="">
                <tbody>
                    <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r bg-[var(--primary)]  border-[var(--primary)] w-[30%]">
                  Mudra Remedies For
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Price ($)/ (INR) </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Offer Price ($)/ (INR)</td>
                        <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Book Now</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[30%]">
                 Personalized Mudra Room 
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   $ 50/ INR 3100  </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">     $ 25 | INR 2100 </td>
                        <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >  <Link href="/remedies?type=mu"> <input
                      className="py-2 font-bold btnLink   disabled:bg-[var(--gray)]"
                      type="button" value="Book Now" /> </Link></td>
                  </tr>
                   
                </tbody>
              </table>
            </div>
          </div>
        </section>
           </Container>



    </Container>

    </section>
  )
}
export default mudra
