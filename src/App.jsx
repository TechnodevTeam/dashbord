import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider'
import authProvider from './authProvider'
import { Dashboard } from './Dashboard'

import { EventList, EventCreate, EventEdit } from './resources/events/EventList'
import { SessionList, SessionCreate, SessionEdit } from './resources/sessions/SessionList'
import { SpeakerList, SpeakerCreate, SpeakerEdit } from './resources/speakers/SpeakerList'
import { RoomList, RoomCreate } from './resources/rooms/RoomList'
import { QuestionList } from './resources/questions/QuestionList'

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      title="EventSync Admin"
    >
      <Resource name="events" list={EventList} create={EventCreate} edit={EventEdit} options={{ label: 'Événements' }} />
      <Resource name="sessions" list={SessionList} create={SessionCreate} edit={SessionEdit} options={{ label: 'Sessions' }} />
      <Resource name="speakers" list={SpeakerList} create={SpeakerCreate} edit={SpeakerEdit} options={{ label: 'Intervenants' }} />
      <Resource name="rooms" list={RoomList} create={RoomCreate} options={{ label: 'Salles' }} />
      <Resource name="questions" list={QuestionList} options={{ label: 'Questions' }} />
    </Admin>
  )
}