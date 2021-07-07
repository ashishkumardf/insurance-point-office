import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Flat.css';
import FlatPDF from '../../../Assets/Forms/Flat_Insurance.pdf';

const Flat = () => {
  return (
    <main className="service_components_container">
      <section className="flat_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          FLAT INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Flat Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Flat insurance{' '}
                  <span className="fw-bold">
                    offers coverage to a house and its content
                  </span>{' '}
                  from unforeseen circumstances such as{' '}
                  <span className="fw-bold">
                    damages caused by natural calamities (earthquake, fire,
                    flood, storm, landslide, etc.)
                  </span>
                  and man-made activities (theft, burglary, terrorism, riot,
                  etc.). A flat insurance policy cover your property to ensure
                  it always stands strong to give you the shelter and protection
                  you need. Just by taking fire precaution or putting door
                  locks, your house isn't safe.
                  <span className="fw-bold">
                    Choose the best flat insurance plan that evaluates the value
                    of your home structure and content to derive a
                    pocket-friendly premium for securing your home.
                  </span>
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Flat Insurance.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Complete coverage:{' '}
                      </span>
                      Get comprehensive coverage to both content and structure
                      of your Property.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Cheap availability:{' '}
                      </span>
                      Buy flat insurance policy at comparatively lower premium
                      rates than other insurance policies.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Peace of mind:{' '}
                      </span>
                      Reduce stress and tension level since you’ll have a
                      Property insurance to fall back to, in case of unforeseen
                      circumstances.
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
                  FLAT INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={FlatPDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to open the flat insurance brochure
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
                    src="https://www.youtube.com/embed/G5i--N08li4"
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

export default Flat;
