import { TabbedForm, FormTab, Edit, TextInput, NumberInput, DateTimeInput,  } from "react-admin";
import { QuestionsTab } from "./questionsTab";

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