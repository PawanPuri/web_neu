import React, { useState, useEffect } from 'react';
import '../css/animate.css';
import '../css/bootstrap.min.css';
import '../css/flaticon.css';
import '../css/style.css'; // Your animation classes here
import p1 from '../img/performer/1.png';
import p2 from '../img/performer/2.png';
import p3 from '../img/performer/3.png';
import p4 from '../img/performer/4.png';

const performers = [
  { name: "Mr. Zosoldos", role: "Acoustic drum", img: p1, delay: "delay-1" },
  { name: "Protik Hasan", role: "Acoustic drum", img: p2, delay: "delay-2" },
  { name: "Salmon Vicky", role: "Acoustic drum", img: p3, delay: "delay-3" },
  { name: "Filaris Habol", role: "Acoustic drum", img: p4, delay: "delay-4" },
];

const PerformerArea = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 37); // Adjust to trigger animations
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {scrolled && (
        <div className="performar_area black_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title mb-80 fadeIn delay-1">
                  <h3>Performer</h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="row">
                  {performers.map((performer, index) => (
                    <div className="col-lg-6 col-md-6 fadeIn" key={index}>
                      <div
                        className={`single_performer fadeIn ${performer.delay}`}
                      >
                        <div className="thumb">
                          <img
                            src={performer.img}
                            alt={performer.name}
                            className={`fadeIn ${performer.delay}`}
                          />
                        </div>
                        <div className="performer_heading">
                          <h4>{performer.name}</h4>
                          <span>{performer.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformerArea;
