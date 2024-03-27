import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  Email: Yup.string().email('Invalid email').required('Email is required'),
  Phone:Yup.string().required(),
  City:Yup.string().required(),
  Address:Yup.string().required()
});
