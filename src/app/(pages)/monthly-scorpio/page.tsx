import ScorpioMonthly from "@/components/pages/monthly-horoscope/ScorpioMonthly";
import ScorpioMonth from "@/components/pages/monthly-horoscope/ScorpioMonth";

import Month from "@/components/pages/monthly-horoscope/Month1";
import React from 'react';

const page = () => {
    return (
        <main>
            <ScorpioMonthly />
       <ScorpioMonth/>
       <Month/>
        </main>
    );
};

export default page;
