import React from 'react';
import { NavLink } from 'react-router-dom';
import './Homeservice.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Homeservice.css';

import Icon1 from '../../Assets/HomeServiceIcons/lic_icon.png';
import Icon2 from '../../Assets/HomeServiceIcons/health_icon.png';
import Icon3 from '../../Assets/HomeServiceIcons/vehicle_icon.png';
import Icon4 from '../../Assets/HomeServiceIcons/accident_icon.svg';
import Icon5 from '../../Assets/HomeServiceIcons/travel_icon.png';
import Icon6 from '../../Assets/HomeServiceIcons/commercial_icon.png';
import Icon7 from '../../Assets/HomeServiceIcons/marine_icon.png';
import Icon8 from '../../Assets/HomeServiceIcons/machine_icon.png';
import Icon9 from '../../Assets/HomeServiceIcons/company_icon.png';
import Icon10 from '../../Assets/HomeServiceIcons/office_icon.png';
import Icon11 from '../../Assets/HomeServiceIcons/hotel_icon.png';
import Icon12 from '../../Assets/HomeServiceIcons/house_icon.png';
import Icon13 from '../../Assets/HomeServiceIcons/shop_icon.png';
import Icon14 from '../../Assets/HomeServiceIcons/flat_icon.png';
import Icon15 from '../../Assets/HomeServiceIcons/fire_icon.svg';
import Icon16 from '../../Assets/HomeServiceIcons/cattle_icon.png';
import Icon17 from '../../Assets/HomeServiceIcons/other_icon.png';
import Icon18 from '../../Assets/HomeServiceIcons/loan_icon.png';

export default function Heroservice() {
  return (
    <div className="homeservice_container">
      <div>
        <h1 className="topics_header fw-bold text-center mt-5">
          Types of Insurance Offered
        </h1>
      </div>

      <div className="row mx-3">
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/LIC-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon1}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">LIC</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/health-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon2}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Health</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/vehicle-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon3}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Vehicle</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/accidental-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon4}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Accidental</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/travel-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon5}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Travel</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/transit-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon6}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Transit</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/marine-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon7}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Marine</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/machine-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon8}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Machine</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/company-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon9}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Company</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/office-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon10}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Office</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/hotel-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon11}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Hotel</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/house-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon12}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">House</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/shop-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon13}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Shop</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/flat-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon14}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Flat</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/fire-and-perils-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon15}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">
                Fire & Perils
              </p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/cattle-insurance">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon16}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Cattle</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/loan">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon18}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Loan</p>
            </div>
          </NavLink>
        </div>
        <div
          className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
          data-aos="fade-down"
        >
          <NavLink to="/services/other-financial-services">
            <div className="service_card shadow-lg">
              <img
                className="d-block mx-auto homeservice_image"
                src={Icon17}
                alt="service_image"
              />
              <br />
              <p className="h4 text-center homeservice_para pt-3">Other</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
