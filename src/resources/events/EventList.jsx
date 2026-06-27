import {
  List, Datagrid, TextField, DateField,
  Create, Edit, SimpleForm,
  TextInput, DateInput, required
} from 'react-admin'

export const EventList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" label="Titre" />
      <TextField source="location" label="Lieu" />
      <DateField source="start_date" label="Début" />
      <DateField source="end_date" label="Fin" />
    </Datagrid>
  </List>
)

const EventForm = () => (
  <SimpleForm>
    <TextInput source="title" label="Titre" validate={required()} fullWidth />
    <TextInput source="description" label="Description" multiline rows={4} fullWidth />
    <TextInput source="location" label="Lieu" fullWidth />
    <DateInput source="start_date" label="Date de début" validate={required()} />
    <DateInput source="end_date" label="Date de fin" validate={required()} />
  </SimpleForm>
)

export const EventCreate = () => (
  <Create>
    <EventForm />
  </Create>
)

export const EventEdit = () => (
  <Edit>
    <EventForm />
  </Edit>
)