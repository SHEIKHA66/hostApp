import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as ENV from "../config";

const initialState = {
  notes: [],
  comments: [],
  likes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveNote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveNote.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        // Update the state with fetched notes adding the latest notes in the beginning
        state.notes.unshift(action.payload);
      })
      .addCase(saveNote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getNotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Update the state with fetched notes
        console.log(action.payload);
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const saveNote = createAsyncThunk("notes/saveNote", async (noteData) => {
  try {
    //const response = await axios.post("http://localhost:3001/saveNote ", {

    const response = await axios.post(`${ENV.SERVER_URL}/saveNote `, {
      noteMsg: noteData.noteMsg,
      email: noteData.email,
    });
    const note = response.data.note;
    return note; //Return the new notes to Redux
  } catch (error) {
    console.log(error);
  }
});

export const getNotes = createAsyncThunk("note/getNotes", async () => {
  try {
    // const response = await axios.get("http://localhost:3001/getNotes");

    const response = await axios.get(`${ENV.SERVER_URL}/getNotes`);
    return response.data.notes;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

export default noteSlice.reducer;
