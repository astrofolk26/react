import MainHoro from "@/components/pages/yearly-horoscope/MainHoro";
import SubHoro from "@/components/pages/yearly-horoscope/SubHoro";
import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <MainHoro />
       <SubHoro/>
       <Year/>
        </main>
    );
};

export default page;
