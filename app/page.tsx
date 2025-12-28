import { withAuth } from '@workos-inc/authkit-nextjs';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  // Check if user is authenticated without forcing redirect
  const { user } = await withAuth({ ensureSignedIn: false });

  // Redirect based on authentication status
  if (user) {
    redirect('/home');
  } else {
    redirect('/login');
  }
}
