
import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
  Password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  Confirm_password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .oneOf([Yup.ref('Password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
