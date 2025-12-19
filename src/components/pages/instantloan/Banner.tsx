import React from 'react';
import Image from "next/image";

const Banner = () => {
    return (
        <section>
            {/* <h2 className='title px-5  sm:px-20 sm:pt-16 max-w-[1000px] mb-0'><span>Instant personal loans for any requirement -</span></h2>
            <h2 className='title px-5 sm:px-20 max-w-[1000px] mt-0'> fast, secure, and completely paperless.</h2> */}
            <h2 className='title px-5 py-6 sm:px-20 sm:pt-16 max-w-[1000px] '><span>Instant personal loans for any requirement - </span>
                fast, secure, and completely paperless.</h2>
            <Image
                src="/assets/images/repayloan/pd-1.png"
                alt="rupee-currency-symbol"
                width={600}
                height={400}
                className="object-cover w-full padding "
            />
        </section>
    )
}

export default Banner
