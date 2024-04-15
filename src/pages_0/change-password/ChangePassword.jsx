'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Input from '../../shared/input/ui/ui';
import Button from '../../shared/button/ui/ui';
import { usePostChangePassMutation } from './api/api';
import { useFormik } from 'formik';
import Modal from '../../shared/modal/Modal';
import right from '../../../public/assets/right.svg';
import wrong from '../../../public/assets/wrong.svg';
const ChangePassword = () => {
  const [postPasswords] = usePostChangePassMutation();
  const [isModalOpenSuccess, setModalOpenSuccess] = useState(false);
  const [isModalOpenFailed, setModalOpenFailed] = useState(false);
  const formik = useFormik({
    initialValues: { Old_password: '', New_password: '', Confirm_password: '' },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await postPasswords(values);
        if (response.data && response.data.status_code === 200) {
          setModalOpenSuccess(true);
          resetForm();
        } else {
          setModalOpenFailed(true);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white w-[400px] h-[400.67px] rounded-lg shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <div className="ml-5 flex flex-col gap-6 mt-5">
          <div>
            <Input
              placeholder="Old password"
              text="Old password"
              name="Old_password"
              type="password"
              value={formik.values.Old_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Old_password && formik.errors.Old_password && (
              <div className="text-red-500">{formik.errors.Old_password}</div>
            )}
          </div>
          <div>
            <Input
              placeholder="New password"
              text="New password"
              name="New_password"
              type="password"
              value={formik.values.New_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.New_password && formik.errors.New_password && (
              <div className="text-red-500">{formik.errors.New_password}</div>
            )}
          </div>
          <div>
            <Input
              placeholder="Confirm new password"
              text="Confirm password"
              name="Confirm_password"
              type="password"
              value={formik.values.Confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Confirm_password && formik.errors.Confirm_password && (
              <div className="text-red-500">{formik.errors.Confirm_password}</div>
            )}
          </div>
          <div>
            <Button text="Change" type="submit" />
          </div>
        </div>
      </form>
      {isModalOpenSuccess && (
        <Modal
          isOpen={isModalOpenSuccess}
          text="Congratulations, you have successfully changed your password"
          onClose={() => setModalOpenSuccess(false)}
        >
          <div className='flex justify-center flex-col items-center gap-6'>
          <Image src={right}></Image>
          <p className="text-lg font-semibold text-[22px] text-green_color">
            Congratulations, you have <br/> successfully changed your <br/>password
          </p>
          </div>
        </Modal>
      )}
      {isModalOpenFailed && (
        <Modal isOpen={isModalOpenFailed} onClose={() => setModalOpenFailed(false)}>
          <div className="flex justify-center flex-col items-center gap-6">
            <Image src={wrong}></Image>
            <p className="text-[22px] font-semibold text-red_button">
              Try again. Something went wrong.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ChangePassword;
