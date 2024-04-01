'use client';
import { Suspense, useEffect } from 'react';
import { useSearchParams, redirect } from 'next/navigation';
import axios from 'axios';
export default function Page() {
  const PageContent = () => {
    const tokenParams = useSearchParams();
    const token = new URLSearchParams(tokenParams.toString()).get('token');
    useEffect(() => {
      async function verify() {
        try {
          const res = await axios.get(`${process.env.baseURL}/user/activate_account/`, {
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
      if (token) {
        verify();
      }
    }, [token]);

    return null;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
