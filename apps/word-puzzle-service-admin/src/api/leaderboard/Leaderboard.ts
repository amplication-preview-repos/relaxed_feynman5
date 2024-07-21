import { Student } from "../student/Student";

export type Leaderboard = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  word: string | null;
  score: number | null;
  student?: Student | null;
};
