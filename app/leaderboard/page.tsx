'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../lib/auth";

const MEDAL = ['🥇', '🥈', '🥉'];

type LeaderboardEntry = {
  username: string;
  totalAnswered: number;
  totalCorrect: number;
  bestStreak: number;
};

export default function LeaderboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = useCallback(async () => {
    try {
      const res = await fetch('/api/leaderboard');
      if (res.ok) {
        setEntries(await res.json());
      }
    } catch {
      // Fallback: show nothing
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user) router.replace('/login');
    else fetchLeaderboard();
  }, [user, router, fetchLeaderboard]);

  if (!user) return null;

  const totalAnswered = entries.reduce((s, u) => s + u.totalAnswered, 0);
  const totalCorrect = entries.reduce((s, u) => s + u.totalCorrect, 0);
  const totalAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 animate-fade-in">
      <div className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors inline-flex items-center gap-1">
          ← Späť
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-white mb-2">Rebríček</h1>
      <p className="text-gray-400 mb-8">Kto sa pripravuje najlepšie?</p>

      {/* Global stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-center">
          <div className="text-2xl font-bold text-white">{totalAnswered}</div>
          <div className="text-xs text-gray-500 mt-1">Zodpovedaných</div>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-center">
          <div className="text-2xl font-bold text-green-400">{totalCorrect}</div>
          <div className="text-xs text-gray-500 mt-1">Správnych</div>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-center">
          <div className="text-2xl font-bold text-indigo-400">{totalAccuracy}%</div>
          <div className="text-xs text-gray-500 mt-1">Úspešnosť</div>
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500 py-12">
          <div className="text-4xl mb-3 animate-pulse">📊</div>
          <p>Načítavam rebríček…</p>
        </div>
      ) : entries.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          <div className="text-4xl mb-3">📊</div>
          <p>Zatiaľ žiadne výsledky. Začni kvíz!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {entries.map((u, i) => {
            const pct = u.totalAnswered > 0
              ? Math.round((u.totalCorrect / u.totalAnswered) * 100)
              : 0;
            const isMe = u.username === user.username;

            return (
              <div
                key={u.username}
                className={`rounded-xl border p-4 flex items-center gap-4 transition-colors ${
                  isMe
                    ? "border-indigo-500/40 bg-indigo-500/10"
                    : "border-gray-800 bg-gray-900"
                }`}
              >
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold bg-gray-800 text-gray-400">
                  {i < 3 ? MEDAL[i] : i + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold truncate ${isMe ? "text-indigo-300" : "text-white"}`}>
                      {u.username}
                    </span>
                    {isMe && (
                      <span className="text-[10px] bg-indigo-500/30 text-indigo-300 px-1.5 py-0.5 rounded-full font-medium">
                        ty
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {u.totalAnswered} otázok · {pct}% úspešnosť · najlepšia séria {u.bestStreak}x
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-lg font-bold text-green-400">{u.totalCorrect}</div>
                  <div className="text-[10px] text-gray-600 uppercase">správnych</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
