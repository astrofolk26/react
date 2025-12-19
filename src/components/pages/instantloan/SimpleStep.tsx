import Container from '@/components/layouts/Container';
import React from 'react';
import Image from "next/image";


const SimpleStep = () => {
    return (
        <section className='padding'>
            <Container width maxWidth>
                <section className='grid grid-cols-1 sm:grid-cols-[40%_60%] gap-5'>
                    <section className=' padding border bg-[#180C6F] rounded-4xl' >
                        <Container width maxWidth>
                            <h2 className='title text-white text-center'>2 simple steps</h2>
                            <div className='padding flex justify-center gap-5'>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        src="/assets/images/instantloan/step-logo-1.png"
                                        alt="logo"
                                        width={50}
                                        height={40}
                                        className="pb-3"
                                    />
                                    <button className="px-10 py-2 border rounded-full text-white hover:bg-white hover:text-[#180C6F]">Eligibity</button>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        src="/assets/images/instantloan/step-logo-2.png"
                                        alt="logo"
                                        width={50}
                                        height={40}
                                        className="pb-3.5"
                                    />
                                    <button className="px-8 py-2 border rounded-full text-white hover:bg-white hover:text-[#180C6F]">Documents</button>


                                </div>
                            </div>
                            <p className='text-white text-center pt-4'>The following criteria need to be met for smooth and successful disbursal of the loan</p>
                        </Container>

                    </section>
                    <section className="p-6">
                        <table className='padding'>
                            <tbody>
                                <tr className="border-b border-[#341fd3]">
                                    <td className=" py-5 font-medium text-[#341fd3] text-left  ">
                                        01
                                    </td>
                                    <td className="px-4 py-5 text-white">Should be Indian Citizens
                                    </td>
                                </tr>
                                <tr className="border-b border-[#341fd3]">
                                    <td className="py-5 font-medium text-[#341fd3] text-left  ">
                                        02
                                    </td>
                                    <td className="px-4 py-5 text-white">Must be salaried professionals</td>
                                </tr>
                                <tr className="border-b border-[#341fd3]">
                                    <td className="py-5 font-medium text-[#341fd3] text-left  ">
                                        03
                                    </td>
                                    <td className="px-4 py-5 text-white">Must have a monthly take home salary of atleast
                                        INR 25,000/-</td>
                                </tr>
                                <tr className="border-b border-[#341fd3]">
                                    <td className="py-5 font-medium text-[#341fd3] text-left  ">
                                        04
                                    </td>
                                    <td className="px-4 py-5 text-white">Should have a regular credit of salary to a bank account</td>
                                </tr>
                                <tr className="border-b border-[#341fd3]">
                                    <td className="py-5 font-medium text-[#341fd3] text-left  ">
                                        05
                                    </td>
                                    <td className="px-4 py-5 text-white">Age should be within 21 to 55 years</td>
                                </tr>
                                <tr>
                                    <td className="py-5 font-medium text-[#341fd3] text-left  ">
                                        06
                                    </td>
                                    <td className="px-4 py-5 text-white">Loans upto 80% of your salary</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </section>
            </Container>
        </section>
    )
}

export default SimpleStep