import React from 'react';
import './Review.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Review() {
  return (
    <div className="review_container">
      <div>
        <h1 className="topics_header fw-bold text-center uniform_margin mt-5">
          WHAT OUR CLIENT SAYS ?
        </h1>
      </div>
      <div className="review-maindiv pt-lg-5 pb-lg-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="9"
              aria-label="Slide 10"
            ></button>
          </div>
          <div className="carousel-inner review-inner mx-auto">
            <div className="carousel-item review-item active">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Highly Recommended
              </p>
              {/* <p className="quotes">"</p> */}
              <p className="review-text mx-auto  text-center">
                "I’ve worked with Insurance Point Office for all of my personal
                insurance needs. They have been able to grow with my needs both
                for my personal and business policies. Their level of expertise
                is greater than any agency I have dealt with in the past. Their
                knowledge and personal service is what sets them apart. I have
                recommended them to friends and co-workers and everyone is
                extremely satisfied."
              </p>
              {/* <p className="quotes right">"</p> */}
              <div className="review-data">
                <p className="">Manoj Kumar</p>
                <p className="fst-italic city font-weight-light">
                  Boston, America
                </p>
              </div>
            </div>
            <div className="carousel-item review-item">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Honest & Professional
              </p>
              {/* <p className="quotes">“</p> */}
              <p className="review-text mx-auto text-center">
                "Insurance Point Office has been a great partner to work with.
                They have always taken time to better understand our business
                and insurance needs. In addition, they are very attentive, not
                only during the application and renewal process, but more
                importantly during the claims process."
              </p>
              {/* <p className="quotes right">"</p> */}
              <div className="review-data">
                <p className="">Shyamal Nandi</p>
                <p className="fst-italic city font-weight-light">
                  Ahemdabad, Gujarat
                </p>
              </div>
            </div>
            <div className="carousel-item review-item">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Trained professionals
              </p>
              {/* <p className="quotes">“</p> */}
              <p className="review-text mx-auto text-center">
                "I had a great experience with Insurance Point Office. They are
                knowledgeable and friendly and saved me a ton of time while
                solving my insurance issue. Highly recommended."
              </p>
              {/* <p className="quotes right">"</p> */}
              <div className="review-data">
                <p className="">Manish kumar</p>
                <p className="fst-italic city font-weight-light">
                  Banglore, Karnataka
                </p>
              </div>
            </div>
            <div className="carousel-item review-item">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Experts in their field
              </p>
              {/* <p className="quotes">“</p> */}
              <p className="review-text mx-auto text-center">
                "People at Insurance Point Office are industry experts, and
                deliver a great customer experience. I would highly recommend
                Insurance Point Office for all your insurance needs."
              </p>
              {/* <p className="quotes right">"</p> */}
              <div className="review-data">
                <p className="">Om Prakash sah</p>
                <p className="fst-italic city font-weight-light">
                  Jamshedpur, Jharkhand
                </p>
              </div>
            </div>
            <div className="carousel-item review-item">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Fully Satisfied
              </p>
              {/* <p className="quotes">“</p> */}
              <p className="review-text mx-auto text-center">
                "I am a satisfied customer of Insurance Point Office for a year
                now. I purchased term plan and the returns are good. Their
                services are very good."
              </p>
              {/* <p className="quotes right">"</p> */}
              <div className="review-data">
                <p className="">Mrityunjay Kumar Pankaj</p>
                <p className="fst-italic city font-weight-light">
                  Jamshedpur, Jharkhand
                </p>
              </div>
            </div>
            <div className="carousel-item review-item">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Best Insurance Agents
              </p>
              {/* <p className="quotes">“</p> */}
              <p className="review-text mx-auto text-center">
                "I think this was the most helpful place i ever visited for my
                insurance purposes. The facilities provided by Insurance Point
                Office be it LIC insurance, car or bike insurance, or star
                health insurance are just adorable. Special thanks to Mr.Ashish
                for adopting the smooth process. I recommend everyone to visit
                here for best procedure."
              </p>
              {/* <p className="quotes right">"</p> */}
              <div className="review-data">
                <p className="">Ravi kumar</p>
                <p className="fst-italic city font-weight-light">Delhi</p>
              </div>
            </div>
            <div className="carousel-item review-item">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Hardworking People
              </p>
              {/* <p className="quotes">“</p> */}
              <p className="review-text mx-auto text-center">
                "Very excellent workmanship by Mr. Ashish Kumar. He renewed my
                insurance when I wasn’t able to do it online in an emergency
                situation at a very reasonable price. He is a very cool guy and
                also a very helpful at the time of need. I highly recommend this
                place for all insurance work. Thank you!"
              </p>
              {/* <p className="quotes right">"</p> */}
              <div className="review-data">
                <p className="">Priti Singh</p>
                <p className="fst-italic city font-weight-light">Mumbai</p>
              </div>
            </div>
            <div className="carousel-item review-item text-center">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Honest and supportive
              </p>
              {/* <p className="quotes">“</p> */}
              <p className="review-text mx-auto">
                "Insurance Point office have its own website and app which help
                me alot and this office help their clients in all the claim
                settlement. This office always recommend best policy o their
                clients only after understanding the client's requirement in a
                very detailed manner."
              </p>
              {/* <p className="quotes right">"</p> */}
              <div className="review-data">
                <p className="">Deep Shikhaa</p>
                <p className="fst-italic city font-weight-light">
                  Pune, Maharastra
                </p>
              </div>
            </div>
            <div className="carousel-item review-item">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Helpful and motivational
              </p>
              {/* <p className="quotes">“</p> */}
              <p className="review-text mx-auto text-center">
                "In this office I have taken life , health and vehicle policy
                and I am very satisfied with the policy. This office will
                provide best policy which will always be helpful to you and
                their service is excellent. This office will always stand for
                their clients claim settlement. Once everyone visit and you can
                understand that this office is very supportive."
              </p>
              {/* <p className="quotes right">"</p> */}
              <div className="review-data">
                <p className="">Dhiraj Singh </p>
                <p className="fst-italic city font-weight-light">West Bengal</p>
              </div>
            </div>
            <div className="carousel-item review-item">
              <p className="review-title mx-auto mt-lg-5 pt-3">
                Knowledgeable and supportive
              </p>
              <p className="quotes">“</p>
              <p className="review-text mx-auto text-center">
                "Since 15 years I am attached with this office and I have seen
                that whenever my maturity comes I always get payment time to
                time and now they have launched thier app and website which have
                many good links which make work more easier."
              </p>
              <p className="quotes right">"</p>
              <div className="review-data">
                <p className="">Devanand Thakur</p>
                <p className="fst-italic city font-weight-light">
                  Jamshedpur, Jharkhand
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
