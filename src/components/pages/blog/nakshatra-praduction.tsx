
import Container from "@/components/layouts/Container";
import Link from "next/link"; // Import Link from next/link

const nakshatraP = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 '></section>
                
    <h2 className='title'><span>     Nakshatra   </span> Prediction  </h2>
      <p className='text-justify'>
       

<b>Total Nakshatras: </b>27 (sometimes 28 if Abhijit is included)<br/>
<b>Span: </b> Each nakshatra covers 13°20′ of the zodiac.<br/>
<b>Grouping:</b> Divided into 3 categories based on the guna (quality):<br/>
<b>Sattva (Harmony)</b><br/>
<b>Rajas (Activity) </b><br/>
<b>Tamas (Inertia)</b><br/>
<br/>
Each nakshatra is “produced” or defined by:
<br/><b> Ruling Planet (Graha):</b> Determines the nakshatra’s energy.
<br/><b> Deity (Adhidevata):</b> Mythological archetype guiding its symbolism.
<br/><b> Symbol:</b> Visual or material representation (e.g., Ashwini = horse).
<br/><b> Shakti (Power): </b>The core ability of the nakshatra (e.g., Rohini = growth).
<br/><b> Padas (Quarters):</b> Each nakshatra has 4 padas (3°20′ each), linking to specific Navamsa signs.
<br/><br/>
 Functional Prediction in Astrology
<br/><b>Birth Chart Analysis: </b> Nakshatra of Moon, Ascendant, and planets defines personality and destiny.
<br/><b>Dasha System:</b>  Vimshottari Dasha is nakshatra-based, starting from the Moon’s nakshatra at birth.
<br/><b>Compatibility:</b>  Nakshatra matching is central in marriage astrology.
<br/><b> Remedies:</b>  Specific rituals, mantras, or yagnas are prescribed based on nakshatra influences.
<br/><br/>
<br/><b> Personality Traits:</b> Each nakshatra imparts specific qualities to individuals born under it.
<br/><b> Life Themes:</b> Governs areas like career, relationships, health based on nakshatra characteristics.
<br/><b> Muhurta (Auspicious Timing):</b> Nakshatras help select favorable times for events.
<br/><b> Remedial Measures:</b> Specific rituals or gemstones are recommended based on one’s nakshatra.
<br/><br/>
<div className="my-6">
    <h3 className="text-xl font-semibold mb-3">Nakshatra Prediction can be organized as:</h3>
    <ul className="list-disc list-inside space-y-2 text-justify">
        <li><strong>Primary Attributes:</strong> Ruling planet, deity, symbol, shakti (power), and the four padas.</li>
        <li><strong>By Guna:</strong> Sattva, Rajas, Tamas — used to group temperament and suitable activities.</li>
        <li><strong>Zodiac Mapping:</strong> Each nakshatra spans 13°20′ and maps to zodiac signs and navamsa padas.</li>
        <li><strong>Functional Uses:</strong> Birth chart interpretation, Vimshottari dasha start points, muhurta selection, and compatibility checks.</li>
        <li><strong>Life Domains:</strong> Effects on personality, career, relationships, health, and spiritual inclinations.</li>
        <li><strong>Remedies & Practices:</strong> Recommended mantras, gemstones, rituals, and lifestyle adjustments per nakshatra.</li>
    </ul>
</div>
<div className="my-6">
    <h3 className="text-xl font-semibold mb-3">Educational / Catalog Prediction</h3>
    <ul className="list-disc list-inside space-y-2 text-justify">
        <li><strong>Workshops:</strong> Interactive sessions on nakshatra significance.</li>
        <li><strong>Online Courses:</strong> Comprehensive courses covering astrology basics and nakshatra details.</li>
        <li><strong>Books & Resources:</strong> Recommended readings for deeper understanding.</li>
        <li><strong>Consultations:</strong> Personalized astrology readings based on nakshatra analysis.</li>
        <li><strong>Community Events:</strong> Gatherings to discuss and share knowledge about nakshatras.</li>
    </ul>
</div>
<div className="my-6"></div>
    <h3 className="text-xl font-semibold mb-3">Catalog of Nakshatras</h3>
    <ul className="list-disc list-inside space-y-2 text-justify">
        {[
            { name: "Ashwini", planet: "Ketu", deity: "Ashwini Kumaras", traits: "Energetic, adventurous", remedies: "Recite Ashwini mantra" },
            { name: "Bharani", planet: "Venus", deity: "Yama", traits: "Creative, passionate", remedies: "Wear diamond" },
            { name: "Krittika", planet: "Sun", deity: "Agni", traits: "Determined, strong-willed", remedies: "Perform fire rituals" },
            { name: "Rohini", planet: "Moon", deity: "Prajapati", traits: "Nurturing, artistic", remedies: "Offer milk to Shiva" },
            { name: "Mrigashira", planet: "Mars", deity: "Rudra", traits: "Curious, restless", remedies: "Meditate under stars" },
            { name: "Ardra", planet: "Rahu", deity: "Rudra", traits: "Intense, transformative", remedies: "Chant Rahu mantra" },
            { name: "Punarvasu", planet: "Jupiter", deity: "Aditi", traits: "Optimistic, nurturing", remedies: "Donate to the needy" },
            { name: "Pushya", planet: "Saturn", deity: "Brihaspati", traits: "Supportive, wise", remedies: "Plant trees" },
            { name: "Ashlesha", planet: "Mercury", deity: "Naga", traits: "Intuitive, secretive", remedies: "Wear emerald" },
            { name: "Magha", planet: "Ketu", deity: "Pitrs", traits: "Leadership, authoritative", remedies: "Perform ancestral rituals" },
            { name: "Purva Phalguni", planet: "Venus", deity: "Bhaga", traits: "Pleasant, sociable", remedies: "Engage in arts" },
            { name: "Uttara Phalguni", planet: "Sun", deity: "Aryaman", traits: "Generous, loyal", remedies: "Help friends" },
            { name: "Hasta", planet: "Moon", deity: "Savitar", traits: "Skilled, resourceful", remedies: "Practice crafts" },
            { name: "Chitra", planet: "Mars", deity: "Vishvakarma", traits: "Creative, artistic", remedies: "Create art" },
            { name: "Swati", planet: "Rahu", deity: "Vayu", traits: "Independent, adaptable", remedies: "Travel frequently" },
            { name: "Vishakha", planet: "Jupiter", deity: "Indra", traits: "Determined, ambitious", remedies: "Seek knowledge" },
            { name: "Anuradha", planet: "Saturn", deity: "Mitras", traits: "Loyal, friendly", remedies: "Build relationships" },
            { name: "Jyestha", planet: "Mercury", deity: "Indra", traits: "Protective, wise", remedies: "Help others" },
            { name: "Moola", planet: "Ketu", deity: "Narayana", traits: "Explorative, philosophical", remedies: "Study spirituality" },
            { name: "Purva Ashadha", planet: "Venus", deity: "Apah", traits: "Optimistic, cheerful", remedies: "Practice positivity" },
            { name: "Uttara Ashadha", planet: "Sun", deity: "Vishvadevas", traits: "Determined, disciplined", remedies: "Set goals" },
            { name: "Shravana", planet: "Moon", deity: "Vishnu", traits: "Listening, learning", remedies: "Listen to teachings" },
            { name: "Dhanishta", planet: "Mars", deity: "Vasu", traits: "Wealthy, musical", remedies: "Engage in music" },
            { name: "Shatabhisha", planet: "Rahu", deity: "Varuna", traits: "Mysterious, healing", remedies: "Practice healing" },
            { name: "Purva Bhadrapada", planet: "Jupiter", deity: "Ajita", traits: "Philosophical, spiritual", remedies: "Meditate regularly" },
            { name: "Uttara Bhadrapada", planet: "Saturn", deity: "Ahirbudhnya", traits: "Calm, introspective", remedies: "Reflect on life" },
            { name: "Revati", planet: "Mercury", deity: "Pushan", traits: "Compassionate, nurturing", remedies: "Help the needy" }
        ].map((nakshatra, index) => (
            <li key={index}>
                <strong>{nakshatra.name}</strong>: Planet - {nakshatra.planet}, Deity - {nakshatra.deity}, Traits - {nakshatra.traits}, Remedies - {nakshatra.remedies}
            </li>
        ))}
    </ul>
<br></br>  Explore all of it now with <b>Nakshatra Prediction Report</b><br/>
<Container width maxWidth><section className="justify-between">
 
             
          <div className="text-[var(--background)] gap-10 p-5 rounded-md">
            <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
              <table className="">
                <tbody>
                    <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r bg-[var(--primary)]  border-[var(--primary)] w-[30%]">
                 Prediction For
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Price ($)/ (INR) </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Offer Price ($)/ (INR)</td>
                        <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[25%]">   Book Now</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[30%]">
                 Personalized Nakshatra Report 
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   $ 50/ INR 3100  </td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">     $ 21 | INR 1800 </td>
                        <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[25%]" style={{ paddingLeft: "2%" }} >  <Link href="/report?type=np"> <input
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
export default nakshatraP
