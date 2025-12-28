import { getSignInUrl } from '@workos-inc/authkit-nextjs';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  // Redirect to WorkOS AuthKit sign-in page
  const signInUrl = await getSignInUrl();
  redirect(signInUrl);
}
