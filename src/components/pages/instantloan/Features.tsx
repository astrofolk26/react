import Container from '@/components/layouts/Container';
import React from 'react';


const Features = () => {
    return (
        <section className='padding'>
            <Container width maxWidth>
                <section>
                    <h2 className='title text-center'><span>The main features of </span>our services are:</h2>
                    <div className=" text-white p-6 ">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b border-[var(--primary)]">
                                    <td className=" py-10 pr-1 sm:pr-70 font-medium text-left ">
                                        01
                                    </td>
                                    <td className="px-4 py-2">Sabka Loan offers multipurpose loans without requiring collateral.
                                        These unsecured personal loans can be used for any purpose.</td>
                                </tr>
                                <tr className="border-b border-[var(--primary)]">
                                    <td className="py-10 font-medium text-left ">
                                        02
                                    </td>
                                    <td className="px-4 py-2  ">Applying for a loan at Sabka Loan is easy, with minimal documentation.
                                        You only need to provide basic documents to process your loan application.</td>
                                </tr>
                                <tr className="border-b border-[var(--primary)]">
                                    <td className="py-10 font-medium text-left ">
                                        03
                                    </td>
                                    <td className="px-4 py-2  ">Sabka Loan considers multiple parameters to ensure that you receive
                                        the highest possible disbursal amount to meet your loan requirements.</td>
                                </tr>
                                <tr className="border-b border-[var(--primary)]">
                                    <td className="py-10 font-medium text-left ">
                                        04
                                    </td>
                                    <td className="px-4 py-2  ">Enjoy smooth and flexible repayment options with Sabka Loan,
                                        allowing you to repay your loan in easy instalments.</td>
                                </tr>
                                <tr className="border-b border-[var(--primary)]">
                                    <td className="py-10 font-medium text-left ">
                                        05
                                    </td>
                                    <td className="px-4 py-2  ">With Sabka Loan, you can expect a transparent and hassle-free
                                        process. All loan process and charges information is provided to enable you to make informed
                                        decisions.</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </section>
            </Container>
        </section>
    )
}

export default Features
