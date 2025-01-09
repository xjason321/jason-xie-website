import React, { useEffect, useState } from "react";
import NoteSelector from "@/components/shared/notes/NoteSelector";

interface Note {
  title: string;
  imagePath: string;
  date: string;
  id: string;
  isLeft: boolean;
}

export function ListOfNotes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('/posts/_notes.json');
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
      {notes.map((note, index) => (
        <NoteSelector
          key={note.id}
          title={note.title}
          imagePath={note.imagePath}
          date={note.date}
          id={note.id}
          isLeft={index % 2 === 0}
        />
      ))}
    </>
  );
}

export default ListOfNotes;
