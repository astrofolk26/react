import Container from "@/components/layouts/Container";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <section className="padding">
      <Container width>
       
                 <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                   <Image
                     src="/assets/images/security/awaking.jpg"
                     alt="logo"
                     width={450}
                     height={500}
                     className=""
                   />
                   <div className=''>
                     <h2 className='title'><span>Astrological    </span> Awakening </h2>
         <p className='text-justify'>
           New Beginnings Astrological Awakening a wonderful phrase that encapsulates the experience of a transformative period in one's life, often triggered...
<br /> New Beginnings Astrological Awakening really does sound like the title of a chapter in someone’s life story — a phrase that carries both poetic resonance and spiritual depth. It suggests a turning point where cosmic influences align with inner readiness, creating a gateway for transformation.

<br></br>




</p> </div>
           </section>
      </Container>
 <Container width maxWidth>
        <br /><br /> New Beginnings → Symbolizes fresh starts, cycles resetting, and opportunities to step into uncharted territory.
<br /> Astrological → Points to celestial triggers: planetary transits, eclipses, or nakshatra shifts that act as catalysts.
<br /> Awakening → The conscious realization of growth, wisdom, or spiritual clarity that emerges from these changes.
<br /><br /><b> When This Phrase Comes Alive</b><br />
A major planetary transit (like Saturn moving into a new sign) often marks endings and beginnings.
<br /> Eclipses can awaken hidden truths, forcing transformation.
<br /> Personal milestones (career shifts, relationships, spiritual practices) often coincide with astrological “windows” of awakening.
<br /><br /><b> The Transformative Experience</b>

<br /> Inner Realization: A sudden clarity about life purpose or direction.
<br /> Outer Change: Events that push you toward growth — sometimes challenging, but ultimately liberating.
<br /> Integration: The blending of ancient wisdom (astrology) with modern awareness, making the awakening practical and lived.


<br /><br />
        
<Container width maxWidth><section className="justify-between">
  
              
           <div className="text-[var(--background)] gap-10 p-5 rounded-md">
             <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
               <table className="">
                 <tbody>
                     <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r bg-[var(--primary)]  border-[var(--primary)] w-[25%]">
Reports / Remedies
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[20%]">   Price ($) | (INR) </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[35%]"> Offer Price ($) | (INR)</td>
                         <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[20%]">   Book Now</td>
                   </tr>
                   <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      Life Together Analysis 
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 50 | INR 4100  </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]"> $ 35/ INR 2900</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="/reports?type=llp"> <input
                       className="font-bold btnLink   disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr>
                    <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      Live Astro Counselling
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   - </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 15 / INR 1100</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >   <Link href="/order?type=c1"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr>
                   <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     Love Relationships Analysis
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 50/ INR 4100  </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 35/ INR 2900</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >   <Link href="/reports?type=lrr"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr>
                   {/* <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      Career Forecast Report
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 50 | INR 4100  </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 35/ INR 2900</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="/reports?type=rkt"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr> */}
 
 <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      Yearly Prediction
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 50 | INR 4100 </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 35/ INR 3100</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="pyp-order"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr>
                    {/* <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      Health Report
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 50 | INR 4100 </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 35/ INR 2900</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="/reports?type=hr"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr> */}
                     <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     Natural Remedies
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 50 | INR 3100 </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 20 | INR 1500 </td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="/remedies?type=nr"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr>
                     {/* <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     Mantra Remedies
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 241 | INR 15000 </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 201 | INR 12000</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="/remedies?type=ms"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr> */}
                     <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      Rudrabhishek Pooja
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 251 | INR 15000 </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 201/ INR 12000</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="/rudrabhishekpooja"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr>
                     <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      Planetary Yantras
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 70 | INR 5100 </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 51/ INR 2100</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="/yantras-remedies"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr>
                     {/* <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
Manglik Shanti Pooja (Worship) Remedies
                     </td>
                                          <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 241 | INR 15000 </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 201 | INR 12000</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="/remedies?type=ms"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
                       type="button" value="Book Now" /> </Link></td>
                   </tr> */}
                     <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      Personalized Meditation Room
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[20%]">   $ 50 | INR 4100 </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[35%]">  $ 35/ INR 2100</td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }}>   <Link href="/remedies?type=mr"> <input
                       className="font-bold btnLink  flex justify-center disabled:bg-[var(--gray)]"
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
  );
};

export default page;
