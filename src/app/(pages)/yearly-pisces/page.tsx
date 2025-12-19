import PiscesYearly from "@/components/pages/yearly-horoscope/PiscesY";
import PiscesYear from "@/components/pages/yearly-horoscope/PiscesYear";

import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <PiscesYearly />
       <PiscesYear/>
       <Year/>
        </main>
    );
};

export default page;
