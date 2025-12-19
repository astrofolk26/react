import Link from "next/link";
import Container from "@/components/layouts/Container";

const education = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
       <h2 className='title'><span> Astrological Factors for Education 
 </span> Forecast Report</h2>
 
         Choose the right path for your studies and ensure a successful future ahead. Find the best with education astrology and explore all about your passion, strength and interests.
<br/><br/>
       <b>Houses</b><br/>
 <b>•    2nd House →</b> Early learning, speech, memory.<br/>
<b>•     4th House →</b> Formal education, schooling, foundation of knowledge.<br/>
<b>•     5th House →</b> Higher studies, creativity, intelligence, academic success.<br/>
<b>•     9th House →</b> Advanced learning, philosophy, higher education, foreign studies.
<br/>
 <br/> 

<b>Planets<br/>
   •    Mercury →</b> Intellect, communication, analytical ability. Strong Mercury supports sharp learning.
<br/> 

<b>• 	Jupiter →</b>  Wisdom, guidance, higher education, spiritual knowledge.
<br/> 

<b>• 	Moon →</b> Mind, concentration, emotional stability for studies.
<br/> 

<b>• 	Saturn →</b>  Discipline, perseverance, long-term study (sometimes delays but ensures depth).


<br/><br/>
<b>Timing (Dasha & Transit)
</b><br/>•    Education progress often aligns with dashas of Mercury, Jupiter, or the 5th/9th house lords.
<br/>•    Jupiter’s transit over the 5th or 9th house often brings opportunities for higher studies.
<br/>•    Rahu in the 5th/9th can indicate unconventional or foreign education paths.

<br/><br/>
<b>What an “Education Forecast Report” Include<br/>
   •     Current Dasha Analysis –</b><br/> Which planetary period is active and how it influences studies.
<br/>
<b>•     House Strengths – </b><br/>Condition of 2nd, 4th, 5th, and 9th houses.
<br/>
<b>•     Planetary Support –</b><br/> Mercury and Jupiter’s role in learning.
<br/>
<b>•     Challenges –</b><br/> Saturn/Rahu/Ketu influences that may delay or complicate.
<br/>
<b>•     Guidance –</b><br/> Best field of study, best periods for exams, higher studies, or foreign education.
<br/>
<b>•     Remedies –</b><br/> Mantras, study routines, or spiritual practices to strengthen focus.
<br/>
<br/>

  Explore all of it now with <b>Education Forecast Report</b><br/>
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
                                <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[50%]">   $ 30/ INR 2500  </td>
      
                                   <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/reports?type=ea"> <input
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
export default education