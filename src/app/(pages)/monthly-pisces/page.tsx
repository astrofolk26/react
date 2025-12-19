import PiscesM from "@/components/pages/monthly-horoscope/PiscesM";
import PiscesMonth from "@/components/pages/monthly-horoscope/PiscesMonth";

import Month1 from "@/components/pages/monthly-horoscope/Month1";
import React from 'react';

const page = () => {
    return (
        <main>
            <PiscesM />
       <PiscesMonth/>
       <Month1/>
        </main>
    );
};

export default page;
