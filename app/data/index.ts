import { topics, questions } from "./questions";
import { topicsSlovencina, questionsSlovencina } from "./questions-slovenčina";
import { topicsEkonomika, questionsEkonomika } from "./questions-ekonomika";
import { batch1 } from "./q-sj-batch1";
import { batch2 } from "./q-sj-batch2";
import { batch3 } from "./q-sj-batch3";
import { batch4 } from "./q-sj-batch4";
import { elBatch1 } from "./q-el-batch1";
import { elBatch2 } from "./q-el-batch2";
import { ekBatch1 } from "./q-ek-batch1";
import { ekBatch2 } from "./q-ek-batch2";

const allSlovencinaQuestions = [...questionsSlovencina, ...batch1, ...batch2, ...batch3, ...batch4];
const allElektroQuestions = [...questions, ...elBatch1, ...elBatch2];
const allEkonomQuestions = [...questionsEkonomika, ...ekBatch1, ...ekBatch2];

export type { Question, Topic } from "./questions";
import type { Question, Topic } from "./questions";

export type Subject = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export const subjects: Subject[] = [
  {
    id: "elektrotechnika",
    name: "Elektrotechnika",
    icon: "⚡",
    description: "Elektrické obvody, súčiastky, stroje a prístroje",
  },
  {
    id: "slovencina",
    name: "Slovenský jazyk a literatúra",
    icon: "📚",
    description: "Jazykoveda, slohové postupy, literárne obdobia a diela",
  },
  {
    id: "ekonomika",
    name: "Ekonomika a účtovníctvo",
    icon: "💼",
    description: "Podnikanie, účtovníctvo, dane, manažment a financie",
  },
];

export function getTopicsForSubject(subjectId: string): Topic[] {
  switch (subjectId) {
    case "elektrotechnika":
      return topics;
    case "slovencina":
      return topicsSlovencina;
    case "ekonomika":
      return topicsEkonomika;
    default:
      return [];
  }
}

export function getQuestionsForSubject(subjectId: string): Question[] {
  switch (subjectId) {
    case "elektrotechnika":
      return allElektroQuestions;
    case "slovencina":
      return allSlovencinaQuestions;
    case "ekonomika":
      return allEkonomQuestions;
    default:
      return [];
  }
}

export function getAllQuestions(): Question[] {
  return [...allElektroQuestions, ...allSlovencinaQuestions, ...allEkonomQuestions];
}

export function getAllTopics(): Topic[] {
  return [...topics, ...topicsSlovencina, ...topicsEkonomika];
}
