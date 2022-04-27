import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  questionData: { loading: false, data: [] },
};

export const getQuestionsData = createAsyncThunk(
  "questions/getQuestions",
  async () => {
    return await axios.get(process.env.REACT_APP_QUESTION_API_URL);
  }
);
export const questionDataSlice = createSlice({
  name: "questions",
  initialState,
  extraReducers: {
    [getQuestionsData.pending]: (state) => {
      state.questionData.loading = true;
    },
    [getQuestionsData.fulfilled]: (state, { payload }) => {
      state.questionData.data = payload?.data?.data?.questions;
      state.questionData.loading = false;
    },
    [getQuestionsData.rejected]: (state) => {
      state.questionData.loading = false;
    },
  },
  reducers: {},
});

export default questionDataSlice.reducer;
