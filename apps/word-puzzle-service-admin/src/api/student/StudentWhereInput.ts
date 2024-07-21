import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubmissionListRelationFilter } from "../submission/SubmissionListRelationFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  submissions?: SubmissionListRelationFilter;
  leaderboards?: LeaderboardListRelationFilter;
};
