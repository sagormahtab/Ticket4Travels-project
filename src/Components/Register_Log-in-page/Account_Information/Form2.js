import React, { useState } from 'react';
import AccountInformation from "../Account_Information/AcountInfomation"
import Additional_Information from "../Additional-Information-part/Additional_Information"




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
          <Additional_Information />
        )}
      </>
    );
  };
  
  export default Form2;