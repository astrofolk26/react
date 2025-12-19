import ScorpioYearly from "@/components/pages/yearly-horoscope/ScorpioYearly";
import ScorpioYear from "@/components/pages/yearly-horoscope/ScorpioYear";

import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <ScorpioYearly />
       <ScorpioYear/>
       <Year/>
        </main>
    );
};

export default page;
