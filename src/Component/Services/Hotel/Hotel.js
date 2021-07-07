import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Hotel.css';
import HotelPDF from '../../../Assets/Forms/Hotel_Insurance.pdf';
import HotelPDF2 from '../../../Assets/Forms/Reliance_Hotel_and_Restaurant_Package_Policy.pdf';

const Hotel = () => {
  return (
    <main className="service_components_container">
      <section className="hotel_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          HOTEL INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Hotel Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Hotel insurance is typically a package of various coverages
                  that{' '}
                  <span className="fw-bold">
                    {' '}
                    protect you from the many risks involved with running your
                    business.
                  </span>{' '}
                  Things like employee mistakes, destructive guest behavior,
                  injury or property damage, reputational risks, equipment
                  breakdown, food contamination, and weather-related events or
                  natural disasters can all financially stress your business.{' '}
                  <span className="fw-bold">
                    {' '}
                    At Insurance Point Office we offer an insurance package that
                    protects your business from all of this, so you can continue
                    to give your guests the very best of everything.
                  </span>
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Hotel Insurances.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        General property coverage:{' '}
                      </span>
                      If property is lost or damaged due to theft, vandalism,
                      fire, severe weather, or other catastrophic event, this
                      coverage will help compensate you for your losses.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Equipment breakdown coverage:{' '}
                      </span>
                      Equipment breakdown coverage will provide funds to repair
                      damage caused by the equipment failure and help make up
                      for lost income due to the covered failure.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Business interruption coverage:{' '}
                      </span>
                      If a covered event forces you to temporarily close your
                      hotel for repairs, you can rely on business interruption
                      coverage to provide you with sufficient income to help you
                      pay monthly expenses and employee salaries.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Crime coverage:{' '}
                      </span>
                      If an employee engages in some shady illegal behavior
                      while working at your hotel, this insurance can provide
                      compensation for your losses.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Food spoilage coverage:{' '}
                      </span>
                      If a power failure or equipment breakdown causes food in
                      your hotel’s restaurant to go bad, you could face a large
                      financial loss. Food spoilage coverage will compensate you
                      for lost or spoiled food.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Utility interruption coverage:{' '}
                      </span>
                      Utility interruption coverage can provide compensation for
                      any losses accrued due to a sustained utility outage.
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
                  HOTEL INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={HotelPDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to open the hotel insurance brochure
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={HotelPDF2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reliance hotel and restaurant package Policy
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
                    src="https://www.youtube.com/embed/lW1UZrYldH8"
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

export default Hotel;
