import {
  List, Datagrid, TextField, UrlField, ImageField,
  Create, Edit, SimpleForm,
  TextInput, required, useRecordContext
} from 'react-admin'
import { useState } from 'react'

const PhotoPreviewInput = () => {
  const record = useRecordContext()
  const [url, setUrl] = useState(record?.photoUrl || '')

  return (
    <div style={{ width: '100%' }}>
      <TextInput
        source="photoUrl"
        label="URL Photo"
        fullWidth
        onChange={(e) => setUrl(e.target.value)}
      />
      {url && (
        <div style={{ marginTop: 8, marginBottom: 16 }}>
          <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>Aperçu :</p>
          <img
            src={url}
            alt="Aperçu"
            onError={(e) => { e.target.style.display = 'none' }}
            onLoad={(e) => { e.target.style.display = 'block' }}
            style={{
              width: 120,
              height: 120,
              objectFit: 'cover',
              borderRadius: 8,
              border: '1px solid #ddd',
              display: 'block'
            }}
          />
        </div>
      )}
    </div>
  )
}

export const SpeakerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ImageField
        source="photoUrl"
        label="Photo"
        sx={{ '& img': { width: 48, height: 48, objectFit: 'cover', borderRadius: '50%' } }}
      />
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
    <PhotoPreviewInput />
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