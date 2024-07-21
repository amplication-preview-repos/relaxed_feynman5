import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { PUZZLE_TITLE_FIELD } from "../puzzle/PuzzleTitle";

export const SubmissionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="word" source="word" />
        <TextField label="score" source="score" />
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Puzzle" source="puzzle.id" reference="Puzzle">
          <TextField source={PUZZLE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
