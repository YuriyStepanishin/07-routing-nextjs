"use client"

import NoteDetails from "@/app/notes/[id]/NoteDetails.client";
interface NotePreviewProps {
  id: string;
} 
export default function NotePreview({ id }: NotePreviewProps ) {
  return <NoteDetails id={id} />;
}