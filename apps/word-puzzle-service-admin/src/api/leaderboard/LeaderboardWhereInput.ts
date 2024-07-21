import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  word?: StringNullableFilter;
  score?: IntNullableFilter;
  student?: StudentWhereUniqueInput;
};
