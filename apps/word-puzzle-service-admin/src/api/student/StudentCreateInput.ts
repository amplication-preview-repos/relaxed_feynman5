import { SubmissionCreateNestedManyWithoutStudentsInput } from "./SubmissionCreateNestedManyWithoutStudentsInput";
import { LeaderboardCreateNestedManyWithoutStudentsInput } from "./LeaderboardCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  name?: string | null;
  submissions?: SubmissionCreateNestedManyWithoutStudentsInput;
  leaderboards?: LeaderboardCreateNestedManyWithoutStudentsInput;
};
