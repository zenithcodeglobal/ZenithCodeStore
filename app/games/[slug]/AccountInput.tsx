'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/app/components/AuthProvider';

interface AccountInputProps {
  gameId: string;
  gameSlug: string;
  playerIdLabel: string;
  serverIdLabel?: string;
}

interface SavedAccount {
  id: string;
  player_id: string;
  server_id: string | null;
  nickname: string | null;
}

export default function AccountInput({ gameId, gameSlug, playerIdLabel, serverIdLabel }: AccountInputProps) {
  const { user } = useAuth();
  const [playerId, setPlayerId] = useState('');
  const [serverId, setServerId] = useState('');
  const [savedAccounts, setSavedAccounts] = useState<SavedAccount[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!user) return;
    const supabase = createClient();
    supabase
      .from('saved_game_accounts')
      .select('id, player_id, server_id, nickname')
      .eq('user_id', user.id)
      .eq('game_id', gameSlug)
      .then(({ data }) => {
        if (data && data.length > 0) {
          setSavedAccounts(data);
          setPlayerId(data[0].player_id);
          setServerId(data[0].server_id || '');
        }
      });
  }, [user, gameSlug]);

  async function handleSaveAccount() {
    if (!user || !playerId.trim()) return;
    setSaving(true);
    const supabase = createClient();
    await supabase.from('saved_game_accounts').upsert(
      {
        user_id: user.id,
        game_id: gameSlug,
        player_id: playerId.trim(),
        server_id: serverId.trim() || null,
        nickname: null,
      },
      { onConflict: 'user_id,game_id,player_id' }
    );
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleSelectSaved(account: SavedAccount) {
    setPlayerId(account.player_id);
    setServerId(account.server_id || '');
  }

  return (
    <div className="mb-16">
      <h2 className="font-luckiest text-xl text-white uppercase tracking-wider mb-6">
        Your Account
      </h2>

      {user && savedAccounts.length > 1 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {savedAccounts.map((acc) => (
            <button
              key={acc.id}
              onClick={() => handleSelectSaved(acc)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                playerId === acc.player_id
                  ? 'bg-white text-[rgb(22,22,22)]'
                  : 'bg-white/[0.04] text-white/40 hover:text-white/60'
              }`}
            >
              {acc.nickname || acc.player_id}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2.5">
            {playerIdLabel}
          </label>
          <input
            type="text"
            value={playerId}
            onChange={(e) => setPlayerId(e.target.value)}
            placeholder={`Enter your ${playerIdLabel}`}
            className="w-full h-12 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 text-sm text-white placeholder:text-white/20 focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)]/40 focus:bg-white/[0.06] transition-all duration-200 outline-none"
          />
        </div>

        {serverIdLabel && (
          <div>
            <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2.5">
              {serverIdLabel}
            </label>
            <input
              type="text"
              value={serverId}
              onChange={(e) => setServerId(e.target.value)}
              placeholder={`Enter your ${serverIdLabel}`}
              className="w-full h-12 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 text-sm text-white placeholder:text-white/20 focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)]/40 focus:bg-white/[0.06] transition-all duration-200 outline-none"
            />
          </div>
        )}

        {user && playerId.trim() && (
          <button
            onClick={handleSaveAccount}
            disabled={saving}
            className={`text-xs font-medium transition-all duration-200 ${
              saved
                ? 'text-emerald-400'
                : 'text-white/25 hover:text-white/50'
            }`}
          >
            {saving ? 'Saving...' : saved ? 'Account saved' : 'Save this account for next time'}
          </button>
        )}
      </div>
    </div>
  );
}
