import React, { useState, useEffect } from "react";
import { useRecordContext, useDataProvider, useNotify } from "react-admin";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";

interface Answer {
  id: number;
  content: string;
  createdAt: string;
}

interface Question {
  id: number;
  content: string;
  authorName: string;
  upvotes: number;
  answers?: Answer[];
}

export const QuestionsTab = () => {
  const record = useRecordContext(); // peut être undefined
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const sessionId = record?.id;

  useEffect(() => {
    if (!sessionId) return;
    setLoading(true);
    // Appel direct à l'API car dataProvider n'a pas de resource "questions"
    fetch(`http://localhost:8080/sessions/${sessionId}/questions`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        notify("Erreur chargement questions", { type: "error" });
        setLoading(false);
      });
  }, [sessionId, notify]);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmitAnswer = async (questionId: number) => {
    const content = answers[questionId];
    if (!content?.trim()) return;
    try {
      const response = await fetch(`http://localhost:8080/sessions/questions/${questionId}/answers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ content }),
      });
      if (!response.ok) throw new Error("Erreur envoi réponse");
      const newAnswer = await response.json();
      // Met à jour l'état local pour afficher la réponse immédiatement
      setQuestions((prevQuestions) =>
        prevQuestions.map((q) =>
          q.id === questionId
            ? { ...q, answers: [...(q.answers || []), newAnswer] }
            : q
        )
      );
      setAnswers((prev) => ({ ...prev, [questionId]: "" }));
      notify("Réponse ajoutée", { type: "success" });
    } catch (error) {
      notify("Erreur envoi réponse", { type: "error" });
    }
  };

  if (!record) return null;
  if (loading) return <CircularProgress />;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Questions posées pendant la session
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Auteur</TableCell>
            <TableCell>Votes</TableCell>
            <TableCell>Réponse(s)</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((q) => (
            <TableRow key={q.id}>
              <TableCell>{q.content}</TableCell>
              <TableCell>{q.authorName}</TableCell>
              <TableCell>{q.upvotes}</TableCell>
              <TableCell>
                {q.answers && q.answers.length > 0 ? (
                  q.answers.map((a) => (
                    <Box key={a.id} sx={{ mb: 1, color: "green" }}>
                      {a.content}
                    </Box>
                  ))
                ) : (
                  <TextField
                    size="small"
                    placeholder="Votre réponse..."
                    value={answers[q.id] || ""}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  />
                )}
              </TableCell>
              <TableCell>
                {(!q.answers || q.answers.length === 0) && (
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleSubmitAnswer(q.id)}
                    disabled={!answers[q.id]?.trim()}
                  >
                    Répondre
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
          {questions.length === 0 && (
            <TableRow>
              <TableCell colSpan={5}>Aucune question pour l’instant</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
};