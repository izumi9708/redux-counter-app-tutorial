import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    // reducerを作成すると自動的にaction createrが作成される
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmont: (state, action) => {
      state.value += action.payload; // 入力された値を受け取るための書き方
    }
  }
})

// viewにaction createrを受け渡すため
export const { increment, decrement, incrementByAmont } = counterSlice.actions;
export default counterSlice.reducer;

