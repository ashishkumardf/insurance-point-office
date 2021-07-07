import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Office.css';
import OfficePDF from '../../../Assets/Forms/Office_Insurance.pdf';
import OfficePDF2 from '../../../Assets/Forms/Reliance_Office_Package_Policy_Brochure.pdf';

const Office = () => {
  return (
    <main className="service_components_container">
      <section className="office_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          OFFICE INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Office Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Office Insurance offers comprehensive coverage for the risks
                  associated with{' '}
                  <span className="fw-bold">
                    threats which can impact office operations.
                  </span>{' '}
                  It covers not only the office property, but also the loss of
                  money or any cheating done by employees. The insurance is
                  usually offered as office package policy to cover the risks
                  arising from various untoward incidents.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Office insurance is primarily focused on businesses that are
                  run from a commercial property. Specialist policies are
                  <span className="fw-bold">
                    {' '}
                    designed to account for the risks of your specific industry.
                  </span>
                  The basic types of cover we talked about above are standard
                  and/or legal requirements across all offices. They all have a
                  premises, products or services and customers. This makes
                  building the basics of your policy quite straightforward.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Office Insurances.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Burglary:{' '}
                      </span>
                      Covers all contents against Burglary or Housebreaking , or
                      Holdup including Robbery.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Staff injury or damage:{' '}
                      </span>
                      Covers You for your liability under the Workmen's
                      Compensation Act' 1923 and /or Fatal accidents Act'1855
                      and / or Common law to pay compensation to employees for
                      bodily injury or death caused due to
                      accidents/occupational diseases arising out of and in
                      course of employment.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        The structure of the premises:{' '}
                      </span>
                      When you own the office that you’re working from buildings
                      insurance is essential to cover the cost of repairing
                      damage or destruction.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Fidelity Guarantee:{' '}
                      </span>
                      Insures You against direct financial loss due to fraud or
                      dishonesty of the employee.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Visitors to the premises:{' '}
                      </span>
                      Public liability insurance will cover your business for
                      loss, damage or injury to a third party that occurs at
                      your offices premises, whether that’s a dropped laptop or
                      a broken leg.
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
                  OFFICE INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={OfficePDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to open the office insurance brochure
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={OfficePDF2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reliance office package policy brochure
                    </a>
                  </li>
                </ul>
              </section>
              <article>
                <h1 className="text-center topics_header">
                  Introductory Video
                </h1>
                <div className="iframe_container mb-5">
                  <iframe
                    className="responsive_iframe"
                    src="https://www.youtube.com/embed/PLngeL_Uqs4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Office;
