import VirgoMonthly from "@/components/pages/monthly-horoscope/VirgoMonthly";
import VirgoMonth from "@/components/pages/monthly-horoscope/VirgoMonth";

import Month from "@/components/pages/monthly-horoscope/Month1";
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
