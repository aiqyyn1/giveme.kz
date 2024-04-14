'use client';
import React from 'react';
import { useFormik } from 'formik';
import { validationSchema } from '../lib/validation';
import Input from '../../../shared/input/ui/ui';
import Button from '../../../shared/button/ui/ui';
import { useSearchParams } from 'next/navigation';
import { usePostResetMutation } from '../api/api';

const ResetForm = () => {
  const tokenParams = useSearchParams();
  const token = new URLSearchParams(tokenParams.toString()).get('token');

  const [postReset, { isLoading, isError }] = usePostResetMutation();

  const formik = useFormik({
    initialValues: {
      Password: '',
      Confirm_password: '',
      token: token,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postReset({ token, ...values });

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
              value={formik.values.Confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Confirm_password && formik.errors.Confirm_password ? (
              <div className="text-red-500">{formik.errors.Confirm_password}</div>
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
