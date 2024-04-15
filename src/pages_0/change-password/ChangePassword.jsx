'use client';
import React from 'react';
import Input from '../../shared/input/ui/ui';
import Button from '../../shared/button/ui/ui';
import { usePostChangePassMutation } from './api/api';
import { useFormik } from 'formik';
const ChangePassword = () => {
  const [postPasswords] = usePostChangePassMutation();
  const formik = useFormik({
    initialValues: { Old_password: '', New_password: '', Confirm_password: '' },
    onSubmit: async (values) => {
      try {
        const response = await postPasswords(values);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        className="bg-white w-[400px] h-[400.67px] rounded-lg  shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <div className="ml-5 flex flex-col gap-6 mt-5">
          <div>
            <Input
              placeholder="Password"
              text="Old password"
              name="Old_password"
              type="password"
              value={formik.values.Old_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Old_password && formik.errors.Old_password ? (
              <div className="text-red-500">{formik.errors.Old_password}</div>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Password"
              text="New password"
              name="New_password"
              type="password"
              value={formik.values.New_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.New_password && formik.errors.New_password ? (
              <div className="text-red-500">{formik.errors.New_password}</div>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Password"
              text="Confirm password"
              name="Confirm_password"
              type="password"
              value={formik.values.Confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Confirm_password && formik.errors.Confirm_password ? (
              <div className="text-red-500">{formik.errors.Confirm_password}</div>
            ) : null}
          </div>
          <div>
            <Button text="Change" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
