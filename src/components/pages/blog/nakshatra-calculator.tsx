
import Container from "@/components/layouts/Container";
import Link from "next/link"; // Import Link from next/link

const nakshatra = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 '></section>
                
    <h2 className='title'><span>     Nakshatra   </span> Calculation  </h2>
      <p className='text-justify'>
       

<b>How Nakshatra Calculation Works<br/>
Input needed: </b> Birth date, exact time, and place (to calculate local sidereal time).<br/>
<b> Step 1:</b> Compute the Moon’s longitude in the zodiac at that moment.<br/>
<b> Step 2:</b> Divide the zodiac (360°) into 27 equal parts of 13°20′ each.<br/>
<b> Step 3:</b> The segment in which the Moon falls determines the nakshatra.<br/>
<b> Example: </b> If the Moon is at 25° Taurus, that falls in Rohini Nakshatra.<br/><br/>
<b> Nakshatra Indexing Logic  </b><br/>

- Each nakshatra spans 13°20′ = 13.333…°. <br/>
<br/>
- Index 1 = Ashwini, Index 2 = Bharani, … up to 27 = Revati. <br/>
<br/>
<b> Implementation Options  </b><br/>
Since you’re a backend expert, you could: <br/>
- Use Swiss Ephemeris (swisseph) in PHP, Node.js, or Python to get the Moon’s longitude. <br/>
- Apply the division logic above to map longitude → nakshatra. <br/>
- Wrap it in an API for your Astroflok project so users can input birth details and instantly get their nakshatra.
<br/><br/>
This could be a foundational module for Astrofolk, enabling personalized remedies, rituals, and insights based on one’s nakshatra. You could even expand it to include nakshatra padas (quarters) for more granularity.
<br/><br/>
<b>The 27 Nakshatras in Vedic astrology</b> <br/>
One can divide Nakshatras into various categories, depending on their attributes, the planet that rules them, and much more.
<br/>
The 27 stars in astrology are:
<div className="text-[var(--background)] gap-10 p-5 rounded-md">
            <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      Ashwini Nakshatra
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Bharani Nakshatra</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Krittika Nakshatra</Link></td>
                        <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Rohini Nakshatra</Link></td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     <Link href="#">Mrigashira Nakshatra</Link>
                    </td>
                                <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">	Ardra Nakshatra</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Punarvasu Nakshatra</Link></td>
                        <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Pushya Nakshatra</Link></td>     </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     <Link href="/monthly-sagittarius">Ashlesha Nakshatra</Link>
                    </td>
                                 <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Magha Nakshatra</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">PurvaPhalguni Nakshatra</Link></td>
                        <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">UttaraPhalguni Nakshatra</Link></td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     <Link href="/monthly-sagittarius">Hasta Nakshatra</Link>
                    </td>
                                 <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Chitra Nakshatra</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Swati Nakshatra</Link></td>
                        <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Vishakha
                         Nakshatra</Link></td>
                  </tr>
                   <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     <Link href="/monthly-sagittarius">Anuradha Nakshatra</Link>
                    </td>
                                 <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Jyestha Nakshatra</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Moola/Mula Nakshatra</Link></td>
                        <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Poorvashada Nakshatra</Link></td>
                  </tr>
                     <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     <Link href="/monthly-sagittarius">Uttarashada Nakshatra</Link>
                    </td>
                                 <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Abhijit Nakshatra</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Dhanishta Nakshatra</Link></td>
                        <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Shatabhisha Nakshatra</Link></td>
                  </tr>
                  
                     <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     <Link href="/monthly-sagittarius">Purva Bhadrapada Nakshatra	</Link>
                    </td>
                                 <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Uttara Bhadrapada Nakshatra</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Revati Nakshatra</Link></td>
                        <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="#">Shravana Nakshatra</Link></td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
			






</p>


    </Container>

    </section>
  )
}
export default nakshatra
