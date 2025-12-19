import CapricornYearly from "@/components/pages/yearly-horoscope/CapricornY";
import CapricornYear from "@/components/pages/yearly-horoscope/CapricornYear";

import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <CapricornYearly />
       <CapricornYear/>
       <Year/>
        </main>
    );
};

export default page;
