import { put, list } from '@vercel/blob';
import { NextResponse } from 'next/server';

const BLOB_PATH = 'leaderboard.json';

type LeaderboardEntry = {
  username: string;
  totalAnswered: number;
  totalCorrect: number;
  bestStreak: number;
  lastUpdated: number;
};

type LeaderboardData = {
  users: Record<string, LeaderboardEntry>;
};

async function getBlob(): Promise<LeaderboardData> {
  try {
    const { blobs } = await list({ prefix: BLOB_PATH });
    if (blobs.length === 0) return { users: {} };
    const res = await fetch(blobs[0].url);
    return await res.json();
  } catch {
    return { users: {} };
  }
}

async function saveBlob(data: LeaderboardData) {
  await put(BLOB_PATH, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: false,
  });
}

// GET — return leaderboard
export async function GET() {
  const data = await getBlob();
  const sorted = Object.values(data.users)
    .filter(u => u.totalAnswered > 0)
    .sort((a, b) => b.totalCorrect - a.totalCorrect || b.bestStreak - a.bestStreak);
  return NextResponse.json(sorted);
}

// POST — update a user's stats
export async function POST(req: Request) {
  const body = await req.json();
  const { username, totalAnswered, totalCorrect, bestStreak } = body;

  if (!username || typeof totalAnswered !== 'number') {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const data = await getBlob();
  data.users[username] = {
    username,
    totalAnswered,
    totalCorrect,
    bestStreak,
    lastUpdated: Date.now(),
  };

  await saveBlob(data);
  return NextResponse.json({ ok: true });
}
