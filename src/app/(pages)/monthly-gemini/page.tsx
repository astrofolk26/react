import GeminiMonthly from "@/components/pages/monthly-horoscope/GeminiMonthly";
import GeminiMonth from "@/components/pages/monthly-horoscope/GeminiMonth";

import Month from "@/components/pages/monthly-horoscope/Month1";
import React from 'react';

const page = () => {
    return (
        <main>
            <GeminiMonthly />
       <GeminiMonth/>
       <Month/>
        </main>
    );
};

export default page;
