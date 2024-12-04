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

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top Section */}
      <div className="footer_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="footer_widget">
                <div className="address_details text-center">
                  <h4
                    className="wow fadeInUp animated"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    12 Feb, 2025
                  </h4>
                  <h3
                    className="wow fadeInUp animated"
                    data-wow-duration="1s"
                    data-wow-delay=".4s"
                  >
                    SayaJi, Indore M.P
                  </h3>
                  <p
                    className="wow fadeInUp animated" 
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    The event regularly attracts a diverse range of attendees
                    from around the world.
                  </p>
                  <a
                    href="#"
                    className="boxed-btn3 wow fadeInUp animated"
                    data-wow-duration="1s"
                    data-wow-delay=".6s"
                  >
                    Buy Tickets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="copy-right_text">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <p
                className="copy_right text-center wow fadeInDown animated"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                Copyright &copy;{" "}
                <script>
                  {`document.write(new Date().getFullYear());`}
                </script>{" "}
                All rights reserved @WebNeuron{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  Solution
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
