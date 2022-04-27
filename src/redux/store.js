import { configureStore } from "@reduxjs/toolkit";
import QuestionDataSlice from "./QuestionDataSlice";
export const store = configureStore({
  reducer: {
    questions: QuestionDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
