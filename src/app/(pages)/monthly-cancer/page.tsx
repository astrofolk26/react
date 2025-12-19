import CancerMonthly from "@/components/pages/monthly-horoscope/Cancermonthly";
import CancerMonth from "@/components/pages/monthly-horoscope/CancerMonth";
import Month from "@/components/pages/monthly-horoscope/Month1";
import React from 'react';

const page = () => {
    return (
        <main>
            <CancerMonthly />
       <CancerMonth/>
       <Month/>
        </main>
    );
};

export default page;
