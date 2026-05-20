'use client';

import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getAllQuestions, getAllTopics, getQuestionsForSubject, subjects, type Question } from "../../data/index";
import { topicHints } from "../../data/hints";
import { useAuth } from "../../lib/auth";
import StreakOverlay from "../../lib/streak-overlay";
import Results from "./results";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LETTERS = ["A", "B", "C", "D"];
const STREAK_MILESTONES = [3, 5, 8, 10];

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const topicParam = params.topic as string;
  const { user, updateStats } = useAuth();

  useEffect(() => {
    if (!user) router.replace('/login');
  }, [user, router]);

  const topicName = useMemo(() => {
    if (topicParam === "all") return "Všetky otázky";
    if (topicParam === "hard") return "Ťažké otázky";
    if (topicParam.startsWith("all-")) {
      const subjectId = topicParam.slice(4);
      const subject = subjects.find((s) => s.id === subjectId);
      return subject ? `Všetky z ${subject.name}` : "Všetky otázky";
    }
    return getAllTopics().find((t) => t.id === topicParam)?.name ?? topicParam;
  }, [topicParam]);

  const [pool, setPool] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null); // -1 = neviem
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState<{ question: Question; selectedIndex: number }[]>([]);
  const [done, setDone] = useState(false);
  const [streak, setStreak] = useState(0);
  const [streakAnim, setStreakAnim] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayStreak, setOverlayStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const userRef = useRef(user);
  userRef.current = user;

  const initPool = useCallback(() => {
    let filtered: Question[];
    if (topicParam === "hard") {
      const u = userRef.current;
      if (!u) { filtered = []; }
      else {
        const wrongIds = Object.entries(u.stats.wrongQuestions)
          .sort((a, b) => b[1] - a[1])
          .map(([id]) => Number(id));
        const all = getAllQuestions();
        filtered = wrongIds.map(id => all.find(q => q.id === id)).filter(Boolean) as Question[];
      }
    } else if (topicParam === "all") {
      filtered = getAllQuestions();
    } else if (topicParam.startsWith("all-")) {
      filtered = getQuestionsForSubject(topicParam.slice(4));
    } else {
      filtered = getAllQuestions().filter((q) => q.topic === topicParam);
    }
    setPool(shuffle(filtered));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setWrong([]);
    setDone(false);
    setStreak(0);
    setStreakAnim(false);
    setShowOverlay(false);
    setShowHint(false);
  }, [topicParam]);

  useEffect(() => {
    initPool();
  }, [initPool]);

  const current = pool[index];

  function handleSelect(optIdx: number) {
    if (selected !== null) return;
    setSelected(optIdx);
    const isCorrect = optIdx >= 0 && optIdx === current.correctIndex;

    if (isCorrect) {
      const newStreak = Math.min(streak + 1, 10);
      setScore((s) => s + 1);
      setStreak(newStreak);
      setStreakAnim(true);
      setTimeout(() => setStreakAnim(false), 600);

      if (STREAK_MILESTONES.includes(newStreak)) {
        setOverlayStreak(newStreak);
        setShowOverlay(true);
      }
    } else {
      setStreak(0);
      setWrong((w) => [...w, { question: current, selectedIndex: optIdx }]);
    }

    updateStats(isCorrect, current.id, isCorrect ? Math.min(streak + 1, 10) : 0);
  }

  function handleNext() {
    if (index + 1 >= pool.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setShowHint(false);
    }
  }

  if (!user) return null;

  if (pool.length === 0 && topicParam === "hard") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400 gap-4">
        <div className="text-5xl">🎉</div>
        <p className="text-lg">Nemáš žiadne ťažké otázky!</p>
        <p className="text-sm text-gray-600">Začni kvíz a otázky, v ktorých urobíš chybu, sa tu objavia.</p>
        <button onClick={() => router.push('/')} className="mt-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 transition-colors">
          Späť na predmety
        </button>
      </div>
    );
  }

  if (pool.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-500">
        Načítavam otázky…
      </div>
    );
  }

  if (done) {
    return (
      <Results
        score={score}
        total={pool.length}
        wrong={wrong}
        onRetry={initPool}
      />
    );
  }

  const progress = ((index + 1) / pool.length) * 100;
  const isAnswered = selected !== null;
  const isNeviem = selected === -1;
  const isCorrect = !isNeviem && selected === current.correctIndex;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <StreakOverlay
        streak={overlayStreak}
        visible={showOverlay}
        onDismiss={() => setShowOverlay(false)}
      />

      {/* Header row */}
      <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
        <span className="font-medium text-gray-300">{topicName}</span>
        <div className="flex items-center gap-3">
          {streak >= 2 && (
            <div
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                streak >= 8
                  ? "bg-orange-500/20 text-orange-300 border border-orange-500/40"
                  : streak >= 5
                  ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/40"
                  : "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
              } ${streakAnim ? "animate-streak-pulse animate-streak-glow" : ""}`}
            >
              <span>{streak >= 8 ? "🔥" : streak >= 5 ? "⚡" : "✨"}</span>
              <span>{streak}</span>
            </div>
          )}
          <span>
            <span className="text-white font-semibold">{score}</span>
            <span className="text-gray-600"> / {index} správnych</span>
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-gray-800 rounded-full mb-6 overflow-hidden">
        <div
          className="progress-bar h-full bg-indigo-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question counter */}
      <div className="text-xs text-gray-600 mb-5 uppercase tracking-widest">
        Otázka {index + 1} / {pool.length}
      </div>

      {/* Question card */}
      <div className="animate-fade-in">
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 mb-5">
          <p className="text-white text-xl font-medium leading-relaxed">
            {current.question}
          </p>
        </div>

        {/* Hint */}
        {!isAnswered && topicHints[current.topic] && (
          <div className="mb-5">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className="text-sm text-gray-500 hover:text-indigo-400 transition-colors flex items-center gap-1.5"
              >
                <span>💡</span> Rada
              </button>
            ) : (
              <div className="animate-fade-in rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-indigo-500/70 mb-2">Rada</div>
                <ul className="space-y-1">
                  {topicHints[current.topic].map((hint, i) => (
                    <li key={i} className="text-sm text-gray-400 leading-relaxed">• {hint}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Options */}
        <div className="flex flex-col gap-3 mb-3">
          {current.options.map((option, i) => {
            let style =
              "rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 cursor-pointer transition-all duration-150";

            if (isAnswered) {
              if (i === current.correctIndex) {
                style =
                  "rounded-xl border border-green-500/60 bg-green-500/10 cursor-default";
              } else if (i === selected) {
                style =
                  "rounded-xl border border-red-500/60 bg-red-500/10 cursor-default";
              } else {
                style =
                  "rounded-xl border border-gray-800 bg-gray-900 opacity-50 cursor-default";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={isAnswered}
                className={`w-full text-left p-4 flex items-center gap-4 ${style}`}
              >
                <span
                  className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                    isAnswered && i === current.correctIndex
                      ? "bg-green-500/20 text-green-400"
                      : isAnswered && i === selected
                      ? "bg-red-500/20 text-red-400"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {LETTERS[i]}
                </span>
                <span
                  className={`text-base leading-snug ${
                    isAnswered && i === current.correctIndex
                      ? "text-green-300"
                      : isAnswered && i === selected
                      ? "text-red-300"
                      : "text-gray-200"
                  }`}
                >
                  {option}
                </span>
                {isAnswered && i === current.correctIndex && (
                  <span className="ml-auto text-green-400 text-xl">✓</span>
                )}
                {isAnswered && i === selected && i !== current.correctIndex && (
                  <span className="ml-auto text-red-400 text-xl">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Neviem button */}
        <div className="mb-6">
          <button
            onClick={() => handleSelect(-1)}
            disabled={isAnswered}
            className={`w-full text-left p-4 flex items-center gap-4 rounded-xl transition-all duration-150 ${
              isAnswered
                ? isNeviem
                  ? "border border-amber-500/60 bg-amber-500/10 cursor-default"
                  : "border border-gray-800 bg-gray-900 opacity-50 cursor-default"
                : "border border-dashed border-gray-700 bg-gray-900/50 hover:bg-gray-800 hover:border-amber-500/40 cursor-pointer"
            }`}
          >
            <span
              className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                isAnswered && isNeviem
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-gray-800 text-gray-500"
              }`}
            >
              E
            </span>
            <span className={`text-base leading-snug ${
              isAnswered && isNeviem ? "text-amber-300" : "text-gray-500"
            }`}>
              Neviem
            </span>
            {isAnswered && isNeviem && (
              <span className="ml-auto text-amber-400 text-xl">🤷</span>
            )}
          </button>
        </div>

        {/* Explanation + next */}
        {isAnswered && (
          <div className="animate-fade-in">
            {/* Result banner */}
            <div
              className={`rounded-xl px-4 py-3 mb-4 text-sm font-medium ${
                isCorrect
                  ? streak >= 8
                    ? "bg-orange-500/15 border border-orange-500/40 text-orange-300"
                    : streak >= 5
                    ? "bg-yellow-500/15 border border-yellow-500/40 text-yellow-300"
                    : "bg-green-500/10 border border-green-500/30 text-green-300"
                  : isNeviem
                  ? "bg-amber-500/10 border border-amber-500/30 text-amber-300"
                  : "bg-red-500/10 border border-red-500/30 text-red-300"
              } ${isCorrect && streak >= 3 ? "animate-correct-flash" : ""}`}
            >
              {isCorrect
                ? streak >= 10
                  ? "🏆 Správne!"
                  : streak >= 8
                  ? "🔥 Správne!"
                  : streak >= 5
                  ? "⚡ Správne!"
                  : streak >= 3
                  ? "✨ Správne!"
                  : "✓ Správne!"
                : isNeviem
                ? "🤷 Neviem — pozri sa na správnu odpoveď"
                : "✗ Nesprávne!"}
            </div>

            {/* Teaching box for neviem */}
            {isNeviem && (
              <div className="rounded-xl bg-green-500/5 border border-green-500/30 px-4 py-3 mb-4">
                <span className="font-semibold uppercase text-xs tracking-widest block mb-2 text-green-500/70">
                  Správna odpoveď
                </span>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold bg-green-500/20 text-green-400">
                    {LETTERS[current.correctIndex]}
                  </span>
                  <span className="text-green-300 text-base font-medium">
                    {current.options[current.correctIndex]}
                  </span>
                </div>
              </div>
            )}

            {/* Explanation */}
            {current.explanation && (
              <div className={`rounded-xl bg-gray-900 border px-4 py-3 mb-5 text-sm leading-relaxed ${
                isCorrect
                  ? "border-green-500/20 text-gray-400"
                  : isNeviem
                  ? "border-amber-500/20 text-gray-300"
                  : "border-red-500/20 text-gray-400"
              }`}>
                <span className={`font-semibold uppercase text-xs tracking-widest block mb-1 ${
                  isCorrect ? "text-green-500/70" : isNeviem ? "text-amber-500/70" : "text-red-500/70"
                }`}>
                  {isNeviem ? "Prečo je to správna odpoveď?" : "Vysvetlenie"}
                </span>
                {current.explanation}
              </div>
            )}

            <button
              onClick={handleNext}
              className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold py-4 text-base transition-colors"
            >
              {index + 1 >= pool.length ? "Zobraziť výsledky" : "Ďalšia otázka →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
