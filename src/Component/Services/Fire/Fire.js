import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Fire.css';
import FirePDF from '../../../Assets/Forms/Standard_Fire_and_Special_Perils_Policy.pdf';

const Fire = () => {
  return (
    <main className="service_components_container">
      <section className="fire_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          FIRE & PERILS INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Fire & Perils Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Standard Fire And Special Perils Insurance Is A Traditional
                  Cover That Offers{' '}
                  <span className="fw-bold">
                    Cover Against Fire And Allied Perils
                  </span>{' '}
                  Which Are Named In The Policy. The Policy Can{' '}
                  <span className="fw-bold">
                    Cover Building (Including Plinth And Foundation), Plant And
                    Machinery, Stocks, Furniture, Fixtures And Fittings
                  </span>{' '}
                  And Other Contents.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Fire & Perils Insurance.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Coverage against all:{' '}
                      </span>
                      Indemnifies against perils arising from fire, lights,
                      explosion, flood, hurricane, earthquake, terrorist
                      activities and civil commotions.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Only for owners:{' '}
                      </span>
                      Only house or apartment owners can buy this plan and not
                      tenants.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Full Coverage:{' '}
                      </span>
                      It indemnifies the building as well as everything in it.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Immediate effects:{' '}
                      </span>
                      It indemnifies the building as well as everything in it.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Longlasting protection:{' '}
                      </span>
                      A distinctive housing insurance plan that offers long
                      lasting protection which is particularly effective for
                      hypothecated assets.
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
                  FIRE & PERILS INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={FirePDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to open the Fire & Perils insurance brochure
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
                    src="https://www.youtube.com/embed/qSGHHMWrhhg"
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

export default Fire;
