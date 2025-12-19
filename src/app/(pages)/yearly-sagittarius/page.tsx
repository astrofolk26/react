import SagittariusYearly from "@/components/pages/yearly-horoscope/SagittariusY";
import SagittariusYear from "@/components/pages/yearly-horoscope/SagittariusYear";

import Year from "@/components/pages/yearly-horoscope/year";
import React from 'react';

const page = () => {
    return (
        <main>
            <SagittariusYearly />
       <SagittariusYear/>
       <Year/>
        </main>
    );
};

export default page;
