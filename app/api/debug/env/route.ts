import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasApiKey: !!process.env.WORKOS_API_KEY,
    hasClientId: !!process.env.WORKOS_CLIENT_ID,
    hasCookiePassword: !!process.env.WORKOS_COOKIE_PASSWORD,
    hasRedirectUri: !!process.env.WORKOS_REDIRECT_URI,
    redirectUri: process.env.WORKOS_REDIRECT_URI,
    // Don't expose actual secrets, just check if they exist
    apiKeyPrefix: process.env.WORKOS_API_KEY?.substring(0, 8),
    clientIdPrefix: process.env.WORKOS_CLIENT_ID?.substring(0, 10),
  });
}

