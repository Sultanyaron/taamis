import { handleAuth } from "@workos-inc/authkit-nextjs";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const handler = handleAuth();
    return await handler(request);
  } catch (error) {
    console.error("Auth callback error:", error);
    return new Response(
      JSON.stringify({
        error: "Authentication failed",
        details: error instanceof Error ? error.message : "Unknown error",
        env: {
          hasApiKey: !!process.env.WORKOS_API_KEY,
          hasClientId: !!process.env.WORKOS_CLIENT_ID,
          hasRedirectUri: !!process.env.WORKOS_REDIRECT_URI,
        },
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
