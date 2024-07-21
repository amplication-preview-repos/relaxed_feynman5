import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type LeaderboardCreateInput = {
  word?: string | null;
  score?: number | null;
  student?: StudentWhereUniqueInput | null;
};
