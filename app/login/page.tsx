'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../lib/auth';

export default function LoginPage() {
  const { login, register, user } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) router.replace('/');
  }, [user, router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const err = mode === 'login' ? login(username, pin) : register(username, pin);
    if (err) {
      setError(err);
    } else {
      router.replace('/');
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm animate-fade-in">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-3xl font-bold text-white mb-2">Maturita</h1>
          <p className="text-gray-400">
            {mode === 'login' ? 'Prihlás sa do svojho účtu' : 'Vytvor si nový účet'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-1.5">Meno</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tvoje meno"
              className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="pin" className="block text-sm font-medium text-gray-400 mb-1.5">PIN kód (4 číslice)</label>
            <input
              id="pin"
              name="password"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              value={pin}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, '').slice(0, 4);
                setPin(v);
              }}
              placeholder="••••"
              inputMode="numeric"
              maxLength={4}
              pattern="\d{4}"
              className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors tracking-[0.5em] text-center text-lg"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-2.5 text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold py-3.5 text-base transition-colors"
          >
            {mode === 'login' ? 'Prihlásiť sa' : 'Vytvoriť účet'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }}
            className="text-sm text-gray-500 hover:text-indigo-400 transition-colors"
          >
            {mode === 'login' ? 'Nemáš účet? Zaregistruj sa' : 'Už máš účet? Prihlás sa'}
          </button>
        </div>
      </div>
    </div>
  );
}
