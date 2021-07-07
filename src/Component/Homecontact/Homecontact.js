import React from 'react';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import './Homecontact.css';
import Map from '../Map/map';

const materialUiStyling = {
  fontSize: '1.1rem',
  backgroundColor: '#3265A7',
  color: '#FFFFFF',
  fontWeight: 'bold',
  textShadow: '2px 1px 2px #000000',
};

export default function HomeMap() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wdws7hk',
        'template_7qioo8q',
        e.target,
        'user_eoORToZFcMaWxixWf1ikD'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert('Your resposne has been submitted');
    e.target.reset();
  }

  return (
    <div className="homecontact-container">
      <div>
        <h1 className="topics_header fw-bold text-center mt-5">GET IN TOUCH</h1>
      </div>
      <div class="row herocontact-div">
        <div class="col-sm-6">
          <form onSubmit={sendEmail}>
            <div className="hero-contact-form">
              <div className="input-group mb-3 name-input mt-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  aria-label="Username"
                  name="username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 name-input mt-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  aria-label="email"
                  name="email"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 name-input mt-5">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Telephone number"
                  aria-label="number"
                  name="number"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group comment mb-5 mt-5">
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  name="message"
                  placeholder="Write something..."
                ></textarea>
              </div>
              <Button
                type="submit"
                style={materialUiStyling}
                className="px-5 py-3"
                target="_blank"
                variant="contained"
                size="large"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
        <div class="col-sm-6">
          <Map />
        </div>
      </div>
    </div>
  );
}
