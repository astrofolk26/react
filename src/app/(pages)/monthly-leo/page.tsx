import LeoMonthly from "@/components/pages/monthly-horoscope/LeoMonthly";
import LeoMonth from "@/components/pages/monthly-horoscope/LeoMonth";

import Month from "@/components/pages/monthly-horoscope/Month1";
import React from 'react';

const page = () => {
    return (
        <main>
       <LeoMonthly />
       <LeoMonth/>
       <Month/>
        </main>
    );
};

export default page;
