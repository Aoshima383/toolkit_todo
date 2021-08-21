import { createSlice } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

const initialState = {
  // taskが何個あるのかを管理する
  idCount: 1,
  // storeに保存するtaskの一覧
  tasks: [{ id: 1, title: "Task A", completed: false }],
  // taskのtitle編集の際、どのtaskが選択されているか
  selectedTask: { id: 1, title: "Task A", completed: false },
  // Modal管理フラグ
  isModalOpen: false
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // taskの作成
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.counter,
        title: action.payload,
        completed: false
      };
      state.tasks=[newTask, ...state.tasks];
    },
  }
});

export const { createTask } = taskSlice.actions;

// Reactコンポーネントにimportすることで、Sliceとコンポーネントを結合する
export const selectTask = (state) => state.task.tasks;

export default taskSlice.reducer;
