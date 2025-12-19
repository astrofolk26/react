import LibraYearly from "@/components/pages/yearly-horoscope/LibraYearly";
import LibraYear from "@/components/pages/yearly-horoscope/LibraYear";

import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <LibraYearly />
       <LibraYear/>
       <Year/>
        </main>
    );
};

export default page;
