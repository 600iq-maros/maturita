'use client';

import Link from "next/link";
import { useAuth } from "./auth";

export default function HeaderNav() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-4">
      <Link
        href="/quiz/hard"
        className="text-sm text-gray-400 hover:text-orange-400 transition-colors hidden sm:block"
      >
        Ťažké otázky
      </Link>
      <Link
        href="/leaderboard"
        className="text-sm text-gray-400 hover:text-indigo-400 transition-colors hidden sm:block"
      >
        Rebríček
      </Link>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 hidden sm:block">{user.username}</span>
        <button
          onClick={logout}
          className="text-xs text-gray-600 hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-gray-800"
        >
          Odhlásiť
        </button>
      </div>
    </div>
  );
}
