import AquariusYearly from "@/components/pages/yearly-horoscope/AquariusYearly";
import AquariusYear from "@/components/pages/yearly-horoscope/AquariusY";
import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <AquariusYearly />
       <AquariusYear/>
       <Year/>
        </main>
    );
};

export default page;
