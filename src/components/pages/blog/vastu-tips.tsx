
import Container from "@/components/layouts/Container";
import Link from "next/link"; // Import Link from next/link

const vastu = () => {
   

   return ( <section className=''>
              <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-2 '></section>
                
    <h2 className='title'><span>     Vastu    </span> Tips  </h2>
      <p className='text-justify'>
        <b>Vastu Tips for Home</b><br/>

 <b>- Entrance:</b> The main door should ideally face north, east, or northeast to attract positive energy.<br/>
<b>- Living Room: </b>Place it in the east or north direction; keep it clutter-free for smooth energy flow.<br/>
<b>- Kitchen:</b> Best located in the southeast (Agni corner). Avoid placing the kitchen in the northeast.<br/>
<b>- Bedroom: </b>The southwest direction is ideal for the master bedroom, ensuring stability and restful sleep.<br/>
<b>- Pooja Room:</b> Place in the northeast for spiritual growth and peace.<br/>
<b>- Bathrooms/Toilets:</b> Should be in the northwest or west; avoid northeast placement.<br/>
<br/>
   <b>Vastu Tips for Office / Home Office</b><br/>
   <b>- Location:</b> Best direction for a home office is the west or southwest zone, which supports focus and stability.<br/>
   <b>- Desk Placement:</b> Sit facing east or north while working; avoid facing south.<br/>
   <b>- Cabin/Workspace:</b> The southwest corner is best for the owner/manager’s cabin, symbolizing authority.<br/>
   <b>- Storage:</b> Place important files, safes, or cash lockers in the north direction for financial growth.<br/>
   <b>- Lighting:</b> Ensure good natural light; avoid working in dark or cluttered spaces.<br/>
   <b>- Plants: </b>Keep green plants (like bamboo or money plant) in the north or east to attract prosperity.<br/>
   <br/>
<b>Remedies if Vastu Cannot Be Fully Followed</b><br/>
- Use mirrors strategically to correct energy flow.<br/>
- Place yantras or pyramids in problematic zones.<br/>
- Adjust with colors, lighting, or symbolic objects when structural changes aren’t possible.<br/>

<br/><b>Key Takeaway</b><br/>
North, East, and Northeast directions are generally auspicious for entrances, work, and worship, while Southeast is best for kitchens and Southwest for bedrooms/offices. Aligning spaces with these principles can significantly improve energy, health, and prosperity.


</p>


    </Container>

    </section>
  )
}
export default vastu
