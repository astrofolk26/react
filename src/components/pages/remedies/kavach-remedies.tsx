
import Container from "@/components/layouts/Container";
import Link from "next/link"; // Import Link from next/link

const kavach = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 '></section>
                
    <h2 className='title'><span>  Energized Kavach  </span> Remedies </h2>
      <p className='text-justify'>
       
 Kavach remedies are protective Vedic amulets or spiritual tools designed to balance planetary energies, shield against negative influences, and bring peace, prosperity, and health. They are often made with Rudraksha beads, yantras, or sacred metals, and are energized through mantras and rituals.
<br/><br/>
 <b>What Are Kavach Remedies?</b><br/>
 -  Kavach means “armor” or “shield.” In Vedic tradition, it refers to spiritual protection.
<br/>To harmonize planetary vibrations, reduce karmic obstacles, and invite divine blessings.<br/>
 Rudraksha malas, yantra pendants, gemstone talismans, or mantra-infused amulets.<br/><br/>
<b>Types of Kavach Remedies<br/>
Rudraksha Kavach - </b> Made of sacred Rudraksha beads - Health, stress relief, spiritual growth<br/>
<b>Mangal Kavach - </b> For Mars-related issues (Manglik dosha) - Reduces aggression, stabilizes relationships<br/>
<b>Shani Kavach - </b>For Saturn’s influence - Protection during Sade-Sati, career stability<br/>
<b> Durga Kavach - </b>Dedicated to Goddess Durga - Shields against negative energies<br/>
<b>Hanuman Kavach - </b> Linked to Lord Hanuman - Courage, protection, devotion<br/>
<b>Baglamukhi Kavach - </b> Goddess Baglamukhi - Victory over enemies, removal of obstacles<br/>
<br/>
<b>Benefits of Wearing Kavach<br/>
Spiritual Protection:</b> Acts as a shield against negative energies and evil influences.<br/>
<b>Planetary Balance:</b> Remedies malefic effects of planets in one’s horoscope.<br/>
<b>Health & Prosperity:</b> Promotes vitality, confidence, and financial stability.<br/>
<b>Mental Peace:</b> Reduces stress, fear, and anxiety.


<br/>
<br/>

  <b>How to Order Your Kavach</b><br/>
- Click Book Now<br/>
- Fill in your personal details and describe your issue <br/>
- Place your order and receive an Energized Kavach customized to your needs<br/><br/>
 <Container width maxWidth><section className="justify-between">
 
             
          <div className="text-[var(--background)] gap-10 p-5 rounded-md">
            <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
              <table className="">
                <tbody>
                    <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r bg-[var(--primary)]  border-[var(--primary)] w-[30%]">
                   For
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Price ($) | (INR) </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Offer Price ($) | (INR)</td>
                        <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Book Now</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[30%]">
                Hanuman Energized Kavach
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   $ 70 | INR 5100  </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">     $ 51 | INR 2100 </td>
                        <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >  <Link href="/remedies?type=hk"> <input
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
export default kavach