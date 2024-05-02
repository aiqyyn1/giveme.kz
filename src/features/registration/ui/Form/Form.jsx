'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../../shared/input/ui/ui';
import Button from '../../../../shared/button/ui/ui';
import Image from 'next/image';
import { usePostRegisterMutation } from '../../api/api';
import { useSelector } from 'react-redux';
import { validationSchema } from '../../lib/validation';
import logo from '../../../../../public/assets/givemeBlack.svg';
import Link from 'next/link';
import Modal from '../../../../shared/modal/Modal';
import right from '../../../../../public/assets/right.svg';
const FormForgotPassword = () => {
  const data = useSelector((state) => state.auth);
  const [isRight, setIsRight] = useState(false);
  const [postRegister, { isLoading, isError }] = usePostRegisterMutation();
  const formik = useFormik({
    initialValues: data,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postRegister(values);
        setIsRight(true);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white w-[400px] h-[626.67px] " onSubmit={formik.handleSubmit}>
        <div className="flex justify-center items-center gap-7 flex-col">
          <div className="mt-10">
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex gap-16  font-DM text-lg justify-center">
            <Link href="/login">Sign In</Link>
            <Link href="/register" className="border-b-4 w-40 text-center border-black pb-1">
              Register
            </Link>
          </div>
        </div>
        <div className="ml-5 flex flex-col gap-6 mt-5">
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
              placeholder="Surname"
              text="Your Surname"
              name="Surname"
              value={formik.values.Surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Surname && formik.errors.Surname ? (
              <div className="text-red-500">{formik.errors.Surname}</div>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Email"
              text="Email"
              name="Email"
              type="email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div className="text-red-500">{formik.errors.Email}</div>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Password"
              text="Password"
              name="Password"
              type="password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Password && formik.errors.Password ? (
              <div className="text-red-500">{formik.errors.Password}</div>
            ) : null}
          </div>
          <div>
            <Button text="Register" type="submit" />
          </div>
          <div className="font-inter text-sm">
            <span>
              I agree to the processing of my data <br /> in{' '}
              <span className="font-bold">GIVEMEKZ</span>. I confirm that I am of age and
              <br />
              responsible for posting items
            </span>
          </div>
        </div>
      </form>
      {isRight && (
        <Modal isOpen={isRight} text="Congratulations" onClose={() => setIsRight(false)}>
          <div className="flex justify-center flex-col items-center gap-6">
            <Image src={right} className="mt-2"></Image>
            <p className="text-lg font-semibold text-[22px] text-green_color">
              You are successfully registred
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FormForgotPassword;
