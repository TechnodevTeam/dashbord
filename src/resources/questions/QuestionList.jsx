import {
  List, Datagrid, TextField, DateField, NumberField,
  ReferenceField, DeleteButton, EditButton,
  Filter, ReferenceInput, SelectInput
} from 'react-admin'

const QuestionFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput source="sessionId" reference="sessions" label="Session" alwaysOn>
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
)

export const QuestionList = () => (
  <List filters={<QuestionFilter />}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="sessionId" reference="sessions" label="Session">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="content" label="Question" />
      <TextField source="authorName" label="Auteur" />
      <NumberField source="upvotes" label="Votes" />
      <DateField source="createdAt" label="Posée le" showTime />
      <DeleteButton />
    </Datagrid>
  </List>
)