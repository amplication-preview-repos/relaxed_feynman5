import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubmissionListRelationFilter } from "../submission/SubmissionListRelationFilter";

export type PuzzleWhereInput = {
  id?: StringFilter;
  letters?: StringNullableFilter;
  submissions?: SubmissionListRelationFilter;
};
