import "../css/bootstrap.min.css";
import "../css/owl.carousel.min.css";
import "../css/magnific-popup.css";
import "../css/font-awesome.min.css";
import "../css/themify-icons.css";
import "../css/gijgo.css";
import "../css/nice-select.css";
import "../css/animate.css";
import "../css/flaticon.css";
import "../css/slicknav.css";
import logo from "../img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ContactForm from "./contect/ContectForm";
import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  const toggleContactForm = () => {
    setShowContactForm((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showContactForm]);

  return (
    <>
      <header>
        <div className={`header-area ${scrolled ? "scrolled" : ""}`}>
          <div id="sticky-header" className="main-header-area">
            <div className="container">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3">
                    <div className="logo">
                      <a href="index.html">
                        <img src={logo} alt="Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li><a href="index.html">Home</a></li>
                          <li><a href="performer.html">Performer</a></li>
                          <li><a href="#">Pages</a></li>
                          <li><a href="/admin">Blog</a></li>
                          <li><a href="contact.html">Contact</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="buy_tkt">
                      <div
                        className="book_btn d-none d-lg-block"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleContactForm();
                        }}
                      >
                        <a href="">Register</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {showContactForm && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "90%",
              maxWidth: 500,
              backgroundColor: "#fff",
              padding: 3,
              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <IconButton
              sx={{ position: "absolute", top: 8, right: 5 }}
              onClick={toggleContactForm}
            >
              <CloseIcon />
            </IconButton>
            <ContactForm onClose={toggleContactForm} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
