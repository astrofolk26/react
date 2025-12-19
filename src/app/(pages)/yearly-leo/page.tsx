import LeoYearly from "@/components/pages/yearly-horoscope/LeoYearly";
import LeoYear from "@/components/pages/yearly-horoscope/LeoYear";

import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <LeoYearly />
       <LeoYear/>
       <Year/>
        </main>
    );
};

export default page;
