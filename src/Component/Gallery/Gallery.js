import React, { useEffect } from 'react';
import AOS from 'aos';
import '../../index.css';
import './Gallery.css';
import Image1 from '../../Assets/Gallery/image1.jpg';
import Image2 from '../../Assets/Gallery/image2.jpg';
import Image3 from '../../Assets/Gallery/image3.jpg';
import Image4 from '../../Assets/Gallery/image4.jpg';
import Image5 from '../../Assets/Gallery/image5.jpg';
import Image6 from '../../Assets/Gallery/image6.jpg';
import Image7 from '../../Assets/Gallery/image7.jpg';
import Image8 from '../../Assets/Gallery/image8.jpg';
import Image9 from '../../Assets/Gallery/image9.jpg';
import Image10 from '../../Assets/Gallery/image10.jpg';
import Image11 from '../../Assets/Gallery/image11.jpg';
import Image12 from '../../Assets/Gallery/image12.jpg';
import Image13 from '../../Assets/Gallery/image13.jpg';
import Image14 from '../../Assets/Gallery/image14.jpg';
import Image15 from '../../Assets/Gallery/image15.jpg';
import Image16 from '../../Assets/Gallery/image16.jpg';
import Image17 from '../../Assets/Gallery/image17.jpg';
import Image18 from '../../Assets/Gallery/image18.jpg';
import Image19 from '../../Assets/Gallery/image19.jpg';
import Image20 from '../../Assets/Gallery/image20.jpg';
import Image21 from '../../Assets/Gallery/image21.jpg';
import Image22 from '../../Assets/Gallery/image22.jpg';
import Image23 from '../../Assets/Gallery/image23.jpg';
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });
  return (
    <main className="gallery_container">
      <section className="gallery_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">GALLERY</h1>
      </section>
      <section className="gallery_section">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img className="gallery_image" src={Image8} alt="gallery_image" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img className="gallery_image" src={Image7} alt="gallery_image" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img className="gallery_image" src={Image1} alt="gallery_image" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image9}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image15}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image2}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image10}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image14}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image3}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image11}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image16}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image4}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image12}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image17}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image5}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image13}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image21}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image6}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image18}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image19}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image20}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image22}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around gallery_divs">
            <img
              className="gallery_image"
              src={Image23}
              alt="gallery_image"
              data-aos="fade-down"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
