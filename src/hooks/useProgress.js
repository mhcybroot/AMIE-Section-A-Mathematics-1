import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';

const STORAGE_KEY_COMPLETED = 'amie_math1_completed';
const STORAGE_KEY_STARRED = 'amie_math1_starred';
const STORAGE_KEY_NOTES = 'amie_math1_notes';

export function useProgress() {
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [starred, setStarred] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STARRED);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_NOTES);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completed));
    } catch (e) {
      console.error(e);
    }
  }, [completed]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STARRED, JSON.stringify(starred));
    } catch (e) {
      console.error(e);
    }
  }, [starred]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notes));
    } catch (e) {
      console.error(e);
    }
  }, [notes]);

  const toggleCompleted = useCallback((id) => {
    setCompleted((prev) => {
      const exists = prev.includes(id);
      if (!exists) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#a78bfa', '#38bdf8', '#34d399', '#f472b6']
        });
        return [...prev, id];
      }
      return prev.filter((item) => item !== id);
    });
  }, []);

  const toggleStarred = useCallback((id) => {
    setStarred((prev) => {
      return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
    });
  }, []);

  const updateNote = useCallback((id, text) => {
    setNotes((prev) => ({
      ...prev,
      [id]: text
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    if (window.confirm('Are you sure you want to reset all your study progress and bookmarks?')) {
      setCompleted([]);
      setStarred([]);
      setNotes({});
    }
  }, []);

  return {
    completed,
    starred,
    notes,
    toggleCompleted,
    toggleStarred,
    updateNote,
    resetAllProgress,
    isCompleted: (id) => completed.includes(id),
    isStarred: (id) => starred.includes(id),
    getNote: (id) => notes[id] || ''
  };
}
