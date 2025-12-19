import PYP from "@/components/pages/order/pyp-order";
import { Suspense } from "react";

const page = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>        
         <PYP/>
      </Suspense>
    );
};

export default page;
