import { fetchNotes } from "@/lib/api"
import NotesClient from "./Notes.client"

export default async function NotesPag() {
  const data = await fetchNotes(1, 12, '')

  return (
    <NotesClient initialData={data}/>
  )
} 
