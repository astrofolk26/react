import React from 'react';
import Image from "next/image";

const SectionTwo = () => {
    return (
        <section className="relative " id="about-us">

            <Image
                src="/assets/images/instantloan/section-two-pic.png"
                alt="Background"
                width={1800}
                height={500}
                className="object-cover w-full h-[500px]"
            />


            <section className="absolute inset-0 px-10 py-35">

                <div className="max-w-xl">
                    <h2 className="title mb-4">
                        <span>Instant </span>Personal Loans
                    </h2>
                    <p className="text-base leading-relaxed text-justify">
                        Sabka Loan is the perfect solution for all your personal
                        loan needs. With our years of experience in the industry,
                        we have optimized our loan disbursement system through extensive
                        refining of our processes, developing our own underwriting algorithm
                        for precise and efficient loan assessments, and employing knowledgeable
                        professionals who can empathize with your needs and strive to provide you
                        with a seamless borrowing experience.
                    </p>
                </div>
            </section>
        </section>
    )
}

export default SectionTwo
