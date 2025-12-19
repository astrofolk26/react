import Link from "next/link";
import Container from "@/components/layouts/Container";

const child = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
       <h2 className='title'><span> Child Birth  </span> Prediction  Report</h2>

       
 In Vedic astrology, childbirth prediction is usually studied through a combination of the 5th house, Jupiter, and the Moon, along with specific planetary periods (dasha) and transits. Here’s how astrologers typically approach it:
<br/>
 <br/> 

<b>🔑 Key Astrological Factors<br/>- 5th House (Putra Bhava)

</b> <br/>- Represents children, creativity, and progeny. <br/>
- The strength of the 5th house and its lord is crucial.
<br/>
<b>- Jupiter (Guru)
</b><br/> - Natural significator of children and expansion.<br/>
- A strong, well-placed Jupiter supports childbirth.
<br/>
<b>- Moon</b><br/>- Indicates fertility and emotional nurturing.<br/>
- Its placement and aspects influence timing and ease of conception.<br/>
<b>- Dasha & Antardasha (Planetary Periods)</b><br/>
- Childbirth often occurs during the dasha/antardasha of the 5th lord, Jupiter, or planets connected to the 5th house.<br/>
<b>- Transit (Gochar)</b><br/>
- Favorable transits of Jupiter (especially over the 5th or 9th house) often bring opportunities for childbirth.<br/>
<br/><b>🧭 Typical Indicators</b><br/>
- Strong 5th house + benefic Jupiter → higher chances of childbirth.<br/>
- Malefic influences (Saturn, Rahu, Ketu) may delay or complicate.<br/>
- Timing is often seen when Jupiter transits key houses or during supportive dashas.
<br/><br/>

  Explore all of it now with <b>Child Birth Report</b><br/>

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
    
                                 <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/reports?type=cb"> <input
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