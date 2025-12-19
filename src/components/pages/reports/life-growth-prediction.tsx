import Link from "next/link"; 
import Container from "@/components/layouts/Container";

const growth = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
       <h2 className='title'><span> Life Growth  </span> Prediction Report</h2>
  
       
 “Life-growth-prediction” could mean a few different things depending on the context you’re aiming for:<br/>
 <br/> 
<b>- Astrological angle:</b> <br/>In Vedic astrology, life growth prediction often refers to analyzing planetary positions, dashas (time periods), and transits to forecast phases of prosperity, challenges, or spiritual progress. For example, Jupiter’s transit is often linked to expansion and growth in career, family, or wisdom.<br/>
<b>- Personal development angle:</b><br/> It could also mean predicting how someone’s skills, career, or relationships will evolve over time, using structured frameworks like goal-setting, milestone tracking, or even data-driven models.<br/>
<b>- Philosophical angle:</b><br/> Some traditions see “life growth” less as prediction and more as guidance—mapping tendencies, karmic lessons, and opportunities for self-realization rather than fixed outcomes.<br/>
To make this practical, could you clarify what direction you’d like me to take? For example: <br/>
<br/>
- Do you want me to explain how astrologers calculate life-growth predictions (dashas, transits, yogas)?
<br/>
- Or would you like a conceptual framework for presenting life-growth predictions? <br/>
- Or are you asking for a philosophical exploration of what “life growth” means in human terms?
<br/>
<br/>
  Explore all of it now with <b>Life Growth Prediction Report</b><br/><Container width maxWidth><section className="justify-between">
          
                      
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
    
                                 <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/reports?type=lgp"> <input
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
export default growth