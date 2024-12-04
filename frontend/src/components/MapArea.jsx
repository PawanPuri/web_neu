import React, { useEffect } from "react";
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
import { useState } from "react";

const MapArea = () => {
 
  useEffect(() => {
    const initMap = () => {
      const indore = { lat: 22.7196, lng: 75.8577 }; // Coordinates for Indore
      const grayStyles = [
        {
          featureType: "all",
          stylers: [{ saturation: -90 }, { lightness: 50 }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#ccdee9" }],
        },
      ];
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: indore,
        zoom: 12, // Adjust zoom level for better view of Indore
        styles: grayStyles,
        scrollwheel: false,
      });

      // Optional: Add a marker at the center of Indore
      new window.google.maps.Marker({
        position: indore,
        map: map,
        title: "Indore",
      });
    };

    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyD39i6FbvwKE1eowOE65BQfUmAoy8qUOwk&callback=initMap";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        window.initMap = initMap;
      };
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <>
    
      <div className="map_area">
      <div id="map" style={{ height: "600px", position: "relative", overflow: "hidden" }}></div>
      {/* <div
        className="location_information black_bg wow fadeInUp animated"
        data-wow-duration="1s"
        data-wow-delay=".3s"
      >
        <h3>Concert 2020</h3>
        <div className="info_wrap">
          <div className="single_info">
            <span>Venue:</span>
            <p>26/A, Coontum Avenue New York-2783</p>
          </div>
          <div className="single_info">
            <span>Phone:</span>
            <p>+10 (88) 267 368 283</p>
          </div>
          <div className="single_info">
            <span>Email:</span>
            <p>contact@concert20.com</p>
          </div>
        </div>
      </div> */}
    </div>
    
    </>
  );
};

export default MapArea;
