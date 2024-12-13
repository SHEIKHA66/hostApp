import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StudsData } from "../Exampledata";
import axios from "axios";

const initialState = {
  //value: StudsData,
  stud: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  msg: null,
};

export const registerStud = createAsyncThunk(
  "studs/registerStud",
  async (studData) => {
    try {
      //sends a POST request to the server along the request body object
      const response = await axios.post("http://localhost:3001/registerStud", {
        name: studData.name,
        email: studData.email,
        password: studData.password,
      });
      console.log(response);
      const stud = response.data.stud;
      return stud;
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk("studs/login", async (studData) => {
  try {
    const response = await axios.post("http://localhost:3001/login", {
      email: studData.email,
      password: studData.password,
    });

    const stud = response.data.stud;
    console.log(response);
    return stud;
  } catch (error) {
    const errorMessage = "Invalid credentials";
    alert(errorMessage);
    throw new Error(errorMessage);
  }
});

export const logout = createAsyncThunk("studs/logout", async () => {
  try {
    //send a request to your server to log the user out
    const response = await axios.post("http://localhost:3001/logout");
  } catch (error) {}
});

export const studSlice = createSlice({
  name: "studs",
  initialState,
  reducers: {
    addStud: (state, action) => {
      state.value.push(action.payload); //add the payload to the state
    },

    deleteStud: (state, action) => {
      state.value = state.value.filter((stud) => stud.email !== action.payload);
    },

    updateStud: (state, action) => {
      state.value.map((stud) => {
        //iterate the array and compare the email with the email from the payload
        if (stud.email === action.payload.email) {
          stud.name = action.payload.name;
          stud.password = action.payload.password;
        }
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerStud.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerStud.fulfilled, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerStud.rejected, (state) => {
        state.isLoading = false;
      })

      //for the login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.stud = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      //for the logout
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.stud = {};
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { addStud, deleteStud, updateStud } = studSlice.actions; //export the function

export default studSlice.reducer;
