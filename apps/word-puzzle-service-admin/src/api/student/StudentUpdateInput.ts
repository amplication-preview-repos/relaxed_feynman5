import { SubmissionUpdateManyWithoutStudentsInput } from "./SubmissionUpdateManyWithoutStudentsInput";
import { LeaderboardUpdateManyWithoutStudentsInput } from "./LeaderboardUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  name?: string | null;
  submissions?: SubmissionUpdateManyWithoutStudentsInput;
  leaderboards?: LeaderboardUpdateManyWithoutStudentsInput;
};
