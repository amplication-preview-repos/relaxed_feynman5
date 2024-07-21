import { Leaderboard as TLeaderboard } from "../api/leaderboard/Leaderboard";

export const LEADERBOARD_TITLE_FIELD = "word";

export const LeaderboardTitle = (record: TLeaderboard): string => {
  return record.word?.toString() || String(record.id);
};
