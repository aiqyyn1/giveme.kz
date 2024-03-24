import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
  Email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .min(4, 'Email must be at least 4 characters')
    .max(320, 'Email must not exceed 320 characters'),
  Password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must not exceed 64 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=])[0-9a-zA-Z!@#$%^&*()-_+=]{8,64}$/,
      'Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character'
    )
    .required('Password is required'),
});