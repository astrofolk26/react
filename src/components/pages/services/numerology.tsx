
import Container from "@/components/layouts/Container";
import Link from "next/link" ; // Import Link from next/link

const numerology = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 text-justify'></section>
                
    <h2 className='title'><span>     Numerology    </span> Service  </h2>
  
 Numerology services help people understand personality, career, relationships, and life events through the study of numbers derived from names and birth dates.
 <br/><br/><b>What Numerology Services Offer<br/>
- Personal Consultations:</b> Analysis of your name and birth date to reveal strengths, challenges, and life path.
<br/><b>- Name Corrections: </b> Suggesting spelling changes to align with favorable vibrations.
<br/><b>- Career Guidance:</b> Identifying suitable professions based on numerological charts.
<br/><b>- Relationship Compatibility:</b> Matching numbers for harmony in marriage or partnerships.
<br/><b>- Remedies: </b>Using colors, mantras, or lucky numbers to balance energies.
<br/><b>- Business Numerology:</b> Choosing auspicious names for companies, products, or brands.
<br/><br/>
<b>Why People Use Numerology</b><br/>
- To choose auspicious names for children, businesses, or projects.<br/>
- To time important events (marriage, investments, travel).<br/>
- To gain self-awareness and improve decision-making.<br/>
- To apply remedies for challenges indicated by numbers.<br/>
<br/>
<b>Understanding Your Numbers</b><br/>
- Number 1: Leadership, independence, ambition<br/>
- Number 2: Balance, harmony, partnership<br/>
- Number 3: Creativity, communication, expression<br/>
- Number 4: Stability, foundation, practicality<br/>
- Number 5: Freedom, adaptability, change<br/>
- Number 6: Nurturing, responsibility, care<br/>
- Number 7: Spirituality, analysis, wisdom<br/>
- Number 8: Power, success, material abundance<br/>
- Number 9: Completion, compassion, universal love<br/>
<br/>

   <br/> <b>How to Order for Numerology Service</b><br/>
- Click Order Now<br/>
- Fill in your personal and describe your issue <br/>
- Place your order and receive a customized report based on your needs<br/><br/>
<Container width maxWidth><section className="justify-between">
 
             
          <div className="text-[var(--background)] gap-10 p-5 rounded-md">
            <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
              <table className="">
                <tbody>
                    <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r bg-[var(--primary)]  border-[var(--primary)] w-[30%]">
                  Meditation Remedies For
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Price ($)/ (INR) </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Offer Price ($)/ (INR)</td>
                        <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Book Now</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[30%]">
                 Personalized Numerology Report
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   $ 50/ INR 3100  </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">     $ 30 | INR 2100 </td>
                        <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >  <Link href="/reports?type=num"> <input
                      className="py-2 font-bold btnLink   disabled:bg-[var(--gray)]"
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
export default numerology
