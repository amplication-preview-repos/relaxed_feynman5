import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  word?: SortOrder;
  score?: SortOrder;
  studentId?: SortOrder;
};
