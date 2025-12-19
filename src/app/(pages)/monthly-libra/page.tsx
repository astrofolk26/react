import LibraMonthly from "@/components/pages/monthly-horoscope/LibraMonthly";
import LibraMonth from "@/components/pages/monthly-horoscope/LibraMonth";

import Month from "@/components/pages/monthly-horoscope/Month1";
import React from 'react';

const page = () => {
    return (
        <main>
            <LibraMonthly />
       <LibraMonth/>
       <Month/>
        </main>
    );
};

export default page;
