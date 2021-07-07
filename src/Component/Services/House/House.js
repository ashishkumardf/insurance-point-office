import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './House.css';
import HousePDF from '../../../Assets/Forms/House_Insurance.pdf';
import HousePDF2 from '../../../Assets/Forms/Reliance_Housholders_Package_Policy_Brochure.pdf';
import HousePDF3 from '../../../Assets/Forms/burglary-leaflet.pdf';

const House = () => {
  return (
    <main className="service_components_container">
      <section className="house_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          HOUSE INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is House Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  House insurance is a multiple-line insurance policy, meaning
                  that it{' '}
                  <span className="fw-bold">
                    includes both property insurance and liability coverage,
                    with an indivisible premium,{' '}
                  </span>{' '}
                  meaning that a single premium is paid for all risks. This
                  means that it covers both damage to one's property and
                  liability for any injuries and property damage caused by the
                  owner or members of his/her family to other people. It may
                  also include damage caused by household pets.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Buying a house is the single largest investment for most
                  people. It is a herculean task that involves a lot of
                  planning, saving and research. However, the fact that you can
                  own a house without a home insurance policy makes us neglect
                  the concept of home insurance on the whole. Most of us feel
                  that it is a waste of money as it is a certain investment for
                  an uncertain cause. Nevertheless,{' '}
                  <span className="fw-bold">
                    with the increase in natural calamities, it is a good idea
                    to take up a little expense to avoid a huge financial
                    setback in the future.
                  </span>
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of House Insurance.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Offers more than just home protection:{' '}
                      </span>
                      An extensive home insurance policy does not only protect
                      your building. It covers all the components in your
                      compound like your garage, shed, deck and even your fence.
                      Additionally, you can also opt for add-ons in your policy
                      and protect the contents of your house like your
                      furniture, electronics and valuable home appliances.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Provides a replacement for your loss:{' '}
                      </span>
                      Based on the home insurance policy you have opted for, you
                      can now get your damaged goods replaced instead of merely
                      claiming an equivalent amount of money for your loss.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Protection from natural disasters{' '}
                      </span>
                      Natural disasters are every homeowner’s nightmare. Taking
                      up the expense of repairing a damaged house is not the
                      kind of burden you want to put yourself. A detailed home
                      insurance plan covers you during natural calamities like
                      floods, landslides and earthquakes, for a minimal monthly
                      or yearly expense.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Not expensive:{' '}
                      </span>
                      Though a home insurance policy might seem like an unwanted
                      expense, the benefits provided by the scheme are much more
                      than money can buy. Additionally, the most comprehensive
                      policy, which covers even the contents of the house, can
                      be bought at an approximate value of just Rs 5,000 per
                      year. At such nominal rates, getting your house insured is
                      not even an expensive affair.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Protects you from lawsuits:{' '}
                      </span>
                      Your home insurance will cover you during the unfortunate
                      incident of you accidentally damaging another property,
                      like in the case of a fire or mechanical damage.
                      Additionally, it will also cover the medical expenses of a
                      guest injured in your property.
                    </li>
                    <li className="mb-4">
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Peace of mind:{' '}
                      </span>
                      Getting your home insured provides you with the ultimate
                      luxury of peace of mind. Whether you own an apartment or a
                      villa, once you have selected your policy and paid your
                      premium, protecting your property is no longer your
                      responsibility.
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
                  HOUSE INSURANCE:
                </span>
                <ul className="content_para mt-4">
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={HousePDF}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to open the house insurance brochure
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={HousePDF2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reliance housholders package policy brochure
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="fw-bold"
                      href={HousePDF3}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Burglary leaflet
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
                    src="https://www.youtube.com/embed/dUZZT9PAXr0"
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

export default House;
