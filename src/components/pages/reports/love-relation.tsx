
import Container from "@/components/layouts/Container";
import Link from "next/link"; 
const love = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
       <h2 className='title'><span> Love Relationships</span> Analysis Report</h2>
    
       The phrase “love‑relationShip” can mean different things depending on your context. Since you’re deeply engaged with Vedic astrology and building Astrofolk, I’ll frame it in a way that connects both the astrological perspective and the practical/technical side of how you might use this in your platform.

        <br/>In classical astrology, love relations are often studied through:

      <br/>    <br/> - 7th House → Marriage, partnerships, long‑term commitments.<br/>
- 5th House → Romance, attraction, emotional bonds.<br/>
- Venus → Planet of love, beauty, harmony.<br/>
- Moon → Emotional compatibility and nurturing.<br/>
- Nakshatras → Certain nakshatras (like Rohini, Swati, Revati) are considered favorable for love and attraction.<br/>
- Dasha/Transit → Timing of relationships often depends on Venus/Moon periods or Jupiter’s transit over the 7th house.<br/>
So, when someone asks about “love‑relation,” astrologers typically analyze these factors to see compatibility, timing, and challenges.<br/>


<br/>

If you want to add a Love & Relationship module to your site:<br/>
- Form Fields: Collect DOB, TOB, Place of Birth for both partners.<br/>
- Backend Logic:<br/>
- Calculate synastry (planetary overlays between charts).
- Check compatibility scores (e.g., Guna Milan in Vedic astrology).<br/>
- Highlight strengths (emotional, physical, spiritual) and challenges.<br/><br/>
{/* - Frontend UI:<br/>
{/* - A “Love Compatibility Report” card. 
- Dynamic charts showing Venus/Moon positions.<br/>
- Simple percentage or “compatibility meter” for easy user understanding.<br/> */}

  Explore all of it now with <b>Love Relationships Analysis Report</b><br/>
  <Container width maxWidth><section className="justify-between">
        
                    
                 <div className="text-[var(--background)] gap-10 p-5 rounded-md">
                   <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
                     <table className="">
                       <tbody>
                           <tr className="border-b border-[var(--primary)]">
                          
                           <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[50%]">   Report Price ($)/ (INR) </td>
                               <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[50%]">  Offer Price ($)/ (INR) </td>
                               <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[20%]">   Book Now</td>
                         </tr>
                         <tr className="border-b border-[var(--primary)]">
                        
                           <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[50%]">   $ 50/ INR 4100  </td>
                            <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[50%]">   $ 35/ INR 2900  </td>
  
                               <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/reports?type=lrr"> <input
                             className="font-bold btnLink   disabled:bg-[var(--gray)]"
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
export default love