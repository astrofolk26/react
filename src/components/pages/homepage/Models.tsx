import Container from "@/components/layouts/Container";
import React from 'react'

const Models = () => {
    return (
        <section className="padding">
            <Container width maxWidth>
     
               <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 ">
                    <section className="">
                      
                        <section className=" px-0 sm:px-10 py-3 mt-10 ">
                            <div className="">
                                <h2 className="title mb-4 text-center">
                                    <span>Western Astrology (Tropical Zodiac)</span>    
                                </h2>
                        <ul className="text-justify">
                                        <li><b>Basis:</b> Uses the Tropical Zodiac, which is fixed to the seasons. It begins with Aries at the Vernal Equinox (around March 20-21 each year) when the Sun enters 0 degrees Aries.


</li>
                                        <li><b>Symbolic:</b> It's considered a symbolic, seasonal zodiac, not directly tied to the visible constellations</li>
                                        <li><b>Precession of the Equinoxes:</b> It does not account for the precession of the equinoxes. This means that over centuries, the actual constellations have drifted away from the zodiac signs they originally aligned with. So, when Western astrology says the Sun is in Aries, the Sun is actually in the constellation Pisces (due to this precession).
</li>
                                        <li><b>Planets:</b> Primarily uses the Sun, Moon, and classical planets (Mercury, Venus, Mars, Jupiter, Saturn), along with Uranus, Neptune, and Pluto. Asteroids (Ceres, Pallas, Juno, Vesta) and Chiron are also commonly included.</li>
 <li>
<b>Houses:</b> Uses various house systems (Placidus, Koch, Whole Sign, Equal House, etc.), which divide the celestial sphere into 12 segments representing areas of life.
</li><li>
<b>Aspects:</b> Emphasizes major aspects (conjunction, opposition, square, trine, sextile) and minor aspects.
</li><li>
<b>Chart Appearance: </b>Typically presented in a circular format.
</li>
                                       

                                    </ul>
                                                                </div>
                        </section>
                    </section>
                    <section className="">
                      

                        <section className=" px-0 sm:px-10 py-3 mt-10 ">
                            <div className="">
                                <h2 className="title mb-4 text-center">
                                    Indian Astrology (Sidereal Zodiac)
                                </h2>
                            
                                    <ul className="text-justify">


                                        <li><b>Basis:</b> Uses the Sidereal Zodiac, which is fixed to the actual, observable constellations in the sky. It aligns with the true astronomical positions of the zodiac constellations.</li>
                                        <li><b>Ayanamsha:</b> Accounts for the precession of the equinoxes through a corrective calculation called the "Ayanamsha." This constantly adjusts the starting point of the zodiac to keep it aligned with the actual stars.</li>

                                        <li><b>Observational:</b> It's a more astronomically literal or "fixed-star" zodiac.</li>
                                        <li><b>Planets (Grahas):</b> Uses 9 primary "Grahas" (celestial bodies/influencers): Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, and the two lunar nodes, Rahu (North Node) and Ketu (South Node), which are considered powerful karmic points. Outer planets (Uranus, Neptune, Pluto) are usually not a core part of traditional Jyotish but are sometimes incorporated by modern practitioners.
</li> <li>

<b>Houses (Bhāvas):</b> Uses a house system that is most commonly Whole Sign House (where each sign is an entire house) or sometimes Bhava Chalit (which adjusts house cusps within signs).
</li> <li>
<b>Aspects:</b> Has a different system of planetary aspects, where some planets (like Mars, Jupiter, Saturn) have special aspects that influence specific houses.
</li> <li>
<b>Chart Appearance: </b>Typically presented in a square (North Indian style) or diamond (South Indian style) format</li>
                                  
                                          </ul>

                           
                            </div>
                        </section>
                    </section>
                </section>
            </Container>

        </section>
    )
}

export default Models