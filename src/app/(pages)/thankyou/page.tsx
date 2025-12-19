import Thankyou from "@/components/pages/thank-you/Thankyou";
import { Suspense } from "react";

const page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
         <Thankyou/>
        </Suspense>
    );
};

export default page;