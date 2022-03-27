import React, { memo } from "react";
import { AddT } from "../interface";

interface HabitAddFormProps {
  onAdd: AddT;
}

const HabitAddForm = memo(({ onAdd }: HabitAddFormProps) => {
  const formRef = React.createRef<HTMLFormElement>();
  const inputRef = React.createRef<HTMLInputElement>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      const name = inputRef.current.value;
      onAdd(name);
      formRef.current && formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
