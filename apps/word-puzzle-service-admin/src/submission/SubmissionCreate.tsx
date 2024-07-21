import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentTitle } from "../student/StudentTitle";
import { PuzzleTitle } from "../puzzle/PuzzleTitle";

export const SubmissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
