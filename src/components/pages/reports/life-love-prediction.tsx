
import Container from "@/components/layouts/Container";
import Link from "next/link"; 
const love = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
       <h2 className='title'><span> Life Together Analysis</span> Prediction Report</h2>
  
       A Life Together Analysis in astrology is essentially a compatibility and relationship forecast that looks at how two people’s charts interact

        <br/>The goal of this report is not to offer absolute certainties, but rather to reveal the inherent potential, major life themes, and probable timing of significant events throughout an individual's lifetime, using planetary influences as a guide.
      <br/>    <br/> <b>Birth Chart Comparison (Synastry)
            <br/> - Moon Sign Compatibility →</b> emotional harmony and day-to-day bonding.<br/>
<b>- Ascendant (Lagna) → </b>personality match and lifestyle alignment.<br/>
<b>- Venus & Mars →</b> attraction, romance, passion balance.<br/>
<b>- Jupiter →</b> stability, blessings, and long-term growth in marriage.

            <br/><br/>

     <b>
House Connections  <br/> - 7th House (Marriage) →</b> strength and mutual aspects between partners’ 7th houses.
<br/>

     <b>- 5th House (Romance) → </b>love, affection, and creative bonding.
<br/>

     <b>- 11th House (Friendship) → </b>companionship and shared goals.

<br/>
<br/>
<b>
Planetary Aspects</b><br/>
• 	Benefic aspects (Jupiter, Venus) → harmony and support.<br/>
• 	Malefic aspects (Saturn, Rahu, Ketu) → challenges, delays, karmic lessons.<br/>
<br/><b>    Dasha & Transit Timing</b>

<br/>
- Marriage or relationship milestones often occur during Venus/Jupiter dashas.<br/>
- Jupiter’s transit over the 7th or 11th house can bring marriage opportunities.<br/>
- Saturn’s transit may test commitment but also strengthen bonds if endured.<br/>

<br/>
<b>Composite Chart (Optional)</b><br/>
- A combined chart showing the “relationship as an entity.”<br/>
- Reveals shared destiny, strengths, and challenges.<br/>

<br/>
<b>What a “Life Together Report” Could Include<br/>
- Compatibility Overview – </b>emotional, physical, intellectual, spiritual.<br/>
<b>- Strengths –</b> areas of harmony (shared values, attraction, support).<br/>
<b>- Challenges –</b> possible friction points (communication, timing, family).<br/>
<b>- Timing Indicators –</b> favorable periods for marriage, children, or major life events.<br/>
<b>- Guidance – </b>remedies, rituals, or practices to strengthen the bond.

<br/>this could be a premium module where users enter both partners’ birth details, and the backend generates a structured “Life Together Analysis” report. It would be especially useful for marriage matching, relationship counseling, or spiritual guidance.
<br/><br/> 
  Explore all of it now with <b>Life Together Analysis Report</b><br/>
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
  
                               <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/reports?type=llp"> <input
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