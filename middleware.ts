import { NextResponse, type NextRequest } from 'next/server'
import { locales } from '@/app/commons/consts/lang'

export function middleware (request: NextRequest): Response | undefined {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${locales[1]}${pathname}/welcome`
  return Response.redirect(request.nextUrl)
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
