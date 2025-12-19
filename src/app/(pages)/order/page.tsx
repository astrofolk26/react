import Order from "@/components/pages/order/order";
import { Suspense } from "react";

const page = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>        
         <Order/>
      </Suspense>
    );
};

export default page;
