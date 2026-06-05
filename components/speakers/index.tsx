import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  Edit,
 SimpleForm,
 TextInput,
} from "react-admin";

export const SpeakerList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />

      <TextField
        source="fullName"
      />

      <TextField source="bio" />

      <TextField source="title" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const SpeakerCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput
        source="fullName"
      />

      <TextInput source="bio" />

      <TextInput
        source="photoUrl"
      />
    </SimpleForm>
  </Create>
);

export const SpeakerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput
        source="fullName"
      />

      <TextInput source="bio" />

      <TextInput
        source="photoUrl"
      />
    </SimpleForm>
  </Edit>
);