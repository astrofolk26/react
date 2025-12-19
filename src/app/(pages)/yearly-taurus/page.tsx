import TaurusYearly from "@/components/pages/yearly-horoscope/TaurusYearly";
import TaurusYear from "@/components/pages/yearly-horoscope/TaurusYear";

import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <TaurusYearly />
       <TaurusYear/>
       <Year/>
        </main>
    );
};

export default page;
