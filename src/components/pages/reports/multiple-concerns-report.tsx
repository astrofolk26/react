
import Container from "@/components/layouts/Container";
import Link from "next/link"; 

const child = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
       <h2 className='title'><span> Multiple-Concerns </span> Report</h2>
       
 In Vedic astrology, childbirth prediction is usually studied through a combination of the 5th house, Jupiter, and the Moon, along with specific planetary periods (dasha) and transits. Here’s how astrologers typically approach it:
<br/>
 <br/> 

<b>Introduction </b> <br/>
• 	Restates the person’s birth details (date, time, place).<br/>
• 	Outlines the scope: career, health, relationships, finances, spiritual growth, etc.
<br/>
<b>House-by-House Analysis</b><br/> 
<b>• 	1st House (Self) →</b><br/>  personality, vitality.<br/> 
<b>• 	2nd House (Wealth) →</b><br/>  finances, speech, family.<br/> 
<b>• 	5th House (Children) → </b><br/> progeny, creativity, education.<br/> 
<b>• 	7th House (Relationships) → </b><br/> marriage, partnerships.<br/> 
<b>• 	10th House (Career) → </b><br/> profession, achievements.<br/> 
<b>• 	12th House (Spirituality) →</b><br/>  liberation, foreign travel.<br/> <br/> 
<b>- Planetary Strengths</b>
<br/>
•   Jupiter → wisdom, children, expansion.<br/>
• 	Saturn → discipline, delays, karmic lessons.<br/>
• 	Venus → love, marriage, comforts.<br/>
• 	Mercury → communication, intellect, business.<br/>
<br/>

<b>- Dasha & Antardasha</b><br/>
•    Current planetary period (Mahadasha) and sub-period (Antardasha).<br/>
•    How they influence multiple areas simultaneously
<br/><br/>
<b>- Transits (Gochar)
</b><br/>
•    Jupiter and Saturn transits → long-term impact.<br/>
•    Rahu/Ketu transits → karmic shifts.<br/><br/>
<b>- Concern-Specific Insights</b><br/>
•    Career → timing of promotions, job changes.<br/>
•    Finance → savings, investments, property.<br/>
•    Relationships → marriage prospects, harmony.<br/>
•    Children → childbirth timing, education.<br/>
•    Health → vitality, stress periods.<br/>
•    Spirituality → meditation, dharma, karmic lessons.<br/>
<br/><b>Remedies & Guidance</b><br/>
•    Mantras, poojas, fasting days.<br/>
•    Gemstone recommendations (if chart supports).<br/>
•    Practical timing advice (e.g., “best period for career change after Jupiter transit in 2026”).

<br/><br/>

  Explore all of it now with <b>Multiple-Concerns Report</b><br/>
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
  
                               <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/reports?type=mc"> <input
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
export default child