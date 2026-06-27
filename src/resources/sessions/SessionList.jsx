import {
  List, Datagrid, TextField, DateField, ReferenceField,
  Create, Edit, SimpleForm,
  TextInput, DateTimeInput, ReferenceInput, SelectInput,
  NumberInput, ReferenceArrayInput, SelectArrayInput,
  required
} from 'react-admin'

export const SessionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" label="Titre" />
      <ReferenceField source="eventId" reference="events" label="Événement">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="roomId" reference="rooms" label="Salle">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="startTime" label="Début" showTime />
      <DateField source="endTime" label="Fin" showTime />
    </Datagrid>
  </List>
)

const SessionForm = () => (
  <SimpleForm>
    <TextInput source="title" label="Titre" validate={required()} fullWidth />
    <TextInput source="description" label="Description" multiline rows={4} fullWidth />
    <ReferenceInput source="eventId" reference="events" label="Événement">
      <SelectInput optionText="title" validate={required()} />
    </ReferenceInput>
    <ReferenceInput source="roomId" reference="rooms" label="Salle">
      <SelectInput optionText="name" validate={required()} />
    </ReferenceInput>
    <DateTimeInput source="startTime" label="Heure de début" validate={required()} />
    <DateTimeInput source="endTime" label="Heure de fin" validate={required()} />
    <NumberInput source="capacity" label="Capacité" />
    <ReferenceArrayInput source="speakerIds" reference="speakers" label="Intervenants">
      <SelectArrayInput optionText="fullName" />
    </ReferenceArrayInput>
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