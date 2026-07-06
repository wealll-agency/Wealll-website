import React from 'react';
const careerTeam = mediaUrl("assets/images/career-team.jpeg");
const creativebgImage = mediaUrl("assets/images/creativebg.png");
import { mediaUrl } from "../../../config/media";

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
                        <img src={careerTeam} alt="" loading="lazy" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CareerHeader;
