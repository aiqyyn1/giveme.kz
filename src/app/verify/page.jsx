'use client';
import { Suspense, useEffect } from 'react';
import { useSearchParams, redirect, useRouter } from 'next/navigation';
import axios from 'axios';
export default function Page() {
  const PageContent = () => {
    const tokenParams = useSearchParams();
    const token = new URLSearchParams(tokenParams.toString()).get('token');
    const router = useRouter();
    useEffect(() => {
      async function verify() {
        try {
          const res = await axios.get(`${'https://givemekz-backend-production.up.railway.app'}/user/activate_account/`, {
            headers: {
              token: token,
            },
          });
          if (res.status === 200) {
            router.push('/login');
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
