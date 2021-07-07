import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Other.css';

const Other = () => {
  return (
    <main className="service_components_container">
      <section className="other_service_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          OTHER FINANCIAL SERVICES
        </h1>
      </section>
      <section className="other_services_container text-center">
        <h1 className="text-center topics_header">Quick links !</h1>
        <div className="content_para blue_content mb-5 fw-bold fst-italic form_title">
          OTHER FINANCIAL SERVICES
        </div>
        <a
          href="https://www.freecharge.in/?cid=PS&utm_source=google&utm_medium=paid&utm_campaign=fc_sok_sem_reach_rma_web_in000_cc000_brand_generic&cid=PS&utm_source=google&utm_medium=paid&utm_campaign=fc_sok_sem_reach_rma_web_in000_cc000_brand_generic&gclid=CjwKCAjwt8uGBhBAEiwAayu_9evTDEKyHq-IHlCMsnR27HmCqJn-vkuq6Lysp9V106IeREbdliX3IBoCfb8QAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="content_para fw-bold">
            Click Here For All Types Of Bill Payment
          </p>
        </a>
        <a
          href="https://www.easemytrip.com/railways/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="content_para pt-3 fw-bold">
            Click Here For Train & Flight Booking
          </p>
        </a>
        <a
          href="https://uidai.gov.in/my-aadhaar/get-aadhaar.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="content_para pt-3 fw-bold">
            Click Here To Check Your Aadhar Card Status
          </p>
        </a>
        <a
          href="https://www.thepancard.com/?gclid=CjwKCAjwt8uGBhBAEiwAayu_9XXbhfWWhDBnXgk9QMBUyBAiZCvlOpen1y_RXbsiE9zQMO8T7heAIRoCktoQAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="content_para pt-3 fw-bold">
            Click Here To Check Your PAN Card Status
          </p>
        </a>
        <a
          href="https://www.incometax.gov.in/iec/foportal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="content_para py-3 fw-bold">
            Click Here For Income Tax ITR Filing
          </p>
        </a>
      </section>
    </main>
  );
};

export default Other;
