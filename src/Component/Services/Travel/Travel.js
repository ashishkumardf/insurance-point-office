import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Travel.css';
import TravelPDF from '../../../Assets/Forms/Reliance_Travel_Care_Policy_Asia_Plan.pdf';
import TravelPDF2 from '../../../Assets/Forms/Reliance_Travel_Care_Policy_Student_Plan.pdf';
import TravelPDF3 from '../../../Assets/Forms/Reliance_Travel_Care_Policy_Schengen_Plan.pdf';
import TravelPDF4 from '../../../Assets/Forms/Reliance_Travel_Care_Policy-Brochure.pdf';
import TravelPDF5 from '../../../Assets/Forms/travel-corp-leaflet.pdf';

const Travel = () => {
  return (
    <main className="service_components_container">
      <section className="travel_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          TRAVEL INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Travel Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  You work hard every day to make a better life for your family,
                  and you work hard to put money aside for your time away
                  traveling. But if something happens and you find yourself
                  unable to travel,{' '}
                  <span className="fw-bold">
                    you may wind up losing a lot of your travel money
                  </span>{' '}
                  if you’re caught without a travel insurance policy.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  <span className="fw-bold">
                    Travel insurance helps to protect your costly vacation
                    purchases.
                  </span>{' '}
                  Buying airfare is easy enough, but getting a refund —
                  particularly when your trip details or plans change — can be a
                  real challenge.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  People buy travel insurance because it helps them{' '}
                  <span className="fw-bold">feel worry-free</span> if they
                  experience a travel delay or other issue. There are a lot of
                  great reasons to buy family holiday insurance in advance.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Travel Insurances.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Protects you against losses during travel:{' '}
                      </span>
                      Some of the losses that Travel Insurance covers include
                      loss of checked-in baggage, loss of passport. It
                      compensates the traveller for additional expenses that may
                      occur due to these losses.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Compensates medical expenses:{' '}
                      </span>
                      In case of any accident, dental treatment or medical
                      treatment, expenses up to the limit specified in the
                      insurance policy are reimbursed by the insurance company.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Covers against changes to the trip schedule:{' '}
                      </span>
                      At any point of time, there may be changes to the trip
                      schedule. A Travel Insurance policy compensates against
                      these losses that may occur before a trip commences.
                      Travel Insurance also covers against trip curtailment due
                      to any reason. This coverage might differ from product to
                      product.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Covers personal liability:{' '}
                      </span>
                      Personal liability is coverage against damage caused by
                      the insured to a third person. During travel, especially
                      international travel, if by any chance you cause any
                      damage to a third person who has to be compensated, this
                      part of Travel Insurance will provide compensation. Third
                      party liability can be for damage to property or to a
                      person. This personal liability coverage might differ from
                      product to product.
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
                  TRAVEL INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={TravelPDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reliance travel care policy Asia plan
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={TravelPDF2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reliance travel care policy Student plan
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={TravelPDF3}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reliance travel care policy Schengen plan
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={TravelPDF4}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reliance travel care policy brochure
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={TravelPDF5}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Travel corp leaflet
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
                    src="https://www.youtube.com/embed/Xfqm6Jgem2w"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="iframe_container mb-5">
                  <iframe
                    className="responsive_iframe"
                    src="https://www.youtube.com/embed/8tukTtmlX_8"
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

export default Travel;
