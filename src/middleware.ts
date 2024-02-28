import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('nextjs-test', 'test-test')

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  if (request.nextUrl.pathname.startsWith('/information')) {
    console.log(request.nextUrl)
    // simular usuario no logueado
    const user = {
      name: 'John Doe',
      authenticated: false
    }

    if (!user.authenticated) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    '/information/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
