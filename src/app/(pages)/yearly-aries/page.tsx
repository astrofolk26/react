import AriesYearly from "@/components/pages/yearly-horoscope/AriesYearly";
import AriesYear from "@/components/pages/yearly-horoscope/AriesYear";

import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <AriesYearly />
       <AriesYear/>
       <Year/>
        </main>
    );
};

export default page;
