import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl

  // Check if it's an experiments subdomain
  if (host.startsWith('experiments.')) {
    // Handle experiment routes
    return NextResponse.rewrite(
      new URL(`/experiments${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 