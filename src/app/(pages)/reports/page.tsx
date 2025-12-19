import Reports from "@/components/pages/order/reports";
import { Suspense } from "react";

const page = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>        
         <Reports/>
      </Suspense>
    );
};

export default page;
