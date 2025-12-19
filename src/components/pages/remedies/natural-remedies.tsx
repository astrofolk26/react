
import Container from "@/components/layouts/Container";
import Link from "next/link"; // Import Link from next/link

const naturalR = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 '></section>
                
    <h2 className='title'><span>    Natural  </span> Remedies</h2>
      <p className='text-justify'>
       
 Natural remedies are traditional, plant-based or lifestyle approaches that can help with common ailments, often offering gentle, long-term support when used responsibly. They are not substitutes for medical care, but can complement it.

<br/><br/>
 <b>Here are some widely recognized remedies backed by traditional use and modern research:
 <br/> - Peppermint:</b> May ease irritable bowel syndrome (IBS), bloating, and headaches.<br/>
 <b>- Chamomile: </b>Known for calming effects, often used for sleep and anxiety.<br/>
 <b>- Ginger:</b> Helps with nausea, digestion, and inflammation.<br/>
 <b>- Lavender:</b> Promotes relaxation, reduces stress, and may aid sleep.<br/>
 <b>- Echinacea:</b> Traditionally used to support immunity and reduce cold symptoms.<br/>
 <b>- Turmeric (Curcumin): </b>Anti-inflammatory properties, often used for joint pain and overall wellness.<br/>
 <b>- Honey & Lemon:</b> Soothe sore throats and coughs.<br/>
 <b>- Garlic:</b> Supports heart health and immunity.<br/>
<br/>
<b>Benefits of Natural Remedies:</b><br/>
<b>- Holistic approach: </b> Treats body and mind together.<br/>
<b>- Fewer side effects:</b> Generally gentler than synthetic drugs.<br/>
<b>- Accessibility:</b> Many remedies are available at home or in local markets.<br/>
<b>- Preventive care:</b> Supports long-term wellness and resilience.<br/>

<br/>
<b>Precautions:</b><br/>
- Consult healthcare professionals before starting any new remedy, especially if you have existing health conditions or are on medication.<br/>
- Quality matters: Use high-quality, reputable sources for herbs and supplements.<br/>
- Start slowly: Monitor your body's response to new remedies.<br/>
<br/>
  
 
Natural remedies usually refer to herbs, diet, lifestyle practices, or holistic approaches (like turmeric for inflammation, ginger for digestion, meditation for mental clarity).
<br/><br/>
 <b>How to Order Your specific Natural Remedies</b><br/>
- Click Order Now<br/>
- Fill in your personal details and describe your issue<br/>
- Place your order and receive a Natural Remedies customized to your needs<br/><br/>

 <Container width maxWidth><section className="justify-between">
  
              
           <div className="text-[var(--background)] gap-10 p-5 rounded-md">
             <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
               <table className="">
                 <tbody>
                     <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r bg-[var(--primary)]  border-[var(--primary)] w-[30%]">
                   Natural Remedies For
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Price ($)/ (INR) </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Offer Price ($)/ (INR)</td>
                         <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Book Now</td>
                   </tr>
                   <tr className="border-b border-[var(--primary)]">
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[30%]">
                  Personalized Natural Remedies
                     </td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   $ 50/ INR 3100  </td>
                       <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">     $ 20 | INR 1500 </td>
                         <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >  <Link href="/remedies?type=nr"> <input
                       className="py-2 font-bold btnLink   disabled:bg-[var(--gray)]"
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
export default naturalR