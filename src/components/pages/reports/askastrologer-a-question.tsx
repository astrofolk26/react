
import Container from "@/components/layouts/Container";
import Link from "next/link";
const askA = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 '></section>
                
       <h2 className='title'><span> Ask an Astrologer  </span> Question Report</h2>
      <p className='text-justify'>
       
 A personalized astrology report service—something like “Ask an Astrologer a Question” where you submit one specific concern (career, relationships, finances, health, spiritual growth, etc.) and receive a focused astrological answer based on your birth chart
<br/>
 <br/> 
To make this kind of report truly precise, here’s what is usually required:<br/>
<b>- Your birth details:</b> <br/>date, time, and place of birth (these anchor the chart).<br/>
<b>- Your single concern:</b><br/> a clearly defined question (e.g., “Will my career improve if I switch jobs in 2026?” or “Is this relationship aligned for long-term stability?”).<br/>
<b>- Astrological method:</b><br/> often horary astrology (answering a question based on the moment it’s asked) or natal chart analysis (using your birth chart to see trends).<br/>
🔑 The key is specificity. A vague question like “Tell me about my future” won’t yield a sharp answer. But a focused one—“Should I invest in property within the next year?” <br/>—can be analyzed with planetary positions, transits, and houses to give a clear direction
 <br/>
⚖️ you might appreciate structuring such a report like this:<br/>
<b>- Restate the Question </b> <br/> – make it precise.<br/>
<b>- Chart Analysis – </b> <br/>highlight relevant houses, planets, and transits.<br/>
<b>- Interpretation – </b> <br/>connect the chart to the concern.<br/>
<b>- Practical Guidance – </b> <br/>a takeaway action or timing suggestion.<br/>
<br/>

  Explore all of it now with <b>Ask an Astrologer a Question Report</b><br/>
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
                        
                           <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[50%]">   $ 50 | INR 4100  </td>
                            <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[50%]">   $ 21 | INR 1600 </td>
  
                               <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/reports?type=aq"> <input
                             className="font-bold btnLink   disabled:bg-[var(--gray)]"
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
export default askA