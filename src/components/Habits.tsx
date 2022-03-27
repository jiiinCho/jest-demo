import React from "react";
import Habit from "./Habit";
import HabitAddForm from "./HabitAddForm";
import {
  HabitT,
  IncrementT,
  DecreamentT,
  DeleteT,
  AddT,
  ResetT,
} from "../interface";

interface HabitsProps {
  habits: HabitT[];
  onIncrement: IncrementT;
  onDecrement: DecreamentT;
  onDelete: DeleteT;
  onAdd: AddT;
  onReset: ResetT;
}

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}: HabitsProps) => {
  return (
    <div className="habits">
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <div className="habit-reset-container">
        <button className="habits-reset" onClick={onReset}>
          Reset All
        </button>
      </div>
    </div>
  );
};

export default Habits;
