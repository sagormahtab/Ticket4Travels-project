import React from "react";
import "../Header-part2/header2.css";
import Booking from "../Booking-Partt/Booking";
import Payment from "../payment-part/Payment";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function getSteps() {
  return ["Book", "Pay", "Process", "E-Ticekt"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Booking />;
    case 1:
      return <Payment />;
    case 2:
      return "Process page";
    case 3:
      return "E-Ticekt page";
    default:
      return "Unknown step";
  }
}

const Header2 = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="head">
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-12 col-12">
            {/* <h2 className="font-bold txt1">Tickets4Travels<img src={logo} width="90px" height="50px"></img></h2> */}
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className="text-center">
                    <h2>Thank you..</h2>
                    <h5>You will get an email with further instructions</h5>
                  </Typography>
                  <Button onClick={handleReset} className="text-center">
                    Reset
                  </Button>
                </div>
              ) : (
                <div>
                  <Typography>{getStepContent(activeStep)}</Typography>
                  <div className="text-center">
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className="mt-5"
                    >
                      Back
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className="mt-5 px-5 "
                    >
                      {activeStep === steps.length - 1
                        ? "Confirm & Submit"
                        : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
