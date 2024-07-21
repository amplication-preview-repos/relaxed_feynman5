import { Submission } from "../submission/Submission";
import { Leaderboard } from "../leaderboard/Leaderboard";

export type Student = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  name: string | null;
  submissions?: Array<Submission>;
  leaderboards?: Array<Leaderboard>;
};
