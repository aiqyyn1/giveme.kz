'use client';
import React from 'react';
import Input from '../../../shared/input/ui/ui';
import Button from '../../../shared/button/ui/ui';
import { useFormik } from 'formik';
import { validationSchema } from '../lib/validation';
import { usePostOrderMutation } from '../api/api';
const Order = ({ id }) => {
  const [postOrder, { data }] = usePostOrderMutation();
  const formik = useFormik({
    initialValues: { contact_name: '', phone_number: '', city: '', address: '', item_id: id },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postOrder(values);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white w-[400px] h-[568.67px]" onSubmit={formik.handleSubmit}>
          <div className="flex justify-center items-center gap-7 flex-col"></div>

          <div className="ml-5 flex flex-col gap-6 mt-5">
            <span className="font-bold text-xl mt-4">Your order</span>
            <div>
              <Input
                placeholder="Name"
                text="Your name"
                name="contact_name"
                value={formik.values.contact_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.contact_name && formik.errors.contact_name ? (
                <div className="text-red-500">{formik.errors.contact_name}</div>
              ) : null}
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
              {formik.touched.phone_number && formik.errors.phone_number ? (
                <div className="text-red-500">{formik.errors.phone_number}</div>
              ) : null}
            </div>

            <div>
              <Input
                placeholder="Address"
                text="City"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-500">{formik.errors.city}</div>
              ) : null}
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
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500">{formik.errors.address}</div>
              ) : null}
            </div>
            <div>
              <Button text="Order" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
