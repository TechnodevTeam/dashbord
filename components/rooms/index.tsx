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

export const RoomList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const RoomCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const RoomEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);