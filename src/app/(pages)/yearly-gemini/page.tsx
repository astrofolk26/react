import GeminiYearly from "@/components/pages/yearly-horoscope/GeminiYearly";
import GeminiYear from "@/components/pages/yearly-horoscope/GeminiYear";

import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <GeminiYearly />
       <GeminiYear/>
       <Year/>
        </main>
    );
};

export default page;
