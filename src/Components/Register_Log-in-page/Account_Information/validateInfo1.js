export default function validateInfo1(values1) {
    let errors1 = {};
  
    if (!values1.username.trim()) {
      errors1.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values1.name.trim())) {
    //   errors1.name = 'Enter a valid name';
    // }
  
   
    if (!values1.password) {
      errors1.password = 'Password is required';
    } else if (values1.password.length < 6) {
      errors1.password = 'Minimum eight characters, at least one letter, one number and one special character'
    }
  
    if (!values1.password2) {
      errors1.password2 = 'Password is required';
    } else if (values1.password2 !== values1.password) {
      errors1.password2 = 'Passwords do not match';
    }
    return errors1;
  }