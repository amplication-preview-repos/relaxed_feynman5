import { PuzzleWhereUniqueInput } from "./PuzzleWhereUniqueInput";
import { PuzzleUpdateInput } from "./PuzzleUpdateInput";

export type UpdatePuzzleArgs = {
  where: PuzzleWhereUniqueInput;
  data: PuzzleUpdateInput;
};
