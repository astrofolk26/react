import CancerYearly from "@/components/pages/yearly-horoscope/Canceryearly";
import CancerYear from "@/components/pages/yearly-horoscope/CancerYear";
import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <CancerYearly />
       <CancerYear/>
       <Year/>
        </main>
    );
};

export default page;
