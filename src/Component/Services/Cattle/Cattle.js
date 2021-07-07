import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Cattle.css';
import CattlePDF from '../../../Assets/Forms/Reliance_Cattle_Insurance_Policy.pdf';

const Cattle = () => {
  return (
    <main className="service_components_container">
      <section className="cattle_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          CATTLE INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Cattle Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Cattle are an important part of Indian economy. Marginal,
                  small and medium farmers earn considerable portion of their
                  income from cattle rearing.{' '}
                  <span className="fw-bold"> Cattle prices are high</span> and
                  its loss can lead farmers to vicious debt cycle. To help
                  farmers mitigate their livelihood risk, cattle insurance was
                  introduced that
                  <span className="fw-bold">
                    provides comprehensive coverage to farmers against the
                    cattle loss.
                  </span>
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Cattle Insurance.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Full coverage:{' '}
                      </span>
                      The Insurance policy covers risks such as loss due to
                      death, accident, illness or disease of the animal.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Minimum requirement:{' '}
                      </span>
                      Only a certificate from the qualified veterinary officer
                      is necessary for accepting the proposal and also to fix
                      the value of the cattle which forms the basis for loss
                      settlement in Cattle Insurance policy.
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
                  CATTLE INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={CattlePDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to open the cattle insurance brochure
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
                    src="https://www.youtube.com/embed/hkvyixIMrdU"
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

export default Cattle;
