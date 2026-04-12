import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import ProfileClient from './ProfileClient';

export const metadata = {
  title: 'Profile',
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const { data: savedAccounts } = await supabase
    .from('saved_game_accounts')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  return (
    <ProfileClient
      user={user}
      profile={profile}
      savedAccounts={savedAccounts || []}
    />
  );
}
