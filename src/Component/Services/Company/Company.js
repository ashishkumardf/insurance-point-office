import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Company.css';
import CompanyPDF from '../../../Assets/Forms/sme_industry_leaflet.pdf';

const Company = () => {
  return (
    <main className="service_components_container">
      <section className="company_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          COMPANY INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Company Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Company insurance is a kind of insurance that helps an
                  enterprise to{' '}
                  <span className="fw-bold">
                    protect its financial assets, intellectual property and
                    physical location from an unforeseen incident causing huge
                    financial losses.
                  </span>{' '}
                  It supports the insured business against any damage or loss
                  arising out of incidents like{' '}
                  <span className="fw-bold">
                    natural disasters, thefts, vandalism, lawsuits, loss of
                    income and employee illness, injury or death.
                  </span>{' '}
                  Such incidents can cause a major setback to your business. In
                  several cases, it leads to partial or complete closure of the
                  business leading to loss of income.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Accidental Insurance
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Family Security:{' '}
                      </span>
                      In the event of an accident that causes death or renders
                      you disabled, it would have a significant impact on your
                      earning potential. An accident cover will give your family
                      financial protection in the form of accidental
                      compensation and ensure their financial security.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        No medical tests required:{' '}
                      </span>
                      This is another significant benefit of an accident
                      insurance policy. Unlike the health insurance policy,
                      where the insurance company requires you to undergo
                      medical tests before issuing the policy, you need not take
                      any tests.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Worldwide coverage:{' '}
                      </span>
                      Most types of insurance covers have a geographical
                      limitation, which means they do not offer compensation for
                      any casualty that occurs outside India. But, with personal
                      accident policy, there is no such limitation. You can be
                      assured of getting the benefit irrespective of the
                      location of the accident; you get worldwide coverage.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Ambulance Expenses:{' '}
                      </span>
                      Most insurance companies cover the ambulance expenses to
                      carry the injured to the hospital from the accident spot.
                    </li>
                  </ol>
                </p>
              </article>
            </div>
            <div className="col col-md-6 col-12 right_column">
              <h1 className="text-center topics_header">Quick links !</h1>
              <section className="mx-sm-5 mx-3">
                <h1 className="text-center fw-bold mb-5">FORMS</h1>
                <span className="content_para blue_content fw-bold fst-italic">
                  COMPANY INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={CompanyPDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      SME industry leaflet
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Company;
