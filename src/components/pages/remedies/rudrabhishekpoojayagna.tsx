
import Container from "@/components/layouts/Container";
import Link from "next/link"; 
const rudra = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 '></section>
                
    <h2 className='title'><span>    Rudrabhishek Pooja  </span> & Yagna </h2>
      <p className='text-justify'>
       
 Rudrabhishek is a sacred Vedic ritual dedicated to Lord Shiva, performed by bathing the Shivling with holy offerings while chanting Sri Rudram and Chamakam mantras.
<br/>- Yagna (fire ritual) is often combined with Rudrabhishek, where offerings are made into the sacred fire to invoke divine blessings
<br/><br/>
 <b>Ritual Details:</b><br/>
 - The ritual involves the use of water, milk, honey, ghee, and other sacred substances to bathe the Shivling.<br/>
 <br/>- Chanting of Sri Rudram and Chamakam mantras is central to the ritual, invoking Lord Shiva's blessings for peace, prosperity, and spiritual growth.<br/>
 <br/> <b>- Offerings on Shivling:</b> Water, milk, honey, ghee, curd, sugar, and sacred herbs.<br/>
<b>- Sacred Leaves & Flowers:</b> Bilva (Bel) leaves, lotus, and marigolds.<br/>
<b>- Chanting:</b> Recitation of Rudram from the Yajurveda, invoking Lord Shiva’s 11 Rudra forms.<br/>
<b>- Fire Ritual (Yagna):</b> Priests offer ghee, grains, and herbs into the fire while chanting mantras.<br/>
<b>- Completion:</b> Aarti and distribution of prasad to devotees.
<br/>
<br/>
<b>Benefits of Rudrabhishek:</b><br/>
<b>• 	Spiritual Cleansing:</b> Removes negativity and purifies karmas.<br/>
<b>• 	Health & Prosperity:</b> Invokes blessings for well-being and abundance.<br/>
<b>• 	Protection:</b> Shields devotees from obstacles and misfortunes.<br/>
<b>• 	Liberation:</b> Helps progress toward moksha (spiritual freedom). <br/>
<br/>
<b> Auspicious Times
<br/>
•  Mahashivratri (Feb 15, 2026): </b>The most powerful day for Rudrabhishek.<br/>
<b>•  Shravan Month (July–August):</b> Highly favorable for Shiva worship.<br/>
<b>•  Mondays:</b> Traditionally dedicated to Lord Shiva.<br/><br/>
Rudrabhishek is performed in temples across India (Kashi Vishwanath, Trimbakeshwar, Somnath) and globally through online ceremonies. Many communities now allow devotees to book Rudrabhishek online, submit their sankalpa (intentions), and join via livestream.
<br/><br/>
  <b>How to Order Your ceremonies</b><br/>
- Click Order Now<br/>
- Fill in your personal details and describe your issue with ceremony name<br/>
- Place your order and join worship, making it possible to participate in auspicious rituals from anywhere in the world.<br/><br/>

<Container width maxWidth><section className="justify-between">
 
             
          <div className="text-[var(--background)] gap-10 p-5 rounded-md">
            <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
              <table className="">
                <tbody>
                    <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r bg-[var(--primary)]  border-[var(--primary)] w-[30%]">
                  Pooja (Worship)
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Price ($)/ (INR) </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Offer Price ($)/ (INR)</td>
                        <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Book Now</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[30%]">
                    Vedic ceremonies Rudrabhishek Pooja & Yagna 
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   $ 50/ INR 4100 FOR ONE </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">     $ 35 | INR 2800 FOR ONE </td>
                        <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >  <Link href="online"> <input
                      className="py-2 font-bold btnLink   disabled:bg-[var(--gray)]"
                      type="button" value="Book Now" /> </Link></td>

                  </tr>
                    <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[30%]">
                 Personalized Rudrabhishek Pooja & Yagna 
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   $ 251/ INR 15000  </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">     $ 201 | INR 12000 </td>
                        <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >  <Link href="/remedies?type=prp"> <input
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
export default rudra