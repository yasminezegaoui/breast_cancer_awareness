/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import './selfexamination.css';
import Navbar from '../../components/navbar/Navbar';
import Step1 from '../../assets/step-1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';
import Step4 from '../../assets/step4.png';
import Step5 from '../../assets/step5.png';
import Step6 from '../../assets/step6.png'
import MV from '../../assets/1018.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import maleImg from '../../assets/male.png';
import femaleImg from '../../assets/female.png';
import Step1Men from '../../assets/step1-men.PNG';
import Step2Men from '../../assets/step2-men.PNG';
import Step3Men from '../../assets/step3-men.PNG';
import Step4Men from '../../assets/step4-men.PNG';
import Gift from '../../assets/Gift-1.png'
import { useNavigate } from 'react-router-dom';
import donate from '../../assets/donate.PNG'

const steps = [
    {
        title: "Step 01:",
        image: Step1,
        description: "Stand in front of the mirror and check visually for any changes in the shape, size, and color of your breasts and nipples."
    },
    {
        title: "Step 02:",
        image: Step2,
        description: "Raise your arms to check your breasts again, and slowly turn around to examine from the sides as well."
    },
    {
        title: "Step 03:",
        image: Step3,
        description: "Put your hands on your hips and bend forward. Visually scan for any differences."
    },
    {
        title: "Step 04:Left breast",
        image: Step4,
        description: "Start from the collarbone, using your right hand to feel your breast with three fingers in a spiral pattern."
    },
    {
        title: "Step 05:Right breast",
        image: Step5,
        description: "Switch to your left hand to examine the opposite breast, using a vertical or spiral motion."
    },
    {
        title: "Step 06:",
        image: Step6,
        description: "Finish the examination in a lying position, and repeat the same process as the standing position."
    },
    {
        title: "Finished",
        image: donate,
        description: ""
    }
];

const steps_men = [
    {
        title: "Step 01:",
        image: Step1Men,
        description: "stand in front of the mirror .check visually to see if there is any chaposition of breast and nipplesnge in size, shape, colour and position of breast and nipples ."
    },
    {
        title: "Step 02:",
        image: Step2Men,
        description: "examine the nipples for any lumps, bleeding or discharge ."
    },
    {
        title: "Step 03:",
        image: Step3Men,
        description: "start from the collarbone, use your right hand to feel your breast, with your three fingers close together , probe in one of these three patterns , patting gently then press harder until you feel your rib cage ."
    },
    {
        title: "Step 04:",
        image: Step4Men,
        description: "start from the collarbone, use your right hand to feel your breast, with your three fingers close together , probe in one of these three patterns , patting gently then press harder until you feel your rib cage ."
    },
    {
        title: "Finished",
        image: donate,
        description: ""
    }
];

const SelfExamination = () => {
    // women
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep <= steps.length) {
        setCurrentStep(prevStep => prevStep + 1);
        }
    };

    const current = steps[currentStep - 1];

    // gender
    const [selectedGender, setSelectedGender] = useState(null); 
    

    const navigate = useNavigate();

    const exitTest = () => {
        navigate('/cancer_info');
    };

    // men 
    const [currentStepMen, setCurrentStepMen] = useState(1);

    const nextStepMen = () => {
        if (currentStepMen < steps_men.length) {
        setCurrentStepMen(prevStep => prevStep + 1);
        }
    };

    const currentMen = steps_men[currentStepMen - 1];

  return (
    <>
    <Navbar/>
    {/* Gender selection */}
    {selectedGender === null ? (
        <div className='Gender-container-wrapper'>
          <div className="Gender-container">
            <h1>Select Your <span>Gender</span></h1>
            <div className="gender-selector">
              <div className="gender-option male" onClick={() => setSelectedGender('male')}>
                <img src={maleImg} alt="Male" />
                <p></p>
              </div>
              <div className="gender-option female" onClick={() => setSelectedGender('female')}>
                <img src={femaleImg} alt="Female" />
                <p></p>
              </div>
            </div>
            <button onClick={exitTest}>Exit Test</button>
          </div>
        </div>
      ) : selectedGender === 'female' ? (
        // Female self-examination steps
        <>
        <div id='wrapper'>
           <div className="step-container">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                <div className={`step ${currentStep >= index + 1 ? 'completed' : ''}`} id={`step-${index + 1}`}>
                    <div className={`circle ${currentStep >= index + 1 ? 'completed' : ''}`}>
                    {/* Show number if step is not completed, otherwise show check icon */}
                    {currentStep > index + 1? (
                        <FontAwesomeIcon icon={faCheck} />
                    ) : (
                        // If it's the last step, display the image instead of the number
                        index + 1 === 7 ? (
                          <img src={Gift}  alt= "" className="circle-container" />
                        ) : (
                          // Display the step number for other steps
                          <span>{index + 1}</span>
                        )
                    )}
                    </div>
                    
                </div>
                {index < steps.length - 1 && <div className="line"></div>}
                </React.Fragment>
            ))}
            </div>
          
          <section className="step-content">
            <h2>{current.title}</h2>
            <div className="image-container">
              <img id="step-image" src={current.image} alt={current.title} />
            </div>
            <p id="step-description">{current.description}</p>

            <div className="button-container">
              <button className="action-button next-button" onClick={nextStep}>
                {currentStep === steps.length ? 'Donate' : 'Everything is Okay'}
              </button>
              <button className="action-button next-button" onClick={nextStep}>
                {currentStep === steps.length ? '' : 'I felt something unusual'}
              </button>
            </div>
          </section>
          <div className="watch-video">
            <a href={MV} className="video-button" target="_blank" rel="noopener noreferrer">Watch the 3D Video</a>
          </div>
          </div>
        </>
      ) : (
        // Male self-examination steps
        <>
        <div id='wrapper'>
          <div className="step-container">
            {steps_men.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`step ${currentStepMen >= index + 1 ? 'completed' : ''}`} id={`step-${index + 1}`}>
                  <div className={`circle ${currentStepMen >= index + 1 ? 'completed' : ''}`} id='circle'>
                    {/* Show number if step is not completed, otherwise show check icon */}
                    {currentStepMen > index + 1 ? (
                        <FontAwesomeIcon icon={faCheck} />
                    ) : (
                        // If it's the last step, display the image instead of the number
                        index + 1 === 5 ? (
                          <img src={Gift}  alt= "" className="circle-container" />
                        ) : (
                          // Display the step number for other steps
                          <span id='span'>{index + 1}</span>
                        )
                    )}
                  </div>
                </div>
                {index < steps_men.length - 1 && <div className="line" id='line'></div>}
              </React.Fragment>
            ))}
          </div>

          <section className="step-content" id='step-content'>
            <h2 id='step-title'>{currentMen.title}</h2>
            <div className="image-container">
              <img id="step-image" src={currentMen.image} alt={currentMen.title} />
            </div>
            <p id="step-description">{currentMen.description}</p>

            <div className="button-container">
              <button className="action-button next-button" onClick={nextStepMen} id='action-button'>
                {currentStepMen === steps_men.length ? 'Donate' : 'Everything is Okay'}
              </button>
              <button className="action-button next-button" onClick={nextStepMen} id='action-button'>
                {currentStepMen === steps_men.length ? "" : 'I felt something unusual'}
              </button>
            </div>
          </section>
          <div className="watch-video">
            <a href={MV} className="video-button" target="_blank" rel="noopener noreferrer">Watch the 3D Video</a>
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default SelfExamination
