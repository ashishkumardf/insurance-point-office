import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Health.css';
import HealthPDF from '../../../Assets/Forms/CLAIMFORM.pdf';
import HealthPDF2 from '../../../Assets/Forms/Youngstar_One Pager.pdf';
import HealthPDF3 from '../../../Assets/Forms/Senior Citizen Red Carpet.pdf';

const Health = () => {
  return (
    <main className="service_components_container">
      <section className="health_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          HEALTH INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Health Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  A health insurance policy extends{' '}
                  <span className="fw-bold">
                    coverage against medical expenses incurred owing to
                    accidents, illness or injury.
                  </span>{' '}
                  An individual can avail such a policy against monthly or
                  annual premium payments, for a specified tenure.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  During this period, if an insured meets with an accident or is
                  diagnosed with a severe ailment, the expenses incurred for
                  treatment purposes are borne by the insurance provider.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Health Insurances.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Cashless Treatment:{' '}
                      </span>
                      If you are insured, you can get cashless treatments as
                      your insurance company would work in collaboration with
                      various hospital networks.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Pre and post hospitalization cost coverage:{' '}
                      </span>
                      Insurance policy also covers pre and post hospitalization
                      charges up to the period of 60 days, depending on the
                      insurance plans purchased.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Transportation Charges:{' '}
                      </span>
                      Insurance policy also covers the amount paid to ambulance
                      towards the transportation of insured.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        No Claim Bonus (NCB):{' '}
                      </span>
                      This is the bonus element which is paid to the insured if
                      the insured does not file a claim for any treatment in the
                      previous year.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Medical Checkup:{' '}
                      </span>
                      Insurance policy also provide options for health checkups.
                      Free health checkup is also provided by some insurers
                      based on your previous NCBs.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Room Rent:{' '}
                      </span>
                      Insurance policy also covers room expenses depending on
                      the premium being paid by the insured.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Tax Benefit:{' '}
                      </span>
                      Premium paid on Health insurance is tax deductible under
                      section 80D of the Income Tax Act.
                    </li>
                  </ol>
                </p>
              </article>
            </div>
            <div className="col col-md-6 col-12 right_column">
              <h1 className="text-center topics_header">Quick links !</h1>
              <section className="mx-sm-5 mx-3">
                <h1 className="text-center fw-bold mb-5">GUIDELINES</h1>

                <span className="content_para blue_content fw-bold fst-italic">
                  CUSTOMER SERVICES:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://atom.starhealth.in/products?type=AGENT&token=01a7afb5-b93a-414a-bbb5-caf168224878&source=ATOM"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Calculate & Buy Star Health Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/customerportal/instant-renewal"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Renew your Star Health Policy
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/claims#1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Claim Intimation
                    </a>
                  </li>
                </ul>
                <span className="content_para blue_content fw-bold fst-italic">
                  HEALTH PLANS:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/network-hospitals"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Network Hospitals
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/locate-us"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Branch Offices
                    </a>
                  </li>
                </ul>
                <h1 className="text-center fw-bold py-5">FORMS</h1>
                <span className="content_para blue_content fw-bold fst-italic">
                  HEALTH PLANS:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={HealthPDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Claim Form
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={HealthPDF2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Young star policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={HealthPDF3}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Senior Citizen Red Carpet Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/sites/default/files/brochure/Star-Health-GainBrochure.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Star Health Gain Insurance Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/sites/default/files/brochure/Star-Comprehensive-brochure-new-1.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Star Comprehensive Insurance Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/sites/default/files/brochure/Family-Health-Optima-Insurance-Plan-New.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Family Health Optima Insurance Plan
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/sites/default/files/brochure/mediclassic_ebrochure_v1.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Medi Classic Insurance Policy (Individual)
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/sites/default/files/brochure/Super-Surplus-Brochure.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Super Surplus Insurance Policy (Individual)
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://www.starhealth.in/sites/default/files/brochure/Star-Super-Surplus-Floater-Brochure.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Super Surplus Insurance Policy (Floater)
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href="https://drive.google.com/file/d/1elHeP5cQKmQYJ1_24Sr9RsPonEqIxl4-/view"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click Here for CORONA KAWACH Policy
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="fw-bold"
                      href="https://drive.google.com/file/d/1NWzo9zDh9tzi84VYy0zZRBXNj-6FwfO2/view"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here for CORONA RAKSHAK Policy
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

export default Health;
