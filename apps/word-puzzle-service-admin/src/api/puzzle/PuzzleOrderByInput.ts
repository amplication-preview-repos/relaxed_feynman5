import { SortOrder } from "../../util/SortOrder";

export type PuzzleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  letters?: SortOrder;
};
