import { Student } from "../student/Student";
import { Puzzle } from "../puzzle/Puzzle";

export type Submission = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  word: string | null;
  score: number | null;
  student?: Student | null;
  puzzle?: Puzzle | null;
};
