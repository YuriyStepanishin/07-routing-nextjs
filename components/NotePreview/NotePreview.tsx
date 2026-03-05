"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

export default function NotePreview({ id }: { id: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <p>Note not found</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
}