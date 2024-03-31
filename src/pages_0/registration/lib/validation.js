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
  Email: Yup.string().email('Invalid email').required('Email is required'),
  Password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must not exceed 64 characters')
    .matches(
      /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
      'Password must contain one special character'
    )
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/[A-Z]/, 'Password must contain one uppercase  letter')
    .matches(/[a-z]/, 'Password must contain one lowercase letter')
    .required('Password is required'),
});
