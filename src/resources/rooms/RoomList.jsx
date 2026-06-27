import {
  List, Datagrid, TextField,
  Create, SimpleForm, TextInput, required
} from 'react-admin'

export const RoomList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nom" />
    </Datagrid>
  </List>
)

export const RoomCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Nom de la salle" validate={required()} fullWidth />
    </SimpleForm>
  </Create>
)