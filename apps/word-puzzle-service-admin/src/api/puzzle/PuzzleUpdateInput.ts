import { SubmissionUpdateManyWithoutPuzzlesInput } from "./SubmissionUpdateManyWithoutPuzzlesInput";

export type PuzzleUpdateInput = {
  letters?: string | null;
  submissions?: SubmissionUpdateManyWithoutPuzzlesInput;
};
