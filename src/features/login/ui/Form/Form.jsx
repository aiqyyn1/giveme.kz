'use client';
import React, { useState } from 'react';
import { setToken } from '../../lib/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationSchema } from '../../lib/validation';
import Input from '../../../../shared/input/ui/ui';
import Button from '../../../../shared/button/ui/ui';
import Image from 'next/image';
import logo from '../../../../../public/assets/givemeBlack.svg';
import Link from 'next/link';
import { usePostLoginMutation } from '../../api/api';
import { useRouter } from 'next/navigation';
import Modal from '../../../../shared/modal/Modal';
import wrong from '../../../../../public/assets/wrong.svg';
const Form = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.token);
  const [postLogin, { isError, isLoading, data }] = usePostLoginMutation();
  const router = useRouter();
  const [isWrong, setIsWrong] = useState(false);
  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postLogin(values);

        const accessToken = response.data.access;
        const refreshToken = response.data.access;
        dispatch(setToken({ cookieName: 'access', token: accessToken, exprireHours: 1 }));
        dispatch(setToken({ cookieName: 'refresh', token: refreshToken, exprireHours: 7 }));
        router.push('/main');
      } catch (error) {
        console.log(error);
        setIsWrong(true);
      }
    },
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white w-[377px] h-[540.67px] rounded-lg" onSubmit={formik.handleSubmit}>
        <div className="flex justify-center items-center gap-7 flex-col">
          <div className="mt-10">
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex gap-10 font-DM text-lg justify-center">
            <Link href="/login" className="border-b-4 border-black w-40 text-center">
              Sign In
            </Link>
            <Link href="/register" className="">
              Register
            </Link>
          </div>
        </div>
        <div className="ml-5 flex flex-col gap-6 mt-5">
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
            <Link href="/forgot-password" className="text-xl font-bold">
              Forgot Password ?
            </Link>
          </div>
          <div>
            <Button text="Войти" />
          </div>
          <div className="font-inter text-sm text-center">
            <span className=''>
              By logging in you agree to our <span className="font-bold "> Terms of Use. </span>{' '}
            </span>
          </div>
        </div>
      </form>
      {isWrong && (
        <Modal isOpen={isWrong} text="Try" onClose={() => setIsWrong(false)}>
          <div className="flex justify-center flex-col items-center gap-6">
            <Image src={wrong} className="mt-2"></Image>
            <p className="text-lg font-semibold text-[22px] text-red_button">
              Try again. Something went wrong.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Form;
