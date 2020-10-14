import React, { useState } from 'react';
import "../RegisterPage-1/registerPage_one.css"
import RegisterPage_one from "../RegisterPage-1/RegisterPage_one"
import VerificationPage from "../Verification-code_Page/VerificationPage"




const Form1 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }

    return(
        <div>

        
        {!isSubmitted ? (
          <RegisterPage_one submitForm={submitForm} />
        ) : (
          <VerificationPage />
        )}
        </div>
    )


}


export default Form1;
    