import {
  List, Datagrid, TextField, DateField,
  Create, Edit, SimpleForm,
  TextInput, SelectInput, PasswordInput, required, email
} from 'react-admin'

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstName" label="Prénom" />
      <TextField source="lastName" label="Nom" />
      <TextField source="email" label="Email" />
      <TextField source="role" label="Rôle" />
      <DateField source="createdAt" label="Créé le" />
    </Datagrid>
  </List>
)

const UserForm = ({ isEdit = false }) => (
  <SimpleForm>
    <TextInput source="firstName" label="Prénom" fullWidth />
    <TextInput source="lastName" label="Nom" fullWidth />
    <TextInput source="email" label="Email" validate={[required(), email()]} fullWidth />
    <PasswordInput
      source="password"
      label={isEdit ? "Nouveau mot de passe (laisser vide pour ne pas changer)" : "Mot de passe"}
      validate={isEdit ? [] : [required()]}
      fullWidth
    />
    <SelectInput source="role" label="Rôle" validate={required()} choices={[
      { id: 'admin', name: 'Admin' },
      { id: 'moderator', name: 'Modérateur' },
      { id: 'user', name: 'Utilisateur' },
    ]} />
  </SimpleForm>
)

export const UserCreate = () => (
  <Create>
    <UserForm isEdit={false} />
  </Create>
)

export const UserEdit = () => (
  <Edit>
    <UserForm isEdit={true} />
  </Edit>
)