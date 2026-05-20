import Link from "next/link";
import { notFound } from "next/navigation";
import { subjects, getTopicsForSubject, getQuestionsForSubject } from "../../data/index";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectId } = await params;
  const subject = subjects.find((s) => s.id === subjectId);
  if (!subject) notFound();

  const topics = getTopicsForSubject(subjectId);
  const questions = getQuestionsForSubject(subjectId);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Back */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-300 transition-colors inline-flex items-center gap-1"
        >
          ← Späť na predmety
        </Link>
      </div>

      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{subject.icon}</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
          {subject.name}
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          {subject.description} ·{" "}
          <span className="text-indigo-400 font-semibold">{questions.length} otázok</span>
        </p>
      </div>

      {/* All from subject card */}
      <div className="mb-6">
        <Link href={`/quiz/all-${subjectId}`}>
          <div className="group rounded-2xl border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-500/70 transition-all duration-200 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🎯</span>
              <div>
                <div className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Všetky z {subject.name}
                </div>
                <div className="text-sm text-gray-400 mt-0.5">
                  {questions.length} otázok · Kompletná príprava
                </div>
              </div>
            </div>
            <div className="text-indigo-400 text-2xl group-hover:translate-x-1 transition-transform">
              →
            </div>
          </div>
        </Link>
      </div>

      {/* Topic grid */}
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
        Témy
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => {
          const count = questions.filter((q) => q.topic === topic.id).length;
          return (
            <Link key={topic.id} href={`/quiz/${topic.id}`}>
              <div className="group rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-200 p-5 h-full flex flex-col gap-3">
                <div className="text-3xl">{topic.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-base group-hover:text-indigo-300 transition-colors leading-snug">
                    {topic.name}
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
