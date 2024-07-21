import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentTitle } from "../student/StudentTitle";
import { PuzzleTitle } from "../puzzle/PuzzleTitle";

export const SubmissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="word" source="word" />
        <NumberInput step={1} label="score" source="score" />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <ReferenceInput source="puzzle.id" reference="Puzzle" label="Puzzle">
          <SelectInput optionText={PuzzleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
