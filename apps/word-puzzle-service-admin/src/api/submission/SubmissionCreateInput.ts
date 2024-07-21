import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { PuzzleWhereUniqueInput } from "../puzzle/PuzzleWhereUniqueInput";

export type SubmissionCreateInput = {
  word?: string | null;
  score?: number | null;
  student?: StudentWhereUniqueInput | null;
  puzzle?: PuzzleWhereUniqueInput | null;
};
