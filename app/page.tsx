import { redirect } from 'next/navigation';

// Redirect the site root to the dedicated home route.
export default function RootPage() {
  redirect('/home');
}
