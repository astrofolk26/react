import CapricornM from "@/components/pages/monthly-horoscope/CapricornM";
import CapricornMonth from "@/components/pages/monthly-horoscope/CapricornMonth";

import Month from "@/components/pages/monthly-horoscope/Month1";
import React from 'react';

const page = () => {
    return (
        <main>
            <CapricornM />
       <CapricornMonth/>
       <Month/>
        </main>
    );
};

export default page;
