import React from 'react';
import Input from '../../../shared/input/ui/ui';
import Button from '../../../shared/button/ui/ui';
import { useFormik } from 'formik';
import { validationSchema } from '../lib/validation';
import { usePostOrderMutation } from '../api/api';

const Order = ({ id, onClose }) => {
  const [postOrder] = usePostOrderMutation();
  const formik = useFormik({
    initialValues: { contact_name: '', phone_number: '', city: '', address: '', item_id: id },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await postOrder(values);
        if (onClose) onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[400px] rounded-lg shadow-lg p-5">
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">Your order</span>
          <button onClick={onClose} className="text-lg font-bold">&times;</button>
        </div>
        <form onSubmit={formik.handleSubmit} className="mt-5">
          <div className="flex flex-col gap-6">
            <div>
              <Input
                placeholder="Name"
                text="Your name"
                name="contact_name"
                value={formik.values.contact_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.contact_name && formik.errors.contact_name && (
                <div className="text-red-500">{formik.errors.contact_name}</div>
              )}
            </div>

            <div>
              <Input
                placeholder="Phone"
                text="Phone"
                name="phone_number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone_number && formik.errors.phone_number && (
                <div className="text-red-500">{formik.errors.phone_number}</div>
              )}
            </div>

            <div>
              <Input
                placeholder="City"
                text="City"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city && (
                <div className="text-red-500">{formik.errors.city}</div>
              )}
            </div>

            <div>
              <Input
                placeholder="Address"
                text="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-red-500">{formik.errors.address}</div>
              )}
            </div>

            <Button text="Order" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
