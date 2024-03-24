import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLogged = request.cookies.get('access');
  if (isLogged) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/login', request.url));
}
export const config = {
  matcher: ['/register'],
};
