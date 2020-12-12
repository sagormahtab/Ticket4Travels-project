import React, { useState } from 'react';
import AccountInformation from "../Account_Information/AcountInfomation"
import AdditionalInformation from "../Additional-Information-part/AdditionalInformation"




const Form2 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm1() {
      setIsSubmitted(true);
    }
    return (
      <>
         {!isSubmitted ? (
          <AccountInformation submitForm1={submitForm1} />
        ) : (
          <AdditionalInformation />
        )}
      </>
    );
  };
  
  export default Form2;