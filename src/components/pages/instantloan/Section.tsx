import React from 'react';
import Image from "next/image";
import Container from "@/components/layouts/Container";


const Section = () => {
  return (
    <section className='padding'>
      <Container width maxWidth>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Image
            src="/assets/images/instantloan/section-pic.png"
            alt="logo"
            width={500}
            height={400}
            className=""
          />
          <div className='padding'>
            <h2 className='title'><span>Instant</span> Personal Loans</h2>
            <p className='text-justify'>At Sabka Loan, we understand that everyone may need additional
              funds at some point in time to fulfill their requirements beyond their fixed
              income or salaries. These needs may include unplanned medical emergencies,
              purchasing a vehicle, renovating a house, going on a vacation, funding a wedding,
              or buying high-end household items or electronic gadgets.
              Traditionally, people would turn to family and friends or break a fixed deposit to
              address such situations. However, credit cards can be prohibitively expensive, with
              high-interest rates and hidden charges. Banks offer personal loans, but the process can be
              time-consuming and stressful and involve tons of paperwork, phone calls, and branch visits.
              At Sabka Loan, we offer fast, secure, and completely paperless instant personal loans
              that you can apply for online from the comfort of your home. Say goodbye to the old way
              of borrowing and step into the future with Sabka Loan.</p>
          </div>
        </section>
      </Container>

    </section>
  )
}

export default Section
