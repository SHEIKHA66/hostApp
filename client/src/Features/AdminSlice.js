import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { StudsData } from "../Exampledata";

const initialState = {
  value: StudsData,
  admin: {}, // Stores the currently logged-in admin
  isLoading: false,
  isSuccess: false,
  isError: false,
  msg: null, // Error or success messages
};

// Async thunk for registering an admin
export const registerAdmin = createAsyncThunk(
  "admins/registerAdmin",
  async (studData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/registerAdmin", {
        name: studData.name,
        email: studData.email,
        password: studData.password,
      });
      return response.data.admin;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

// Async thunk for admin login
export const loginad = createAsyncThunk(
  "admins/loginad",
  async (studData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/loginad", {
        email: studData.email,
        password: studData.password,
      });
      return response.data.admin;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Invalid credentials"
      );
    }
  }
);

// Async thunk for admin logout
export const logoutad = createAsyncThunk(
  "admins/logoutad",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:3001/logoutad");
      return true;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);

// Admin slice
export const AdminSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    addStud: (state, action) => {
      state.value.push(action.payload); // Add new user to the list
    },
    deleteStud: (state, action) => {
      state.value = state.value.filter(
        (admin) => admin.email !== action.payload
      ); // Remove user by email
    },
    updateStud: (state, action) => {
      state.value = state.value.map((admin) =>
        admin.email === action.payload.email
          ? { ...admin, ...action.payload } // Update matching user
          : admin
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Register admin
      .addCase(registerAdmin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.msg = null;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.msg = "Registration successful";
        state.value.push(action.payload);
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.msg = action.payload;
      })

      // Login admin
      .addCase(loginad.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.msg = null;
      })
      .addCase(loginad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action.payload;
        state.msg = "Login successful";
      })
      .addCase(loginad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.msg = action.payload;
      })

      // Logout admin
      .addCase(logoutad.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.msg = null;
      })
      .addCase(logoutad.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.admin = {};
        state.msg = "Logout successful";
      })
      .addCase(logoutad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.msg = action.payload;
      });
  },
});

// Export actions
export const { addStud, deleteStud, updateStud } = AdminSlice.actions;
export default AdminSlice.reducer;
