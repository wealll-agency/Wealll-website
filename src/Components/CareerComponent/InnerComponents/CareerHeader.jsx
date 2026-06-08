import React from 'react';
import careerTeam from "../../../assets/images/career-team.jpeg";
import creativebgImage from "../../../assets/images/creativebg.png";

const CareerHeader = () => {

    const bgStyle = {
        backgroundImage: `url(${creativebgImage})`,
    };

    return (
        <div className="career-header">
            <div className="container">
                <div className="hero__content_Inner position-relative text-center">
                    <h1 className="main-title">
                        Careers at
                        <span className="creative-bg" style={bgStyle}>
                            We Alll
                        </span>{" "}
                    </h1>
                    <p>At We Alll, our office is more than just a space — it’s where ideas are born, collaborations flourish, <br /> and creativity thrives. Ready to be part of our journey? Let’s create something extraordinary together!</p>
                    <div className='career_img_box'>
                        <img src={careerTeam} alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CareerHeader;
