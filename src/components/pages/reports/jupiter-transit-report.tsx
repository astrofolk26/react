import Link from "next/link";
import Container from "@/components/layouts/Container";

const jupiter = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
       <h2 className='title'><span> Jupiter Transit </span> Prediction Report</h2>

       Jupiter, the planet of wisdom, expansion, and dharma, will transit into Gemini on May 14, 2025, and remain there until June 1, 2026. This transit influences learning, communication, and collective growth.
       <br/> <b><br/>
Key Themes 
<br/> - Collective Influence:</b> Emphasis on education, technology, and spiritual discourse.
<br/><b>- Positive Effects:</b> Growth in intellectual pursuits, networking, and philosophical exploration.
<br/><b>- Challenges:</b> Over-expansion in ideas, scattered focus, and conflicts in belief systems.
<br/><br/><b>
♈ Aries</b><br/> 
- Opportunities: Gains through siblings, networking, and short travels. Strong focus on communication and writing.
<br/> - Challenges: Risk of scattered energy; need to prioritize learning.
<br/><b>♉ Taurus</b><br/> 
- Opportunities: Financial growth, new sources of income, and family stability.
<br/> - Challenges: Expenses may rise; balance between values and material pursuits is essential.
<br/><b>♊ Gemini</b><br/> 
- Opportunities: Major personal growth, confidence, and leadership. Spiritual awakening and self-discovery.
<br/> - Challenges: Overconfidence or overextension; stay grounded.
<br/><b>♋ Cancer </b><br/> 
- Opportunities: Inner growth, spiritual practices, and healing. Good time for meditation and retreats.
<br/> - Challenges: Hidden enemies or subconscious fears may surface.
<br/><b>♌ Leo</b><br/> 
- Opportunities: Expansion in social circles, friendships, and community involvement. Gains through networks.
<br/> - Challenges: Over-reliance on peers; ensure independence.
<br/><b>♍ Virgo</b><br/> 
- Opportunities: Career growth, recognition, and leadership roles. Strong professional expansion.
<br/> - Challenges: Work-life balance may be strained; avoid overwork.
<br/><b>♎ Libra</b><br/> 
- Opportunities: Higher education, travel, and spiritual exploration. Great time for philosophy and teaching.
<br/> - Challenges: Conflicts in belief systems; avoid dogmatism.
<br/><b>♏ Scorpio</b><br/> 
- Opportunities: Gains through inheritance, joint ventures, and deep transformation.
<br/> - Challenges: Emotional intensity; need to manage control issues.
<br/><b>♐ Sagittarius</b><br/> 
- Opportunities: Partnerships, marriage, and collaborations flourish. Strong focus on relationships.
<br/> - Challenges: Over-dependence on others; balance autonomy.
<br/><b>♑ Capricorn</b><br/> 
- Opportunities: Health improvements, disciplined routines, and career service roles.
<br/> - Challenges: Stress from responsibilities; avoid burnout.
<br/><b>♒ Aquarius</b><br/> 
- Opportunities: Creativity, romance, and children-related matters thrive. Great time for artistic pursuits.
<br/> - Challenges: Risk of indulgence; maintain focus.
<br/><b>♓ Pisces</b><br/> 
- Opportunities: Home, family, and real estate matters prosper. Emotional grounding and domestic harmony.
<br/> - Challenges: Family conflicts may arise; practice patience.
<br/><br/>
<b>🕉 Remedies & Guidance</b><br/> 
- Chanting “Om Gurave Namah” on Thursdays.<br/> 
- Offering yellow flowers to Jupiter.<br/> 
- Practicing generosity and teaching to align with Jupiter’s dharmic energy.<br/> 


<br/>

  Explore all of it now with <b>Jupiter Transit Prediction Report</b><br/><input
                      className="font-bold btnLink w-full flex justify-center disabled:bg-[var(--gray)]"
                      type="button"
                      value="Order Now"
                      
                      
                    /> 



    </Container>
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

                             <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/reports?type=jt"> <input
                           className="font-bold btnLink   disabled:bg-[var(--gray)]"
                           type="button" value="Book Now" /> </Link></td>
                       </tr>
             
                     </tbody>
                   </table>
                 </div>
               </div>
             </section>
                </Container>
                      
    </section>
  )
}
export default jupiter