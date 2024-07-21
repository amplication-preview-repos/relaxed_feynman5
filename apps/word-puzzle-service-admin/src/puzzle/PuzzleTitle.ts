import { Puzzle as TPuzzle } from "../api/puzzle/Puzzle";

export const PUZZLE_TITLE_FIELD = "letters";

export const PuzzleTitle = (record: TPuzzle): string => {
  return record.letters?.toString() || String(record.id);
};
