'use client';

import Link from "next/link";
import type { Question } from "../../data/questions";

type Props = {
  score: number;
  total: number;
  wrong: { question: Question; selectedIndex: number }[];
  onRetry: () => void;
};

function getGrade(pct: number): { label: string; color: string } {
  if (pct >= 90) return { label: "Výborný", color: "text-emerald-400" };
  if (pct >= 75) return { label: "Chválitebný", color: "text-green-400" };
  if (pct >= 50) return { label: "Dobrý", color: "text-yellow-400" };
  if (pct >= 30) return { label: "Dostatočný", color: "text-orange-400" };
  return { label: "Nedostatočný", color: "text-red-400" };
}

export default function Results({ score, total, wrong, onRetry }: Props) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const grade = getGrade(pct);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 animate-fade-in">
      {/* Score card */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center mb-8">
        <div className="text-6xl font-bold text-white mb-1">{pct}%</div>
        <div className={`text-2xl font-semibold mb-2 ${grade.color}`}>
          {grade.label}
        </div>
        <div className="text-gray-400 text-lg">
          {score} z {total} správnych odpovedí
        </div>

        {/* Visual bar */}
        <div className="mt-6 h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${pct}%`,
              background:
                pct >= 75
                  ? "#10b981"
                  : pct >= 50
                  ? "#facc15"
                  : "#ef4444",
            }}
          />
        </div>

        {/* Grade scale */}
        <div className="mt-4 flex justify-between text-xs text-gray-600">
          <span>0%</span>
          <span className="text-orange-500">30% Dostatočný</span>
          <span className="text-yellow-500">50% Dobrý</span>
          <span className="text-green-500">75% Chválitebný</span>
          <span className="text-emerald-500">90% Výborný</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-10">
        <button
          onClick={onRetry}
          className="flex-1 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 text-base transition-colors"
        >
          Zopakovať
        </button>
        <Link
          href="/"
          className="flex-1 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 text-gray-200 font-semibold py-3 text-base text-center transition-colors"
        >
          Späť na témy
        </Link>
      </div>

      {/* Wrong answers */}
      {wrong.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Nesprávne odpovede ({wrong.length})
          </h2>
          <div className="flex flex-col gap-4">
            {wrong.map(({ question, selectedIndex }) => (
              <div
                key={question.id}
                className="rounded-xl border border-gray-800 bg-gray-900 p-5"
              >
                <p className="text-gray-200 font-medium mb-3 leading-snug">
                  {question.question}
                </p>
                <div className="flex flex-col gap-2 text-sm mb-3">
                  {selectedIndex === -1 ? (
                    <div className="flex gap-2 items-start">
                      <span className="shrink-0 rounded px-1.5 py-0.5 bg-amber-500/20 text-amber-400 font-mono text-xs">
                        E
                      </span>
                      <span className="text-amber-300">Neviem</span>
                    </div>
                  ) : (
                    <div className="flex gap-2 items-start">
                      <span className="shrink-0 rounded px-1.5 py-0.5 bg-red-500/20 text-red-400 font-mono text-xs">
                        {String.fromCharCode(65 + selectedIndex)}
                      </span>
                      <span className="text-red-300 line-through">
                        {question.options[selectedIndex]}
                      </span>
                    </div>
                  )}
                  <div className="flex gap-2 items-start">
                    <span className="shrink-0 rounded px-1.5 py-0.5 bg-green-500/20 text-green-400 font-mono text-xs">
                      {String.fromCharCode(65 + question.correctIndex)}
                    </span>
                    <span className="text-green-300">
                      {question.options[question.correctIndex]}
                    </span>
                  </div>
                </div>
                {question.explanation && (
                  <p className="text-xs text-gray-500 border-t border-gray-800 pt-2 mt-2">
                    {question.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
