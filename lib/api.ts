import axios from "axios"
import { type Note, FetchNotesResponse,NewNoteContent } from "@/types/types"; 

const BASE_URL = "https://notehub-public.goit.study/api";

const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const fetchNotes = async (
  page: number = 1,
  perPage: number = 12,
  search: string = ""
): Promise<FetchNotesResponse> => {

    const response = await axiosConfig.get<FetchNotesResponse>("/notes", {
      params: {
        page,
        ...(search !== "" && { search: search }),
        perPage,
      },
    });

    return response.data;
};

export const createNote = async (content: NewNoteContent): Promise<Note> => {
    const response = await axiosConfig.post<Note>("/notes", content);
    return response.data;
 
};

export const deleteNote = async (id: number): Promise<Note> => {
    const response = await axiosConfig.delete<Note>(`/notes/${id}`);

    return response.data;
};

export const fetchNoteById = async(id:string):Promise<Note> => {
  const response = await axiosConfig.get(`/notes/${id}`)
  return response.data
}