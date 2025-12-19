
import AquariusMonthly from "@/components/pages/monthly-horoscope/AquariusMothly";
import AquariusM from "@/components/pages/monthly-horoscope/AquariusM";
import Month from "@/components/pages/monthly-horoscope/Month1";
import React from 'react';

const page = () => {
    return (
        <main>
            <AquariusMonthly />
       <AquariusM/>
       <Month/>
        </main>
    );
};

export default page;
