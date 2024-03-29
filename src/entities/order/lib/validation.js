import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  contact_name: Yup.string().required(),
  phone_number: Yup.string().required(),
  city: Yup.string().required(),
  address: Yup.string().required(),
  item_id:Yup.string().required()
});
