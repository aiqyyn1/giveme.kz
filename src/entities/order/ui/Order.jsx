'use client';
import React from 'react';
import Input from '../../../shared/input/ui/ui';
import Button from '../../../shared/button/ui/ui';
import { useFormik } from 'formik';
import { validationSchema } from '../lib/validation';
const Order = () => {
  const formik = useFormik({
    initialValues: { Name: '', Phone: '', City: '', Address: '' },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // const response = await postForgot(values);
        // console.log(response);
        console.log(values);
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
                name="Name"
                value={formik.values.Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.Name && formik.errors.Name ? (
                <div className="text-red-500">{formik.errors.Name}</div>
              ) : null}
            </div>
            <div>
              <Input
                placeholder="Phone"
                text="Phone"
                name="Phone"
                value={formik.values.Phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.Phone && formik.errors.Phone ? (
                <div className="text-red-500">{formik.errors.Phone}</div>
              ) : null}
            </div>

            <div>
              <Input
                placeholder="Address"
                text="City"
                name="City"
                value={formik.values.City}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.City && formik.errors.City ? (
                <div className="text-red-500">{formik.errors.City}</div>
              ) : null}
            </div>
            <div>
              <Input
                placeholder="Address"
                text="Address"
                name="Address"
                value={formik.values.Address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.Address && formik.errors.Address ? (
                <div className="text-red-500">{formik.errors.Address}</div>
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
