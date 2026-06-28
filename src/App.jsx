import { Admin, Resource, AppBar, TitlePortal, Layout } from 'react-admin'
import { createTheme } from '@mui/material/styles'
import dataProvider from './dataProvider'
import authProvider from './authProvider'
import { Dashboard } from './Dashboard'

import { EventList, EventCreate, EventEdit } from './resources/events/EventList'
import { SessionList, SessionCreate, SessionEdit } from './resources/sessions/SessionList'
import { SpeakerList, SpeakerCreate, SpeakerEdit } from './resources/speakers/SpeakerList'
import { RoomList, RoomCreate } from './resources/rooms/RoomList'
import { QuestionList } from './resources/questions/QuestionList'
import { UserList, UserCreate, UserEdit } from './resources/users/UserList'

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    secondary: { main: '#1d4ed8' },
    background: { default: '#f9fafb' },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#111827',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e5e7eb',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '14px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          fontWeight: 'bold',
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#2563eb',
          '&:hover': { backgroundColor: '#1d4ed8' },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#f8fafc',
          fontWeight: '700',
          color: '#111827',
        },
      },
    },
  },
})

const CustomAppBar = () => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'
  }
  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'
  }

  return (
    <AppBar>
      <TitlePortal />
      <a href="http://localhost:3000" target="_blank" rel="noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem', padding: '6px 14px', backgroundColor: '#3b82f6', borderRadius: '8px', marginRight: '1rem', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)', transition: 'background-color 0.2s' }}>
         Voir le site
      </a>
    </AppBar>
  )
}

const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} />

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      theme={theme}
      layout={CustomLayout}
      title="EventSync Admin"
    >
      <Resource
        name="events"
        list={EventList}
        create={EventCreate}
        edit={EventEdit}
        options={{ label: 'Événements' }}
      />
      <Resource
        name="sessions"
        list={SessionList}
        create={SessionCreate}
        edit={SessionEdit}
        options={{ label: 'Sessions' }}
      />
      <Resource
        name="speakers"
        list={SpeakerList}
        create={SpeakerCreate}
        edit={SpeakerEdit}
        options={{ label: 'Intervenants' }}
      />
      <Resource
        name="rooms"
        list={RoomList}
        create={RoomCreate}
        options={{ label: 'Salles' }}
      />
      <Resource
        name="questions"
        list={QuestionList}
        options={{ label: 'Questions' }}
      />
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        options={{ label: 'Utilisateurs' }}
      />
    </Admin>
  )
}