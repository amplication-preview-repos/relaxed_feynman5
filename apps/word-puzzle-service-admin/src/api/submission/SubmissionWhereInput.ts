import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { PuzzleWhereUniqueInput } from "../puzzle/PuzzleWhereUniqueInput";

export type SubmissionWhereInput = {
  id?: StringFilter;
  word?: StringNullableFilter;
  score?: IntNullableFilter;
  student?: StudentWhereUniqueInput;
  puzzle?: PuzzleWhereUniqueInput;
};
