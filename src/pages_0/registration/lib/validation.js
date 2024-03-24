import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .matches(/^[A-Z][a-zA-Z]*$/, 'Name must start with an uppercase letter')
    .required('Name is required'),
  Surname: Yup.string()
    .min(2, 'Surname must be at least 2 characters')
    .max(50, 'Surname must not exceed 50 characters')
    .matches(/^[A-Z][a-zA-Z]*$/, 'Surname must start with an uppercase letter')
    .required('Surname is required'),
  Email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  Password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must not exceed 64 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=])[0-9a-zA-Z!@#$%^&*()-_+=]{8,64}$/,
      'Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character'
    )
    .required('Password is required'),
});
