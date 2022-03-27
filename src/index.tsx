import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import HabitPresenter, { HabitPresenterI } from "./habit_presenter";
import { HabitT } from "./interface";

const defaultHabit: HabitT[] = [
  { id: 1, name: "Reading", count: 0 },
  { id: 2, name: "Running", count: 0 },
  { id: 3, name: "Coding", count: 0 },
];

const MAX_HABITS: number = 3;
const habitPresenter: HabitPresenterI = new HabitPresenter(
  defaultHabit,
  MAX_HABITS
);

ReactDOM.render(
  <React.StrictMode>
    <App habitPresenter={habitPresenter} />
  </React.StrictMode>,
  document.getElementById("root")
);
