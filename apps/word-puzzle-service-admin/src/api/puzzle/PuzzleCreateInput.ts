import { SubmissionCreateNestedManyWithoutPuzzlesInput } from "./SubmissionCreateNestedManyWithoutPuzzlesInput";

export type PuzzleCreateInput = {
  letters?: string | null;
  submissions?: SubmissionCreateNestedManyWithoutPuzzlesInput;
};
