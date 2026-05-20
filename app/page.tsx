'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { subjects, getAllQuestions, getQuestionsForSubject } from "./data/index";
import { useAuth } from "./lib/auth";

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();
  const totalQuestions = getAllQuestions().length;

  useEffect(() => {
    if (!user) router.replace('/login');
  }, [user, router]);

  if (!user) return null;

  const hardCount = Object.keys(user.stats.wrongQuestions).length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🎓</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
          Ahoj, {user.username}!
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Precvič si otázky na maturitnú skúšku. Celkovo{" "}
          <span className="text-indigo-400 font-semibold">{totalQuestions} otázok</span>{" "}
          z 3 predmetov.
        </p>
        {user.stats.totalAnswered > 0 && (
          <div className="mt-4 inline-flex items-center gap-4 text-sm text-gray-500">
            <span>{user.stats.totalAnswered} zodpovedaných</span>
            <span className="text-green-400">{user.stats.totalCorrect} správnych</span>
            <span>najlepšia séria {user.stats.bestStreak}x</span>
          </div>
        )}
      </div>

      {/* Top action cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Link href="/quiz/all">
          <div className="group rounded-2xl border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-500/70 transition-all duration-200 p-6 flex items-center justify-between h-full">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🎯</span>
              <div>
                <div className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Všetky otázky
                </div>
                <div className="text-sm text-gray-400 mt-0.5">
                  {totalQuestions} otázok
                </div>
              </div>
            </div>
            <div className="text-indigo-400 text-2xl group-hover:translate-x-1 transition-transform">→</div>
          </div>
        </Link>

        <Link href="/quiz/hard">
          <div className="group rounded-2xl border border-orange-500/40 bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-500/70 transition-all duration-200 p-6 flex items-center justify-between h-full">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🔥</span>
              <div>
                <div className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                  Ťažké otázky
                </div>
                <div className="text-sm text-gray-400 mt-0.5">
                  {hardCount > 0 ? `${hardCount} otázok, kde robíš chyby` : 'Zatiaľ žiadne'}
                </div>
              </div>
            </div>
            <div className="text-orange-400 text-2xl group-hover:translate-x-1 transition-transform">→</div>
          </div>
        </Link>
      </div>

      {/* Leaderboard link */}
      <div className="mb-8">
        <Link href="/leaderboard">
          <div className="group rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <span className="font-medium text-gray-300 group-hover:text-white transition-colors">Rebríček</span>
            </div>
            <div className="text-gray-600 text-lg group-hover:translate-x-1 transition-transform">→</div>
          </div>
        </Link>
      </div>

      {/* Subject grid */}
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
        Predmety
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => {
          const count = getQuestionsForSubject(subject.id).length;
          return (
            <Link key={subject.id} href={`/predmet/${subject.id}`}>
              <div className="group rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-200 p-5 h-full flex flex-col gap-3">
                <div className="text-3xl">{subject.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-base group-hover:text-indigo-300 transition-colors leading-snug">
                    {subject.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 leading-snug">
                    {subject.description}
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-medium">{count} otázok</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
