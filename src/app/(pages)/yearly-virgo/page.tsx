import VirgoMonthly from "@/components/pages/yearly-horoscope/VirgoYearly";
import VirgoMonth from "@/components/pages/yearly-horoscope/VirgoYear";

import Month from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <VirgoMonthly />
       <VirgoMonth/>
       <Month/>
        </main>
    );
};

export default page;
