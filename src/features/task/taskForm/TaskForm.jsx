import React from "react";
import { useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";

import styles from "./TaskForm.module.scss";

const TaskForm = () => {
  // react-hook-formの中から使いたい関数を取得する
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data) => {
    console.log(data);
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
