import {
  List, Datagrid, TextField, UrlField, ImageField,
  Create, Edit, SimpleForm,
  TextInput, required
} from 'react-admin'

export const SpeakerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ImageField source="photoUrl" label="Photo" />
      <TextField source="fullName" label="Nom" />
      <TextField source="bio" label="Biographie" />
      <UrlField source="externalLinks" label="Liens" />
    </Datagrid>
  </List>
)

const SpeakerForm = () => (
  <SimpleForm>
    <TextInput source="fullName" label="Nom complet" validate={required()} fullWidth />
    <TextInput source="bio" label="Biographie" multiline rows={4} fullWidth />
    <TextInput source="photoUrl" label="URhttp://localhost:8080/api/speakersL Photo" fullWidth />
    <TextInput source="externalLinks" label="Liens externes" fullWidth />
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