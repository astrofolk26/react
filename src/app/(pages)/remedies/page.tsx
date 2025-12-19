import Remedies from "@/components/pages/order/remedies";
import { Suspense } from "react";

const page = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>        
         <Remedies/>
      </Suspense>
    );
};

export default page;
