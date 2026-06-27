import {
  List, Datagrid, TextField, DateField, ReferenceField,
  Create, Edit, SimpleForm,
  TextInput, DateTimeInput, ReferenceInput, SelectInput, NumberInput, required
} from 'react-admin'

export const SessionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" label="Titre" />
      <ReferenceField source="event_id" reference="events" label="Événement">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="room_id" reference="rooms" label="Salle">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="start_time" label="Début" showTime />
      <DateField source="end_time" label="Fin" showTime />
    </Datagrid>
  </List>
)

const SessionForm = () => (
  <SimpleForm>
    <TextInput source="title" label="Titre" validate={required()} fullWidth />
    <TextInput source="description" label="Description" multiline rows={4} fullWidth />
    <ReferenceInput source="event_id" reference="events" label="Événement">
      <SelectInput optionText="title" validate={required()} />
    </ReferenceInput>
    <ReferenceInput source="room_id" reference="rooms" label="Salle">
      <SelectInput optionText="name" validate={required()} />
    </ReferenceInput>
    <DateTimeInput source="start_time" label="Heure de début" validate={required()} />
    <DateTimeInput source="end_time" label="Heure de fin" validate={required()} />
    <NumberInput source="capacity" label="Capacité" />
  </SimpleForm>
)

export const SessionCreate = () => (
  <Create>
    <SessionForm />
  </Create>
)

export const SessionEdit = () => (
  <Edit>
    <SessionForm />
  </Edit>
)