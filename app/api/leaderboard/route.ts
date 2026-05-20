import { put, list, get } from '@vercel/blob';
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
    const { blobs } = await list({ prefix: BLOB_PATH, token: process.env.BLOB_READ_WRITE_TOKEN });
    if (blobs.length === 0) return { users: {} };
    const res = await get(blobs[0].url, { access: 'private', token: process.env.BLOB_READ_WRITE_TOKEN });
    if (!res || res.statusCode !== 200) return { users: {} };
    const text = await new Response(res.stream).text();
    return JSON.parse(text);
  } catch {
    return { users: {} };
  }
}

async function saveBlob(data: LeaderboardData) {
  await put(BLOB_PATH, JSON.stringify(data), {
    access: 'private',
    addRandomSuffix: false,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
}

// GET — return leaderboard
export async function GET() {
  try {
    const data = await getBlob();
    const sorted = Object.values(data.users)
      .filter(u => u.totalAnswered > 0)
      .sort((a, b) => b.totalCorrect - a.totalCorrect || b.bestStreak - a.bestStreak);
    return NextResponse.json(sorted);
  } catch (e: unknown) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

// POST — update a user's stats
export async function POST(req: Request) {
  try {
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
  } catch (e: unknown) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
