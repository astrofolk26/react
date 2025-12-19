import Link from "next/link"; 
import Container from "@/components/layouts/Container";

const health = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
       <h2 className='title'><span> Health   </span> Report </h2>
 
       A "Health Report" can refer to many types of documents, ranging from a standard medical test result to a comprehensive astrological or holistic assessment.
        <br/><br/> 
        A Medical Astrology report, known as Iatromathematics in classical tradition, does not diagnose illnesses, but rather highlights inherent predispositions and vulnerabilities based on the natal chart. It typically details:
 <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border: "1px solid #ccc",
      }}
    >
      <thead style={{ backgroundColor: "#f2f2f2" }}>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Section</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Astrological Focus & Interpretation
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Constitutional Analysis
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Ascendant/Lagna: Indicates the overall vitality, physical structure,
            and general health tendencies.
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Determines the native's basic physical constitution and inherent
            strength.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            The Sixth House
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            6th House & Lord: Governs illness, acute disease, daily health
            habits, and diet.
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Highlights areas where illness is most likely to manifest and the
            nature of daily health challenges.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            The Eighth House
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            8th House & Lord: Governs chronic disease, surgeries, longevity, and
            regeneration.
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Indicates vulnerability to severe or long-lasting health issues.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            The Twelfth House
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            12th House & Lord: Governs hospitals, confinement, and chronic
            hidden ailments.
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Relates to conditions requiring hospitalization or diseases that are
            difficult to diagnose.
          </td>
        </tr>
        <tr>
          <td
            style={{ border: "1px solid #ccc", padding: "8px" }}
            rowSpan={3}
          >
            Planetary Afflictions
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Mars: Vulnerability to fevers, accidents, inflammation, and
            surgeries.
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Relates to acute, sudden, or inflammatory health events.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Saturn: Vulnerability to chronic, debilitating, or skeletal/dental
            issues, and poor circulation.
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Relates to long-term health challenges and structural weaknesses.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Moon: Governs fluids, digestion, and emotional health. Afflictions
            indicate issues with stress, digestion, or water retention.
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Relates to emotional health and systemic function.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Zodiac-Body Part Links
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Signs Ruling Body Parts: e.g., Aries rules the head, Taurus the
            throat, Gemini the lungs/arms, Virgo the digestive system.
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Pinpoints specific body parts most vulnerable based on where
            malefic planets are placed.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Remedies/Wellness
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Suggests remedies (herbs, diet, gemstone therapy, mantras) based on
            Ayurvedic concepts and planetary energies to strengthen weak areas.
          </td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>
            Provides proactive guidance for maintaining balance.
          </td>
        </tr>
      </tbody>
    </table>
<br/><br/>
        Explore all of it now with <b>Astrological Health Report Details (Medical Astrology)</b><br/>
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

                             <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/reports?type=hr"> <input
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
export default health