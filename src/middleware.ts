import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  const isAuthenticated = !!token

  // Si no está autenticado, redirigir a /auth/registro
  if (!isAuthenticated) {
    const loginUrl = new URL('/auth/registro', request.url)
    return NextResponse.redirect(loginUrl)
  }

  // Si está autenticado, dejar continuar
  return NextResponse.next()
}

export const config = {
  matcher: ['/test', '/inicio', '/extras/:path*'],
}
