import { withAuth, signOut } from '@workos-inc/authkit-nextjs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

export default async function HomePage() {
  // Get authenticated user - will redirect to login if not signed in
  const { user } = await withAuth();

  if (!user) {
    // This shouldn't happen because withAuth redirects, but TypeScript safety
    return null;
  }

  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Header with sidebar trigger */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center gap-4 px-4">
          <SidebarTrigger />
          <h2 className="text-lg font-semibold">Home</h2>
        </div>
      </header>

      {/* Page content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Welcome back{user.firstName && `, ${user.firstName}`}!
            </h1>
            <p className="text-muted-foreground text-lg">{user.email}</p>
          </div>

          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button type="submit" variant="outline">
              Sign out
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
