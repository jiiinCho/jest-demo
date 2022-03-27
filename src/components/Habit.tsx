import React, { memo } from "react";
import { HabitT, IncrementT, DecreamentT, DeleteT } from "../interface";

interface HabitProps {
  habit: HabitT;
  onIncrement: IncrementT;
  onDecrement: DecreamentT;
  onDelete: DeleteT;
}

const Habit = memo(
  ({ habit, onIncrement, onDecrement, onDelete }: HabitProps) => {
    const { name, count } = habit;
    const handleIncrement = () => {
      onIncrement(habit);
    };

    const handleDecrement = () => {
      onDecrement(habit);
    };

    const handleDelete = () => {
      onDelete(habit);
    };

    return (
      <li className="habit">
        <div className="habit-meta-container">
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
        </div>
        <div className="habit-button-container">
          <button
            className="habit-button habit-increase"
            onClick={handleIncrement}
          >
            <i className="fas fa-plus-square"></i>
          </button>
          <button
            className="habit-button habit-decrease"
            onClick={handleDecrement}
          >
            <i className="fas fa-minus-square"></i>
          </button>
          <button className="habit-button habit-delete" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
    );
  }
);

export default Habit;
