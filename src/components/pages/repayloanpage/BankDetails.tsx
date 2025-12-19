import Container from "@/components/layouts/Container";
import React from "react";

const BankDetails = () => {
  return (
    <section className="padding">
      <Container width maxWidth>
        <section>
          

          <section className="grid sm:grid-cols-[60%_40%] gap-4 sm:gap-10 items-center my-10">
            {/* Left Section – Bank Tables */}
            <section className="w-full sm:w-auto">
              {/* YES BANK - Basic Details */}
              <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Bank Name
                      </td>
                      <td className="px-4 py-2">YES BANK</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Company Name
                      </td>
                      <td className="px-4 py-2">Mahashakti Financiers Ltd</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Account Number
                      </td>
                      <td className="px-4 py-2">028363700002803</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        IFSC Code
                      </td>
                      <td className="px-4 py-2">YESB0000283</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Branch Name
                      </td>
                      <td className="px-4 py-2">VASANT KUNJ, NEW DELHI</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Account Type
                      </td>
                      <td className="px-4 py-2">Current Account</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ICICI BANK - UPI */}
              <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Bank Name
                      </td>
                      <td className="px-4 py-2">ICICI BANK LTD.</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Account No.
                      </td>
                      <td className="px-4 py-2">164305500208</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        IFSC Code
                      </td>
                      <td className="px-4 py-2">ICIC0001643</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Bank Address
                      </td>
                      <td className="px-4 py-2">
                        M79, M Block Market, GK II, New Delhi - 110048
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Account Type
                      </td>
                      <td className="px-4 py-2">Current</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Axis BANK - UPI */}
              <div className="text-white border border-[var(--primary)] p-1 sm:p-6">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Bank Name
                      </td>
                      <td className="px-4 py-2">AXIS BANK LTD.</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Account No.
                      </td>
                      <td className="px-4 py-2">924020074636654</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        IFSC Code
                      </td>
                      <td className="px-4 py-2">UTIB0003743</td>
                    </tr>
                    <tr className="border-b border-[var(--primary)]">
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Bank Address
                      </td>
                      <td className="px-4 py-2">
                        GF Plot No. 13, Block C, Pocket 8, Sector - 17, Dwarka,
                        Delhi - 110075
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-left border-r border-[var(--primary)] w-[30%]">
                        Account Type
                      </td>
                      <td className="px-4 py-2">Current</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            
          </section>

          <section className="grid sm:grid-cols-[60%_40%] gap-4 sm:gap-10 items-center my-10">
            {/* Left Section – Bank Tables */}
            <section className="w-full sm:w-auto"></section>

            <div className="grid gap-6 sm:gap-10 justify-center"></div>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default BankDetails;
