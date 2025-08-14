export interface Note{
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    tag: string;
}

export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

  export interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}
  

export interface NewNoteContent {
    title: string;
    content: string;
    tag: NoteTag;
  }