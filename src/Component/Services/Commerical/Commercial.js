import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Commercial.css';

const Commercial = () => {
  return (
    <main className="service_components_container">
      <section className="commercial_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          COMMERCIAL CARE INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Commercial Care Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Commercial Care Policy is a business insurance policy that
                  covers a wide variety of risks to which your business
                  operations are exposed. Be it{' '}
                  <span className="fw-bold">
                    fire, public liability, or machinery breakdown,
                  </span>{' '}
                  our policy will help you deal with the challenges that life
                  throws at you with confidence.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Commercial Care Insurance.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">Cover for various risks.</li>
                    <li className="mb-4">
                      Package policy to facilitate convenience through a single
                      document.
                    </li>
                    <li className="mb-4">
                      Judicial management of loss assessment.
                    </li>
                    <li className="mb-4">
                      Fund allocation based on clear indemnity guidelines.
                    </li>
                    <li className="mb-4">Selection of cover of your choice.</li>
                  </ol>
                </p>
              </article>
            </div>
            <div className="col col-md-6 col-12 right_column">
              <article>
                <h1 className="text-center topics_header">
                  Introductory Video
                </h1>
                <div className="iframe_container mb-5">
                  <iframe
                    className="responsive_iframe"
                    src="https://www.youtube.com/embed/5ivDH82prv4"
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

export default Commercial;
