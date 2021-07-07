import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Shop.css';
import ShopPDF from '../../../Assets/Forms/Shop_Insurance.pdf';
import ShopPDF2 from '../../../Assets/Forms/Reliance_Shopkeepers_Package_Policy_Brochure.pdf';

const Shop = () => {
  return (
    <main className="service_components_container">
      <section className="shop_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          SHOP INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Shop Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  A shop insurance policy is a specially designed insurance
                  policy that{' '}
                  <span className="fw-bold">
                    provides coverage for a shop's contents and the property.
                  </span>{' '}
                  This shop insurance for small to medium-sized shops covers
                  burglary along with any mishaps due to natural calamities,
                  accidental fire, etc. just like fire insurance.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Shop Insurance plans offer protection to the insured against
                  financial crisis in case of some accident in his/her shop or
                  other related incidents.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Shop Insurance.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Fire{' '}
                      </span>
                      It covers loss or damage to buildings and contents due to
                      fire, lightening, strike, riot, storm, cyclone, flood etc.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Burglary:{' '}
                      </span>
                      It covers any loss or damage caused by burglary or attempt
                      of burglary to contents in your shop
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Money(Safe & Transit):{' '}
                      </span>
                      It covers loss of money due to burglary of cash in safe
                      place or in transit from shop to bank/atm and bank to
                      shop. The premium is calculated from Per Sending Limit as
                      defined by the insured.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Fidelity:{' '}
                      </span>
                      It covers financial losses due to fraud or dishonest act
                      of salaried employees.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Cheque Forgery:{' '}
                      </span>
                      Loss occurred due to forgery or material alteration of
                      cheques, drafts or any negotiable instruments issued by
                      you or in your favor
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Personal Accident:{' '}
                      </span>
                      Bodily injuries because of accident resulting in death or
                      permanent total disability. It also provides for ambulance
                      charges uptoRs 2000 and in the event of death for carriage
                      of dead body
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Public liability:{' '}
                      </span>
                      This cover provides for legal liability on behalf of the
                      proposer for accidental death or bodily injury to third
                      party excluding resident employee or domestic staff as
                      well as accidental damage to third party property.
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
                  SHOP INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={ShopPDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to open the shop insurance brochure
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={ShopPDF2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reliance shopkeepers package policy brochure
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
                    src="https://www.youtube.com/embed/ysegVMlCUgQ"
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

export default Shop;
