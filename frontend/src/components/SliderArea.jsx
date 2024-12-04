import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.min.css';
import '../css/flaticon.css';
import '../css/gijgo.css';
import '../css/magnific-popup.css';
import '../css/font-awesome.min.css';
import '../css/style.css';
import '../css/slicknav.css';
import '../css/theme-default.css';
import '../css/themify-icons.css';
import '../css/owl.carousel.min.css';
import '../css/nice-select.css';
import './global_animation.css'
import s1 from '../img/shape/shape_1.svg';
import s2 from '../img/shape/shape_2.svg';

const SliderArea = () => {
  return (
    <div className="slider_area">
      <div className="single_slider d-flex align-items-center slider_bg_1 overlay">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12">
              <div className="slider_text text-center shake">
                <div
                  className="shape_1 wow fadeInUp animated"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <img src={s1} alt="Shape 1" className="rotate" />
                </div>
                <div
                  className="shape_2 wow fadeInDown animated"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <img src={s2} alt="Shape 2" className="rotate" />
                </div>
                <span
                  className="wow fadeInLeft animated"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  12 Feb, 2025
                </span>
                <h3
                  className="wow fadeInLeft animated"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  Concert 2025
                </h3>
                <p
                  className="wow fadeInLeft animated"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                >
                  Sayaji, Indore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderArea;
