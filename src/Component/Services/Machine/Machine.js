import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Machine.css';

const Machine = () => {
  return (
    <main className="service_components_container">
      <section className="machine_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          MACHINE INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Machine Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Machinery breakdown can lead to breakdown of production and
                  business operations. It’s vital to get industrial operations
                  back on track as they affect the revenue flow.{' '}
                  <span className="fw-bold">
                    At Insurance Point Office we provide you with that policy
                    that best fits your need to protect both your machinery and
                    your revenue in case any machinery breaks down.​
                  </span>
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Machinery breakdown insurance provides a security cover to the
                  machines used by factories and industries.{' '}
                  <span className="fw-bold">
                    This insurance covers accidental breakdown and physical
                    damage of the machinery, the cost of repairs or replacement
                    of the damaged machine parts.
                  </span>{' '}
                  Some insurance companies also offer riders to cover additional
                  risks to the machinery or other aspects like cost,
                  air-freight, machine foundation and customs duty, etc.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Machine Insurances.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Repair Cost Coverage:{' '}
                      </span>
                      Following an equipment breakdown, organizations may have
                      to pay thousands just to get their business up and running
                      again. Equipment breakdown insurance can help soften the
                      blow, reimbursing organizations for the cost to repair or
                      replace damaged equipment due to an accident.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Expediting Expenses:{' '}
                      </span>
                      Repairing complex equipment in a hurry can be an expensive
                      endeavor. Most equipment breakdown insurance policies
                      cover any expenses needed to speed up the repair or
                      replacement of damaged property, including the cost of
                      temporary repairs.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Protection Against Business Interruptions:{' '}
                      </span>
                      Virtually in all cases, an equipment failure disrupts a
                      business. In some instances, these disruptions are
                      quantifiable, leading to lost revenue and productivity.
                      Equipment breakdown insurance covers some of these costs,
                      including income lost as a result of a covered accident
                    </li>
                  </ol>
                </p>
              </article>
            </div>
            <div className="col col-md-6 col-12 right_column">
              {/* <h1 className="text-center topics_header">Quick links !</h1> */}
              <article>
                <h1 className="text-center topics_header">
                  Introductory Video
                </h1>
                <div className="iframe_container mb-5">
                  <iframe
                    className="responsive_iframe"
                    src="https://www.youtube.com/embed/SerPr38WtZk"
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

export default Machine;
