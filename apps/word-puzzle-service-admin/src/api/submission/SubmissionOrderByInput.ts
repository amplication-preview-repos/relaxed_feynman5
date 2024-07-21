import { SortOrder } from "../../util/SortOrder";

export type SubmissionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  word?: SortOrder;
  score?: SortOrder;
  studentId?: SortOrder;
  puzzleId?: SortOrder;
};
