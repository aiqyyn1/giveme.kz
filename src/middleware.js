import { NextResponse } from 'next/server';
async function getUserRoleFromSessionToken(sessionToken) {
  try {
    const response = await fetch('https://giveme-backend-2.onrender.com/user/me', {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });
    const data = await response.json();

    return data.role;
  } catch (error) {
    console.error('Failed to get user role', error);
    return null; 
  }
}
export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/admin')) {
    const sessionToken = request.cookies.get('access').value; 

    if (!sessionToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    const userRole = await getUserRoleFromSessionToken(sessionToken);
    console.log(userRole);
    if (userRole !== 'ADMIN') {
      return NextResponse.redirect(new URL('/restrictions', request.url));
    }
  }
  return NextResponse.next();
}
export const config = {
  matches: ['/register', 'login'],
};
