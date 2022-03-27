import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./App.css";
import Habits from "./components/Habits";
import Navbar from "./components/Navbar";
import { HabitPresenterI } from "./habit_presenter";
import {
  HabitT,
  IncrementT,
  DecreamentT,
  DeleteT,
  AddT,
  ResetT,
} from "./interface";

interface AppProps {
  habitPresenter: HabitPresenterI;
}

const App = ({ habitPresenter }: AppProps) => {
  const [habits, setHabits] = useState<HabitT[]>(habitPresenter.habits);

  const handleIncrement: IncrementT = useCallback(
    (habit) => habitPresenter.onIncrement(habit, setHabits),
    [habitPresenter]
  );

  const handleDecrement: DecreamentT = useCallback(
    (habit) => habitPresenter.onDecrement(habit, setHabits),
    [habitPresenter]
  );

  const handleDelete: DeleteT = useCallback(
    (habit) => habitPresenter.onDelete(habit, setHabits),
    [habitPresenter]
  );

  const handleAdd: AddT = useCallback(
    (name) => habitPresenter.onAdd(name, setHabits),
    [habitPresenter]
  );

  const handleReset: ResetT = useCallback(
    () => habitPresenter.onReset(setHabits),
    [habitPresenter]
  );

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
