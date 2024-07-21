import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type LeaderboardUpdateInput = {
  word?: string | null;
  score?: number | null;
  student?: StudentWhereUniqueInput | null;
};
