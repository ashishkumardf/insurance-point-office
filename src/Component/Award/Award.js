import React, { useEffect } from 'react';
import AOS from 'aos';
import '../../index.css';
import './Award.css';

// -----------------------------------------AWARD IMAGES IMPORT-------------------------------------

import Award1 from '../../Assets/Awards/award1.jpg';
import Award2 from '../../Assets/Awards/award2.jpg';
import Award3 from '../../Assets/Awards/award3.jpg';
import Award4 from '../../Assets/Awards/award4.jpg';
import Award5 from '../../Assets/Awards/award5.jpg';
import Award6 from '../../Assets/Awards/award6.jpg';
import Award7 from '../../Assets/Awards/award7.jpg';
import Award8 from '../../Assets/Awards/award8.jpg';
import Award9 from '../../Assets/Awards/award9.jpg';
import Award10 from '../../Assets/Awards/award10.jpg';
import Award11 from '../../Assets/Awards/award11.jpg';
import Award12 from '../../Assets/Awards/award12.jpg';
import Award13 from '../../Assets/Awards/award13.jpg';
import Award14 from '../../Assets/Awards/award14.jpg';
import Award15 from '../../Assets/Awards/award15.jpg';
import Award16 from '../../Assets/Awards/award16.jpg';
import Award17 from '../../Assets/Awards/award17.jpg';
import Award18 from '../../Assets/Awards/award18.jpg';
import Award19 from '../../Assets/Awards/award19.jpg';
import Award20 from '../../Assets/Awards/award20.jpg';
import Award21 from '../../Assets/Awards/award21.jpg';
import Award22 from '../../Assets/Awards/award22-min.jpg';
import Award23 from '../../Assets/Awards/award23.jpg';
import Award24 from '../../Assets/Awards/award24.jpg';

// --------------------------------------------  CERTIFICATE IMAGES IMPORT---------------------------------

import Certificate1 from '../../Assets/Certificates/certificate1-min.jpg';
import Certificate2 from '../../Assets/Certificates/certificate2-min.jpg';
import Certificate3 from '../../Assets/Certificates/certificate3-min.jpg';
import Certificate4 from '../../Assets/Certificates/certificate4-min.jpg';
import Certificate5 from '../../Assets/Certificates/certificate5-min.jpg';
import Certificate6 from '../../Assets/Certificates/certificate6-min.jpg';
import Certificate7 from '../../Assets/Certificates/certificate7-min.jpg';
import Certificate8 from '../../Assets/Certificates/certificate8-min.jpg';
import Certificate9 from '../../Assets/Certificates/certificate9-min.jpg';
import Certificate10 from '../../Assets/Certificates/certificate10-min.jpg';
import Certificate11 from '../../Assets/Certificates/certificate11-min.jpg';
import Certificate12 from '../../Assets/Certificates/certificate12-min.jpg';
import Certificate13 from '../../Assets/Certificates/certificate13-min.jpg';
import Certificate14 from '../../Assets/Certificates/certificate14-min.jpg';
import Certificate15 from '../../Assets/Certificates/certificate15-min.jpg';
import Certificate16 from '../../Assets/Certificates/certificate16-min.jpg';
import Certificate17 from '../../Assets/Certificates/certificate17-min.jpg';
import Certificate18 from '../../Assets/Certificates/certificate18-min.jpg';
import Certificate19 from '../../Assets/Certificates/certificate19-min.jpg';
import Certificate20 from '../../Assets/Certificates/certificate20-min.jpg';
import Certificate21 from '../../Assets/Certificates/certificate21-min.jpg';
import Certificate22 from '../../Assets/Certificates/certificate22-min.jpg';
import Certificate24 from '../../Assets/Certificates/certificate24-min.jpg';
import Certificate25 from '../../Assets/Certificates/certificate25-min.jpg';
import Certificate26 from '../../Assets/Certificates/certificate26-min.jpg';
import Certificate27 from '../../Assets/Certificates/certificate27-min.jpg';
import Certificate28 from '../../Assets/Certificates/certificate28-min.jpg';
import Certificate29 from '../../Assets/Certificates/certificate29-min.jpg';

const Award = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });
  return (
    <main className="award_container">
      <section className="award_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          AWARDS & CERTIFICATES
        </h1>
      </section>
      <section>
        <h2 className="text-center topics_header">
          Awards Bestowed on Insurance Point Office
        </h2>
      </section>
      <section className="award_section">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img className="award_image" src={Award1} alt="award_image" />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img className="award_image" src={Award2} alt="award_image" />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img className="award_image" src={Award3} alt="award_image" />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img className="award_image" src={Award4} alt="award_image" />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award5}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award6}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award7}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award8}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award9}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award10}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award11}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award12}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award13}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award14}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award15}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award16}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award17}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award18}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award19}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award20}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award21}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award22}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award23}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Award24}
              alt="award_image"
              data-aos="fade-down"
            />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center topics_header">
          Certificates that proves our excellence !
        </h2>
      </section>
      <section className="award_section">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate1}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate2}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate3}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate4}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate5}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate6}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate7}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate8}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate9}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate10}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate11}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate12}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate13}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate14}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate15}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate16}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate17}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate18}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate19}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate20}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate21}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate22}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate22}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate24}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate25}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate26}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate27}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate28}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around award_div">
            <img
              className="award_image"
              src={Certificate29}
              alt="certificate_image"
              data-aos="fade-down"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Award;
