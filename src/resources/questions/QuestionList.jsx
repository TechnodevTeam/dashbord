import {
  List, Datagrid, TextField, DateField, NumberField,
  ReferenceField, DeleteButton,
  Filter, ReferenceInput, SelectInput,
  useRecordContext, useNotify, useRefresh
} from 'react-admin'
import { useState } from 'react'

const QuestionFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput source="sessionId" reference="sessions" label="Session" alwaysOn>
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
)

const AnswerButton = () => {
  const record = useRecordContext()
  const notify = useNotify()
  const refresh = useRefresh()
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!content.trim()) return
    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const res = await fetch(`http://localhost:8080/api/questions/${record.id}/answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content })
      })
      if (!res.ok) throw new Error()
      notify('Réponse envoyée', { type: 'success' })
      setContent('')
      setOpen(false)
      refresh()
    } catch {
      notify('Erreur lors de l\'envoi', { type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: '4px 12px',
          backgroundColor: '#3f51b5',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          fontSize: 13,
        }}
      >
        Répondre
      </button>

      {open && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'white', borderRadius: 8, padding: 24,
            width: 480, boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ margin: '0 0 8px' }}>Répondre à la question</h3>
            <p style={{ color: '#666', fontSize: 14, margin: '0 0 16px' }}>
              <strong>{record.content}</strong>
            </p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Votre réponse..."
              rows={4}
              style={{
                width: '100%', padding: 12, borderRadius: 4,
                border: '1px solid #ddd', fontSize: 14,
                resize: 'vertical', boxSizing: 'border-box'
              }}
            />
            <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'flex-end' }}>
              <button
                onClick={() => { setOpen(false); setContent('') }}
                style={{
                  padding: '8px 16px', border: '1px solid #ddd',
                  borderRadius: 4, cursor: 'pointer', background: 'white'
                }}
              >
                Annuler
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading || !content.trim()}
                style={{
                  padding: '8px 16px', backgroundColor: '#3f51b5',
                  color: 'white', border: 'none', borderRadius: 4,
                  cursor: 'pointer', opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? 'Envoi...' : 'Envoyer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

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
      <AnswerButton />
      <DeleteButton />
    </Datagrid>
  </List>
)