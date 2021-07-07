import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Accident.css';
import AccidentPDF from '../../../Assets/Forms/Accident.pdf';
import AccidentPDF2 from '../../../Assets/Forms/Personal-Accident-Brochure.pdf';

const Accident = () => {
  return (
    <main className="service_components_container">
      <section className="accidental_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          ACCIDENTAL INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Accidental Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Accident insurance helps you pay for{' '}
                  <span className="fw-bold">
                    {' '}
                    medical and other out-of-pocket costs
                  </span>{' '}
                  that you may incur after an accidental injury. This includes{' '}
                  <span className="fw-bold">
                    emergency treatment, hospital stays, medical exams
                  </span>{' '}
                  , as well as other expenses you may face such as
                  transportation and lodging needs.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Accident insurance plans are purchased like other types of
                  insurance plans. You will pay a premium for your coverage,
                  which will vary based on your location and the specific plan
                  you choose.{' '}
                  <span className="fw-bold">
                    At Insurance Point Office we offer a variety of accident
                    insurance plans so that you can choose the plan that best
                    suites you.
                  </span>
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Accidental Insurances.
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
                  ACCIDENTAL INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={AccidentPDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to open the accidental insurance brochure(Star
                      Health)
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={AccidentPDF2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Personal accident brochure(Reliance General Insurance)
                    </a>
                  </li>
                </ul>
              </section>
              <article>
                <h1 className="text-center topics_header">
                  Introductory video
                </h1>
                <div className="iframe_container mb-5">
                  <iframe
                    className="responsive_iframe"
                    src="https://www.youtube.com/embed/p_qcqMwtROg"
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

export default Accident;
