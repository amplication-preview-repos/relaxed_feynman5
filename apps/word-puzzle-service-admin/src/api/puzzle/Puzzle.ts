import { Submission } from "../submission/Submission";

export type Puzzle = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  letters: string | null;
  submissions?: Array<Submission>;
};
