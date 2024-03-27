'use client';
import React from 'react';
import { useFormik } from 'formik';
import { validationSchema } from '../../lib/validation';
import Input from '../../../../shared/input/ui/ui';
import Button from '../../../../shared/button/ui/ui';
import Image from 'next/image';
import arrow from '../../../../../public/assets/arrowLeft.svg';
import Link from 'next/link';
import { usePostForgotMutation } from '../../api/api';
const Form = () => {
  const [postForgot, { isLoading, isError }] = usePostForgotMutation();

  const formik = useFormik({
    initialValues: { Email: '' },
    validationSchema: validationSchema, // Pass the validation schema to useFormik hook
    onSubmit: async (values) => {
      try {
        const response = await postForgot(values);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="bg-white w-[400px] h-[450.67px] rounded-lg " onSubmit={formik.handleSubmit}>
        <div className="ml-5 flex flex-col gap-6 mt-5">
          <Link href="/login" className="bg-buttonColor w-5 p-6 rounded-3xl relative">
            <Image
              src={arrow}
              alt="arrow"
              className="absolute left-3 top-3"
              width={25}
              height={25}
            ></Image>
          </Link>
          <span className="text-[32px] font-bold font-DM">
            Forgot your <br />
            password?
          </span>
          <span>We will set and send you a new password to your email.</span>
          <div>
            <Input
              placeholder="Email"
              text="Email"
              name="Email"
              type="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div className="text-red-500">{formik.errors.Email}</div>
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

export default Form;
