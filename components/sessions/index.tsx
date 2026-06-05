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
  NumberInput,
  DateTimeInput,
  TabbedForm,
  FormTab,
} from "react-admin";
import { QuestionsTab } from "./questionsTab";

export const SessionList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="roomName" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const SessionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" multiline />
      <NumberInput source="eventId" />
      <NumberInput source="roomId" />
      <DateTimeInput source="startTime" />
      <DateTimeInput source="endTime" />
    </SimpleForm>
  </Create>
);

export const SessionEdit = () => (
  <Edit>
    <TabbedForm>
      <FormTab label="Informations">
        <TextInput source="title" />
        <TextInput source="description" multiline />
        <NumberInput source="eventId" />
        <NumberInput source="roomId" />
        <DateTimeInput source="startTime" />
        <DateTimeInput source="endTime" />
      </FormTab>
      <FormTab label="Questions">
        <QuestionsTab />
      </FormTab>
    </TabbedForm>
  </Edit>
);