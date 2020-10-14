export default function validateInfo(values) {
    let errors = {};
  
    
    if (!values.phone) {
        errors.phone = 'Phone is required';
      } else if (/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(values.phone.trim())) {
        errors.phone = 'Phone Number is invalid';
      }


    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
   
    
  
   
    return errors;
  }