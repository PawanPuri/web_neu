import '../css/animate.css'
import '../css/bootstrap.min.css'
import '../css/flaticon.css'
import '../css/gijgo.css'
import '../css/magnific-popup.css'
import '../css/font-awesome.min.css'
import '../css/style.css'
import '../css/slicknav.css'
import '../css/theme-default.css'
import '../css/themify-icons.css'
import '../css/owl.carousel.min.css'
import '../css/nice-select.css'
import './global_animation.css'
import about from '../img/about/about.png'
import shake from '../img/shape/shape_3.svg'
import { useState } from 'react'
import { useEffect } from 'react'
const AboutArea = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 1900); // Adjust offset for your needs
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
   <>
   {scrolled?
    <div className="about_area black_bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section_title text-center mb-80">
            <h3
              className="wow fadeInRight animated"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              About Program
            </h3>
            <p
              className="wow fadeInRight animated"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              The event regularly attracts a diverse range of attendees from
              around the world, across different professions, and with
              different levels of experience.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6">
          <div className="about_thumb">
            <div
              className="shap_3 wow fadeInLeft animated"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <img src={shake} alt="Shape" />
            </div>
            <div
              className="thumb_inner wow fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <img src={about} alt="About" />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="about_info pl-68">
            <h4
              className="wow fadeInLeft animated"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              It’s time to book your seat
            </h4>
            <p
              className="wow fadeInLeft animated"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              The event regularly attracts a diverse range of attendees from
              around the world, across different professions, and with
              different levels of experience to transform your business.
            </p>
            <a
              href="#"
              className="boxed-btn3 wow fadeInLeft animated"
              data-wow-duration="1s"
              data-wow-delay=".7s"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  :''
   
  
  }
   </>
  );
};

export default AboutArea;
