import React, { useState, useEffect, useRef } from "react";
import growthStep1 from "../../../../../assets/images/growthstep1.jpeg";
import growthStep2 from "../../../../../assets/images/growthstep2.jpeg";
import growthStep3 from "../../../../../assets/images/growthstep3.jpeg";
import "./GrowthSteps.css";

const GrowthSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef(null);
  const STEP_DURATION = 2500; // 5 seconds per slide to match progress bar

  const steps = [
    {
      id: 0,
      image: growthStep1,
    },
    {
      id: 1,
      image: growthStep2,
    },
    {
      id: 2,
      image: growthStep3,
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current);
  }, [steps.length, isPaused]); // Re-run when pause state changes

  const handleStepClick = (index) => {
    setActiveStep(index);
    resetTimer();
  };

  return (
    <section className="growth-steps-section">
      <div className="container">
        <div className="growth-card">
          <div className="row align-items-center g-0">
            {/* Left Side: Text Content */}
            <div className="col-lg-5">
              <div className="growth-text-content">
                <h2 className="growth-title">
                  Start Growing in <br /> Just 3 Simple Steps
                </h2>
                <p className="growth-description">
                  We assess your goals, craft a tailored strategy, and finally
                  implement it so you can confidently grow your business.
                </p>
                <a href="#" className="btn-consultation">
                  Book a free consultation
                </a>
              </div>
            </div>

            {/* Right Side: Slider & Images */}
            <div
              className="col-lg-7"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="growth-image-wrapper">
                {/* Slides */}
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`growth-slide ${activeStep === index ? "active" : ""}`}
                  >
                    <img src={step.image} alt={step.label} />
                  </div>
                ))}

                {/* Step Navigation Overlay */}
                <div className="step-nav-container">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`step-nav-item ${activeStep === index ? "active" : ""}`}
                      onClick={() => handleStepClick(index)}
                    >
                      <span className="step-label">STEP 0{index + 1}</span>
                      <div className="step-bar-bg">
                        <div className="step-bar-fill"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSteps;
