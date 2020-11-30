import React, { useState } from 'react';
import "../RegisterPage-1/registerPage_one.css"
import RegisterPageOne from "./RegisterPageOne"
import VerificationPage from "../Verification-code_Page/VerificationPage"




const Form1 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }

    return(
        <div>

        
        {!isSubmitted ? (
          <RegisterPageOne submitForm={submitForm} />
        ) : (
          <VerificationPage />
        )}
        </div>
    )


}


export default Form1;
    