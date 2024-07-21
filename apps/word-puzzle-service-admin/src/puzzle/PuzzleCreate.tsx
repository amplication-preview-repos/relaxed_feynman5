import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubmissionTitle } from "../submission/SubmissionTitle";

export const PuzzleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
