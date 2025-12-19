import MainHoro from "@/components/pages/monthly-horoscope/MainHoro";
import SubHoro from "@/components/pages/monthly-horoscope/SubHoro";
import Month from "@/components/pages/monthly-horoscope/Month1";

const page = () => {
    return (
        <main>
            <MainHoro />
       <SubHoro/>
       <Month/>
        </main>
    );
};

export default page;
