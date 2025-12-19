import TaurusMonthly from "@/components/pages/monthly-horoscope/TaurusMonthly";
import TaurusMonth from "@/components/pages/monthly-horoscope/TaurusMonth";

import Month from "@/components/pages/monthly-horoscope/Month1";
import React from 'react';

const page = () => {
    return (
        <main>
            <TaurusMonthly />
       <TaurusMonth/>
       <Month/>
        </main>
    );
};

export default page;
