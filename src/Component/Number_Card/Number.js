import React, { useEffect } from 'react';
import AOS from 'aos';
import './Number.css';

import CountUp from 'react-countup';

export default function Numbers() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });
  return (
    <div className="number_card_container">
      <div>
        <h1 className="topics_header fw-bold text-center">
          Milestone Acheived
        </h1>
      </div>
      <div className=" row number-card-div">
        <div
          class="col-sm-4 col-12 m-2 p-5 card number-card shadow-lg"
          data-aos="fade-down"
        >
          <div className="number">
            <CountUp start={0} end={2000} duration={10} delay={2} />
            <span>+</span>
          </div>
          <div class="card-body">
            <h4 class="card-title number-title">Number Of Clients</h4>
          </div>
        </div>

        <div
          class="col-sm-4 col-12 m-2 p-5 card number-card shadow-lg"
          data-aos="fade-down"
        >
          <div className="number">
            <CountUp start={0} end={10300} duration={10} delay={2} />
            <span>+</span>
          </div>
          <div class="card-body">
            <h4 class="card-title number-title">Number Of Policies Sold</h4>
          </div>
        </div>

        <div
          class="col-sm-4 col-12 m-2 p-5 card number-card shadow-lg"
          data-aos="fade-down"
        >
          <div className="number">
            <CountUp start={0} end={3000} duration={10} delay={2} />
            <span>+</span>
          </div>
          <div class="card-body">
            <h4 class="card-title number-title">Number Of Claims Settelment</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
