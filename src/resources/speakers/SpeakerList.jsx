import {
  List, Datagrid, TextField, UrlField,
  Create, Edit, SimpleForm,
  TextInput, required
} from 'react-admin'

export const SpeakerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nom" />
      <TextField source="bio" label="Biographie" />
      <UrlField source="website" label="Site web" />
    </Datagrid>
  </List>
)

const SpeakerForm = () => (
  <SimpleForm>
    <TextInput source="name" label="Nom complet" validate={required()} fullWidth />
    <TextInput source="bio" label="Biographie" multiline rows={4} fullWidth />
    <TextInput source="photo_url" label="URL Photo" fullWidth />
    <TextInput source="website" label="Site web" fullWidth />
    <TextInput source="twitter" label="Twitter" fullWidth />
    <TextInput source="linkedin" label="LinkedIn" fullWidth />
  </SimpleForm>
)

export const SpeakerCreate = () => (
  <Create>
    <SpeakerForm />
  </Create>
)

export const SpeakerEdit = () => (
  <Edit>
    <SpeakerForm />
  </Edit>
)