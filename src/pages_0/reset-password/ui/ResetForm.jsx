'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../../shared/input/ui/ui';
import Button from '../../../shared/button/ui/ui';
import { useSearchParams } from 'next/navigation';
import { usePostResetMutation } from '../api/api';

const ResetForm = () => {
  const tokenParams = useSearchParams();
  const token = new URLSearchParams(tokenParams.toString()).get('token');

  const [postReset, { isLoading, isError }] = usePostResetMutation();
  const validationSchema = Yup.object().shape({
    Password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    Confirm_password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .oneOf([Yup.ref('Password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      Password: '',
      Confirm_password: '',
      token: token,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postReset({ token, ...values }); // Pass token along with form values
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="bg-white w-[400px] h-[330.67px] rounded-lg " onSubmit={formik.handleSubmit}>
        <div className="ml-5 flex flex-col gap-6 mt-5">
          <div>
            <Input
              placeholder="Password"
              text="Password"
              name="Password"
              type="Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Password && formik.errors.Password ? (
              <div className="text-red-500">{formik.errors.Password}</div>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="New password"
              text="New password"
              name="Confirm_password"
              type="Password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirm_password && formik.errors.confirm_password ? (
              <div className="text-red-500">{formik.errors.confirm_password}</div>
            ) : null}
          </div>
          <div>
            <Button text="Отправить" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetForm;
