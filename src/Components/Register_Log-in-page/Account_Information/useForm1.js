import { useState, useEffect } from 'react';

const useForm1 = (callback, validate1) => {
  const [values1, setValues1] = useState({
    username: '',
    password: '',
    password2: ''
  });
  const [errors1, setErrors1] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange1 = e => {
    const { name, value } = e.target;
    setValues1({
      ...values1,
      [name]: value
    });
  };

  const handleSubmit1 = e => {
    e.preventDefault();

    setErrors1(validate1(values1));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors1).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors1]
  );

  return { handleChange1, handleSubmit1, values1, errors1 };
};

export default useForm1;