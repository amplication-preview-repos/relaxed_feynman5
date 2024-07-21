import { Submission as TSubmission } from "../api/submission/Submission";

export const SUBMISSION_TITLE_FIELD = "word";

export const SubmissionTitle = (record: TSubmission): string => {
  return record.word?.toString() || String(record.id);
};
