import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./App.css";
import Habits from "./components/Habits";
import Navbar from "./components/Navbar";
import {
  HabitT,
  IncrementT,
  DecreamentT,
  DeleteT,
  AddT,
  ResetT,
} from "./interface";

const App = () => {
  const [habits, setHabits] = useState<HabitT[]>([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handleIncrement: IncrementT = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement: DecreamentT = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  }, []);

  const handleDelete: DeleteT = useCallback((habit) => {
    setHabits((habits) => habits.filter((item) => item.id !== habit.id));
  }, []);

  const handleAdd: AddT = useCallback((name) => {
    setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []);

  const handleReset: ResetT = useCallback(() => {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      })
    );
  }, []);

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
