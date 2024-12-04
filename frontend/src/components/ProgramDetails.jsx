import '../css/animate.css';
import './global_animation.css'; // Import the global animation CSS
import '../css/bootstrap.min.css';
import '../css/flaticon.css';
import '../css/style.css';
import p1 from '../img/program_details/1.png';
import p2 from '../img/program_details/2.png';
import p3 from '../img/program_details/3.png';
import p4 from '../img/program_details/4.png';
import { useEffect, useState } from 'react';

const ProgramDetails = () => {
  const programs = [
    {
      time: "3.00-4.00pm",
      date: "12 Feb 2020",
      imgSrc: p1,
      name: "Mr. Zosoldos",
      delayClass: "delay-1",
    },
    {
      time: "3.00-4.00pm",
      date: "12 Feb 2020",
      imgSrc: p2,
      name: "Mr. Zosoldos",
      delayClass: "delay-2",
    },
    {
      time: "3.00-4.00pm",
      date: "12 Feb 2020",
      imgSrc: p3,
      name: "Mr. Zosoldos",
      delayClass: "delay-3",
    },
    {
      time: "3.00-4.00pm",
      date: "12 Feb 2020",
      imgSrc: p4,
      name: "Mr. Zosoldos",
      delayClass: "delay-4",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 2800); // Adjust offset based on your design
    console.log(scrolled)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {scrolled && (
        <div className="program_details_area detials_bg_1 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title text-center mb-80 fadeInRight delay-1">
                  <h3>Program Details</h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="program_detail_wrap">
                  {programs.map((program, index) => (
                    <div key={index} className="single_propram">
                      <div className="inner_wrap">
                        <div className="circle_img"></div>
                        <div className="porgram_top">
                          <span className={`fadeInLeft ${program.delayClass}`}>
                            {program.time}
                          </span>
                          <h4 className={`fadeInUp ${program.delayClass}`}>
                            {program.date}
                          </h4>
                        </div>
                        <div
                          className={`thumb fadeInUp ${program.delayClass}`}
                        >
                          <img
                            src={program.imgSrc}
                            alt={program.name}
                            className={`fadeInUp ${program.delayClass}`}
                          />
                        </div>
                        <h4 className={`fadeInUp ${program.delayClass}`}>
                          {program.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramDetails;
