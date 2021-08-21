import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";

import { createTask } from "../taskSlice";
import styles from "./TaskForm.module.scss";

const TaskForm = () => {
  // dispatchを行うことで、Reduxとcomponentを紐付けできる
  const dispatch = useDispatch();
  // react-hook-formの中から使いたい関数を取得する
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data) => {
    // タイトル名を渡して、新しいtaskを生成する（Reduxとの連携）
    dispatch(createTask(data.taskTitle));
    reset();
  };
  return (
    <div className={styles.root}>
      <form
        onSubmit={handleSubmit(handleCreate)}
        className={styles.form}
      >
        <TextField
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          {...register("taskTitle", {maxLength: 20})}
          className={styles.text_field}
        />
      </form>
    </div>
  );
};

export default TaskForm;
