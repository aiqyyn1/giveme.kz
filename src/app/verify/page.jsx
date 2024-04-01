'use client';
import { redirect } from 'next/navigation';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
export default function Page() {
  const tokenParams = useSearchParams();
  const token = new URLSearchParams(tokenParams.toString()).get('token');
  useEffect(() => {
    async function verify() {
      try {
        const res = await axios.post(`${process.env.baseURL}/user/activate_account/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          redirect('/login');
        }
      } catch (e) {
        console.error(e);
      }
    }
    verify();
  }, []);
  return (
    <Suspense>
      <div></div>
    </Suspense>
  );
}
