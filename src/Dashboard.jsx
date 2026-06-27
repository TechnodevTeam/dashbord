import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const StatCard = ({ title, value, color, path }) => {
  const navigate = useNavigate()
  return (
    <Card
      onClick={() => navigate(path)}
      sx={{
        cursor: 'pointer',
        flex: 1,
        minWidth: 160,
        borderTop: `4px solid ${color}`,
        '&:hover': { boxShadow: 4 }
      }}
    >
      <CardHeader title={title} titleTypographyProps={{ fontSize: 14, color: 'text.secondary' }} />
      <CardContent>
        <p style={{ fontSize: 40, fontWeight: 'bold', margin: 0, color }}>{value}</p>
      </CardContent>
    </Card>
  )
}

export const Dashboard = () => {
  const [stats, setStats] = useState(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    fetch('http://localhost:8080/api/stats', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(setStats)
      .catch(console.error)
  }, [])

  if (!stats) return <p style={{ padding: 24 }}>Chargement des statistiques...</p>

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 24 }}>Tableau de bord EventSync</h2>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
        <StatCard title="Événements" value={stats.events} color="#3f51b5" path="/events" />
        <StatCard title="Sessions" value={stats.sessions} color="#00bcd4" path="/sessions" />
        <StatCard title="Intervenants" value={stats.speakers} color="#4caf50" path="/speakers" />
        <StatCard title="Questions" value={stats.questions} color="#ff9800" path="/questions" />
        <StatCard title="Sessions Live" value={stats.liveSessions} color="#f44336" path="/sessions" />
      </div>

      <Card>
        <CardHeader title="Accès rapide" />
        <CardContent>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { label: '+ Nouvel événement', path: '/events/create', color: '#3f51b5' },
              { label: '+ Nouvelle session', path: '/sessions/create', color: '#00bcd4' },
              { label: '+ Nouvel intervenant', path: '/speakers/create', color: '#4caf50' },
              { label: '+ Nouvelle salle', path: '/rooms/create', color: '#9c27b0' },
            ].map(btn => (
              <button
                key={btn.path}
                onClick={() => window.location.hash = btn.path}
                style={{
                  padding: '10px 20px',
                  backgroundColor: btn.color,
                  color: 'white',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}