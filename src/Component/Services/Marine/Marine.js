import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Marine.css';
import MarinePDF from '../../../Assets/Forms/Marine Cargo Insurance Policy.pdf';

const Marine = () => {
  return (
    <main className="service_components_container">
      <section className="marine_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          MARINE INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Marine Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Marine Insurance is a type of insurance that{' '}
                  <span className="fw-bold">
                    {' '}
                    covers cargo losses or damage caused to ships, cargo
                    vessels, terminals, and any transport in which goods are
                    transferred or acquired
                  </span>
                  between different points of origin and their final
                  destination.{' '}
                  <span className="fw-bold">
                    Providing protection against transport-related losses,
                  </span>{' '}
                  this voyage policy provides a haven for shipping companies and
                  couriers because it protects them from costly potential losses
                  while transporting goods by water.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Despite following laws and safety regulations, transporters
                  can’t control natural occurrences that might disrupt the cargo
                  or vessel.{' '}
                  <span className="fw-bold">
                    Things like weather hazards, encounters with pirates, and
                    cross border conflicts{' '}
                  </span>{' '}
                  are very common in water transportation and the damages
                  associated with these situations can cause a significant
                  financial hardship for ship owners. This is where a marine
                  insurance policy comes to the rescue, protecting the interests
                  of shipping corporations and transporters by providing them
                  with insurance coverage needed to defend against possible
                  losses.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Another great feature of marine insurance is that{' '}
                  <span className="fw-bold">
                    transporters can choose coverage options applicable to their
                    specific trade.
                  </span>{' '}
                  Coverage requirements can differ, so shipping businesses can
                  choose an insurance plan that is customized. Different
                  policies are available to provide coverage according to the
                  size of the ship and routes taken.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Marine Insurances.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Risk Coverage:{' '}
                      </span>
                      It provides all-round coverage against a wide variety of
                      risks faced while at sea.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Worldwide Coverage:{' '}
                      </span>
                      Most marine insurance providers offer claim survey
                      assistance worldwide, along with claim settlement
                      assistance.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Variety in choices:{' '}
                      </span>
                      Different marine insurance providers offer a variety of
                      options and plans under marine insurance policies to suit
                      different budgets and requirements.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Customizable:{' '}
                      </span>
                      Marine insurance covers can often be customized and
                      adjusted to meet specific needs and budgets of the
                      customers.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Several damages covered:{' '}
                      </span>
                      Often, marine insurance policies do provide extensions to
                      provide protection against damages caused due to riots,
                      strikes and other such perils.
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
                  MARINE INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={MarinePDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to open the Marine insurance brochure
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
                    src="https://www.youtube.com/embed/sX1NaokOKLU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="iframe_container mb-5">
                  <iframe
                    className="responsive_iframe"
                    src="https://www.youtube.com/embed/-h4W7kYR4nQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="iframe_container mb-5">
                  <iframe
                    className="responsive_iframe"
                    src="https://www.youtube.com/embed/mF_vlILf7Ok"
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

export default Marine;
