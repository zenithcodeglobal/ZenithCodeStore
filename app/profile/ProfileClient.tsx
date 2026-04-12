'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { signOut } from '@/app/login/actions';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  username: string | null;
  avatar_url: string | null;
  created_at: string;
}

interface SavedAccount {
  id: string;
  game_id: string;
  player_id: string;
  server_id: string | null;
  nickname: string | null;
  created_at: string;
}

interface ProfileClientProps {
  user: User;
  profile: Profile | null;
  savedAccounts: SavedAccount[];
}

export default function ProfileClient({ user, profile, savedAccounts }: ProfileClientProps) {
  const [username, setUsername] = useState(profile?.username || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [accounts, setAccounts] = useState<SavedAccount[]>(savedAccounts);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  async function handleUpdateUsername() {
    if (username.length < 3) return;
    setSaving(true);
    const supabase = createClient();
    await supabase.from('profiles').update({ username }).eq('id', user.id);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function handleDeleteAccount(id: string) {
    setDeleting(id);
    const supabase = createClient();
    await supabase.from('saved_game_accounts').delete().eq('id', id);
    setAccounts((prev) => prev.filter((a) => a.id !== id));
    setDeleting(null);
    router.refresh();
  }

  const initial = profile?.username?.[0] || user.user_metadata?.name?.[0] || user.email?.[0] || 'U';
  const displayName = profile?.username || user.user_metadata?.name || user.email?.split('@')[0] || 'User';
  const joinDate = new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[rgb(22,22,22)] pb-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-20 sm:pt-28">

        <div className="flex items-center gap-4 sm:gap-5 mb-10 sm:mb-14">
          {profile?.avatar_url ? (
            <img src={profile.avatar_url} alt="" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover" />
          ) : (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[rgb(51,89,237)] flex items-center justify-center font-luckiest text-xl sm:text-2xl text-white uppercase">
              {initial}
            </div>
          )}
          <div>
            <h1 className="font-luckiest text-2xl sm:text-3xl text-white uppercase tracking-wide">{displayName}</h1>
            <p className="text-white/30 text-sm">Member since {joinDate}</p>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="font-luckiest text-lg text-white uppercase tracking-wider mb-6">Account</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2.5">Email</label>
              <div className="w-full h-12 bg-white/[0.02] border border-white/[0.05] rounded-xl px-4 flex items-center text-sm text-white/40">
                {user.email}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2.5">Display Name</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter display name"
                  minLength={3}
                  className="flex-1 h-11 sm:h-12 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 text-sm text-white placeholder:text-white/20 focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)]/40 focus:bg-white/[0.06] transition-all duration-200 outline-none"
                />
                <button
                  onClick={handleUpdateUsername}
                  disabled={saving || username.length < 3}
                  className={`h-11 sm:h-12 px-5 sm:px-6 rounded-xl font-luckiest text-sm tracking-wider uppercase transition-all duration-200 shrink-0 ${
                    saved
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-white text-[rgb(22,22,22)] hover:bg-white/90 active:scale-[0.97] disabled:opacity-30 disabled:pointer-events-none'
                  }`}
                >
                  {saving ? '...' : saved ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {accounts.length > 0 && (
          <section className="mb-14">
            <h2 className="font-luckiest text-lg text-white uppercase tracking-wider mb-6">Saved Game Accounts</h2>
            <div className="space-y-3">
              {accounts.map((account) => (
                <div
                  key={account.id}
                  className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 sm:px-5 py-3.5 sm:py-4"
                >
                  <div>
                    <p className="text-sm text-white font-medium">{account.nickname || account.game_id}</p>
                    <p className="text-xs text-white/30 mt-0.5">
                      ID: {account.player_id}
                      {account.server_id && ` / Server: ${account.server_id}`}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteAccount(account.id)}
                    disabled={deleting === account.id}
                    className="text-white/20 hover:text-red-400 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <form action={signOut}>
            <button
              type="submit"
              className="h-12 px-8 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white/50 font-luckiest text-sm tracking-wider uppercase hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400 transition-all duration-200"
            >
              Sign Out
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}
