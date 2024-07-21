import { PuzzleWhereInput } from "./PuzzleWhereInput";
import { PuzzleOrderByInput } from "./PuzzleOrderByInput";

export type PuzzleFindManyArgs = {
  where?: PuzzleWhereInput;
  orderBy?: Array<PuzzleOrderByInput>;
  skip?: number;
  take?: number;
};
