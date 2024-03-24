export const validationSchema = Yup.object().shape({
  Email: Yup.string().email('Invalid email').required('Email is required'),
});