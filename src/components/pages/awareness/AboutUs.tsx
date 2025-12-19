import React from "react";
import Container from "../../layouts/Container";

const AboutUs = () => {
  return (
    <section className="padding">
      <Container width>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 items-center">
            <h1 className="title layoutPadding">
              <span>About</span> Sabka Loan
            </h1>
            <div>
              <p className="py-2">
                At Sabka Loan, we&apos;re committed to helping
                you access the funds you need, right when you need
                them. We offer a range of personal finance solutions,
                including loans for business, education, travel, medical
                expenses, and more.dfghj
              </p>
              <p className="py-2">The online application is quick, and approvals are fast.
                Our experienced team works closely with leading banks and
                lending partners to offer competitive interest rates and flexible repayment terms.
              </p>
              <p>With a growing presence across several states in
                India, we aim to make borrowing easier and more accessible
                for everyone. When life calls for financial support, Sabka
                Loan is ready to step in.</p>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutUs;
//  you&apos;re