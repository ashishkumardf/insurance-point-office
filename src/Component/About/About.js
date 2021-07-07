import React from 'react';
import './About.css';
import '../../index.css';
import Button from '@material-ui/core/Button';
import ProfilePic1 from '../../Assets/Images/profile_pic1.jpg';
import ProfilePic2 from '../../Assets/Images/profile_pic2.jpg';
import { NavLink } from 'react-router-dom';

const materialUiStyling = {
  fontSize: '1.1rem',
  backgroundColor: '#3265A7',
  color: '#FFFFFF',
  fontWeight: 'bold',
  textShadow: '2px 1px 2px #000000',
};

const About = () => {
  return (
    <main className="about_container">
      <section className="about_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center about_header">ABOUT US</h1>
      </section>
      <section className="about_content">
        <p className="about_header text-center pt-5 pb-md-0 pb-3">
          <span className="first_span">INSURANCE POINT </span>
          <span className="second_span">OFFICE</span>
        </p>
        <p className="about_para text-center fw-bold fst-italic px-5 pb-5">
          Insurance Point Office helps customers in all their financial
          consultations and advisories, with all the utilities of their
          portfolio managements and wealth making.
        </p>

        {/* ------------------------------------------MISSION & VISION----------------------------------- */}

        <section className="row goals_row ">
          <div className="col-md-6 col-12 text-center pb-5">
            <h1 className="goals_header fw-bold pb-3">OUR MISSION</h1>
            <p className="mx-5 about_para fw-bold fst-italic">
              To offer complete client satisfaction by providing our best
              service and assistance.
            </p>
          </div>
          <div className=" col-md-6 col-12 text-center pb-5">
            <h1 className="goals_header fw-bold pb-3">OUR VISION</h1>
            <p className="mx-5 about_para fw-bold fst-italic">
              To become one of the most admired and trust-worthy insurance
              companies in India.
            </p>
          </div>
        </section>

        {/* ---------------------------------------FIRST DESCRIPTION--------------------------------------- */}

        <section className="row description_row">
          <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
            <img
              className="first_image img-fluid"
              src={ProfilePic1}
              alt="profile_pic"
            />
          </div>
          <div className="col-lg-6 col-12 pt-lg-0 pt-5 first_description_para">
            <p className="">
              My name is Mr. Rajendra Prasad and I am an{' '}
              <span className="fw-bold">
                approved LIC and general insurance agent
              </span>{' '}
              . As an Insurance Advisor, I aim to get the policy for you and
              your family that can keep you protected without paying huge sums
              of premium. I have{' '}
              <span className="fw-bold">
                huge experience in this field and along with individuals I have
                also been helping various businesses
              </span>{' '}
              to stay protected from different financial risks. If you have been
              searching for a good insurance agent then your are at the right
              place.
            </p>
            <p className="pt-4">
              Some of my past achievements are as follows:
              <ul className="fst-italic fw-bold pt-3">
                <li>Club Galaxy Since 2020</li>
                <li>CM's Club Member since 2003</li>
                <li>MDRT 12 Times</li>
                <li>EC Member LIC Agent Association</li>
                <li>Return From USA 2011</li>
              </ul>
            </p>
            <p className="pt-4">
              It is not easy to get a good insurance advisor that can provide
              you protection from all kinds of risks in life. You should make a
              proper research and consult with an experienced advisor with a
              good profile.{' '}
              <span className="fw-bold">
                I have been in this field for {new Date().getFullYear() - 1996}{' '}
                years
              </span>{' '}
              and aim to give my best advice to each and every client.
            </p>
            <p className="pt-4">
              Don't just take my words for it. Do check the awards and
              certifictes bestowed on me for my years of hard work.
            </p>
            <center>
              <NavLink to="/awards-and-certifications">
                <Button
                  style={materialUiStyling}
                  className="mt-5 p-3"
                  variant="contained"
                  size="small"
                >
                  AWARDS & CERTIFICATES
                </Button>
              </NavLink>
            </center>
          </div>
        </section>

        {/* -----------------------------------------SECOND DESCRIPTION-------------------------------------- */}

        <section className="row description_row">
          <div className="col-lg-6 col-12 pt-lg-0 pt-5 order-lg-1 order-2 second_description_para">
            <p>
              My name is Ashish Kumar,{' '}
              <span className="fw-bold">
                the director of Insurance Point Office{' '}
              </span>
              and I am an approved general insurance agent. I am S/O Mr.
              Rajendra Prasad. I have done job in many companies in my past and
              I also have strong work experience as a business person. I have
              also been the manager at Kingston Sky Institute of Aviation and
              Hospitality.
            </p>
            <p className="pt-4">
              I have also gained experience in the following fields:
              <ul className="fst-italic fw-bold pt-3">
                <li>
                  {' '}
                  Industrial training in THE TINPLATE COMPANY OF INDIA LIMITED,
                  Jamshedpur
                </li>
                <li>In Plant training in INDO DANISH TOOL ROOM, Jamshedpur</li>
                <li>AutoCAD</li>
                <li>CATIA V5R20</li>
                <li>C Programming</li>
                <li>Attender of Interactive MRO Orientation Program</li>
                <li>Holder of Uraan Project Certificate</li>
                <li>Holder of ICM Certificate Of Hospitality management</li>
                <li>
                  Frankfinn Institute of Aviation (Hospitality and Customer
                  service)
                </li>
                <li>
                  Holder of Certificate of appreciation in star health insurance
                </li>
              </ul>
            </p>
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center order-lg-2 order-1">
            <img
              className="second_image img-fluid"
              src={ProfilePic2}
              alt="profile_pic"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
