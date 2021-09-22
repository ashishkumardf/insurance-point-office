import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Loan.css';

const Loan = () => {
  return (
    <main className="service_components_container">
      <section className="loan_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">LOAN</h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">PERSONAL LOAN</h1>
                <p className="mx-sm-5 mx-3 content_para">
                  A personal loan is a type of loan that helps you meet your
                  current financial needs. You don't usually need to pledge any
                  security or collateral while availing a personal loan. It can
                  serve as a solution for managing your travel cost or wedding
                  expense, as well as the expenses of a medical emergency, home
                  renovation, debt consolidation, and other needs.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  <span className="fw-bold">
                    At Insurance Point Office we provide you personal loans as
                    per your purpose with minimal rate of interest.
                  </span>
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">HOME LOAN</h1>
                <p className="mx-sm-5 mx-3 content_para">
                  A home loan is an amount of money that an individual borrows
                  from a bank or money lending company at a certain rate of
                  interest to be paid with the EMI every month. The property is
                  taken as a security by the money lending company for the home
                  loan. When the borrower cannot pay the dues, the lender will
                  possess all the legal rights to recover the outstanding loan
                  amount by sale of the property.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">SCPL</h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <span className="fw-bold">
                    SCPL stands for Self Employee Personal Loan.
                  </span>{' '}
                  A personal loan is a collateral-free mode of funding which
                  helps self-employed individuals to meet their personal or
                  business short-term requirements.
                </p>
              </article>
            </div>
            <div className="col col-md-6 col-12 right_column">
              <article>
                <h1 className="text-center topics_header">CAR LOAN</h1>
                <p className="mx-sm-5 mx-3 content_para">
                  An auto loan is a loan that allows you to buy a desired four
                  wheeler, and pay the vehicle off in equated monthly
                  installments for a set tenure instead of having to pay the
                  full price upfront. The terms of an auto loan depend on
                  various factors, including your income and credit history.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  <span className="fw-bold">
                    At Insurance Point Office we provide you car loans as per
                    your purpose with minimal rate of interest.
                  </span>
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">BUSINESS LOAN</h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Business loans have become an essential tool for the modern
                  businessman. Being able to take business loans allows you to
                  continue conducting business when you have a momentary cash
                  shortage. A business loan allows you to bring in more funds
                  for your business without altering the current structure of
                  ownership in any way. These loans can be used for a variety of
                  different business reasons.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  <span className="fw-bold">
                    Insurance Point Office helps you to start your business in
                    the best way possible with its business loan with applied
                    terms and conditions.
                  </span>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Loan;
