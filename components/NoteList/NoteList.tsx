import { type Note } from "@/types/types"; 
import css from "../NoteList/NoteList.module.css"
import { useMutation, useQueryClient } from "@tanstack/react-query"
 import { toast } from 'react-toastify';
import { deleteNote } from "@/lib/api"; 
import Link from "next/link";


interface NoteListProps{
    notes: Note[]
}

export default function NoteList({ notes }: NoteListProps){
    const queryClient = useQueryClient();


    const deleteNoteMutation = useMutation<Note, Error, number>({
        mutationFn: deleteNote, 
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["notes"] }); 
          toast.success("Note deleted successfully!");
        },
        onError: (error) => {
          toast.error(`Error deleting note: ${error.message}`);
        },
    });
    
    const handleDeleteNote = (id: number) => {
        deleteNoteMutation.mutate(id); 
    
        if (notes.length === 0) {
            return <p className={css.noNotesMessage}>No notes found.</p>;
        }
   }

    return (
        <ul className={css.list}>
                {notes.map((note) => (
                    <li key={note.id} className={css.listItem}>
                        <h2 className={css.title}>{note.title}</h2>
                        <p className={css.content}>{note.content}</p>
                        <div className={css.footer}>
                            <span className={css.tag}>{note.tag}</span>

                            <Link href={`/notes/${note.id}`}>View details</Link>
                            <button
                                className={css.button}
                                onClick={() => handleDeleteNote(note.id)}
                                disabled={deleteNoteMutation.isPending}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))
                }
            </ul>)
        
}