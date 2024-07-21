import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubmissionTitle } from "../submission/SubmissionTitle";

export const PuzzleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="letters" source="letters" />
        <ReferenceArrayInput
          source="submissions"
          reference="Submission"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubmissionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
