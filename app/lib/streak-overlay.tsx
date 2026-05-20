'use client';

import { useEffect, useState } from 'react';

type Props = {
  streak: number;
  visible: boolean;
  onDismiss: () => void;
};

const STREAK_CONFIG: Record<number, { emoji: string; label: string; bg: string; duration: number }> = {
  3: {
    emoji: '✨',
    label: '3',
    bg: 'from-indigo-600/30 via-indigo-900/50 to-transparent',
    duration: 1800,
  },
  5: {
    emoji: '⚡',
    label: '5',
    bg: 'from-yellow-600/30 via-yellow-900/50 to-transparent',
    duration: 2200,
  },
  8: {
    emoji: '🔥',
    label: '8',
    bg: 'from-orange-600/30 via-orange-900/50 to-transparent',
    duration: 2500,
  },
  10: {
    emoji: '🏆',
    label: '10',
    bg: 'from-amber-500/40 via-orange-900/50 to-transparent',
    duration: 3000,
  },
};

export default function StreakOverlay({ streak, visible, onDismiss }: Props) {
  const [show, setShow] = useState(false);
  const config = STREAK_CONFIG[streak];

  useEffect(() => {
    if (!visible || !config) return;
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      onDismiss();
    }, config.duration);
    return () => clearTimeout(timer);
  }, [visible, streak, config, onDismiss]);

  if (!show || !config) return null;

  return (
    <div
      className="streak-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer"
      onClick={() => { setShow(false); onDismiss(); }}
    >
      <div className={`absolute inset-0 bg-gradient-radial ${config.bg}`} />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center streak-content">
        <div className="text-8xl sm:text-9xl mb-4 streak-emoji">{config.emoji}</div>
        <div className="text-4xl sm:text-6xl font-black text-white mb-2 streak-label tracking-tight">
          {config.label}
        </div>
        <div className="mb-8" />

        {streak === 10 && (
          <div className="flex justify-center gap-2 mb-6 streak-stars">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-2xl sm:text-3xl streak-star" style={{ animationDelay: `${i * 80}ms` }}>
                ⭐
              </span>
            ))}
          </div>
        )}

        <div className="text-sm text-gray-500 streak-hint">Klikni pre pokračovanie</div>
      </div>
    </div>
  );
}
