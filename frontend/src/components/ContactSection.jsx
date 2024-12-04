import React, { useEffect } from 'react';
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

// Map Component
const Map = () => {
  useEffect(() => {
    function initMap() {
      const uluru = { lat: -25.363, lng: 131.044 };
      const grayStyles = [
        {
          featureType: "all",
          stylers: [{ saturation: -90 }, { lightness: 50 }]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ccdee9' }]
        }
      ];

      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -31.197, lng: 150.744 },
        zoom: 9,
        styles: grayStyles,
        scrollwheel: false
      });
    }

    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: '480px', position: 'relative', overflow: 'hidden' }}></div>;
};

// Contact Info Component
const ContactInfo = () => (
  <div className="col-lg-3 offset-lg-1">
    <div className="media contact-info">
      <span className="contact-info__icon"><i className="ti-home"></i></span>
      <div className="media-body">
        <h3>Buttonwood, California.</h3>
        <p>Rosemead, CA 91770</p>
      </div>
    </div>
    <div className="media contact-info">
      <span className="contact-info__icon"><i className="ti-tablet"></i></span>
      <div className="media-body">
        <h3>+1 253 565 2365</h3>
        <p>Mon to Fri 9am to 6pm</p>
      </div>
    </div>
    <div className="media contact-info">
      <span className="contact-info__icon"><i className="ti-email"></i></span>
      <div className="media-body">
        <h3>support@colorlib.com</h3>
        <p>Send us your query anytime!</p>
      </div>
    </div>
  </div>
);

// Contact Form Component
const ContactForm = () => {
  return (
    <div className="col-lg-8">
      <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onFocus={() => {}} onBlur={() => {}} placeholder=" Enter Message"></textarea>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input className="form-control valid" name="name" id="name" type="text" onFocus={() => {}} onBlur={() => {}} placeholder="Enter your name" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input className="form-control valid" name="email" id="email" type="email" onFocus={() => {}} onBlur={() => {}} placeholder="Email" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input className="form-control" name="subject" id="subject" type="text" onFocus={() => {}} onBlur={() => {}} placeholder="Enter Subject" />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="button button-contactForm boxed-btn">Send</button>
        </div>
      </form>
    </div>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4">
          <Map />
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
