import { HabitT } from "./interface";

export interface HabitPresenterI {
  habits: HabitT[];
  onIncrement(
    habit: HabitT,
    update: React.Dispatch<React.SetStateAction<HabitT[]>>
  ): void;
  onDecrement(
    habit: HabitT,
    update: React.Dispatch<React.SetStateAction<HabitT[]>>
  ): void;
  onDelete(
    habit: HabitT,
    update: React.Dispatch<React.SetStateAction<HabitT[]>>
  ): void;
  onAdd(
    name: string,
    update: React.Dispatch<React.SetStateAction<HabitT[]>>
  ): void;

  onReset(update: React.Dispatch<React.SetStateAction<HabitT[]>>): void;
}

export default class HabitPresenter implements HabitPresenterI {
  constructor(private _habits: HabitT[], private MAX_HABITS: number) {}
  get habits(): HabitT[] {
    return this._habits;
  }

  onIncrement(
    habit: HabitT,
    update: React.Dispatch<React.SetStateAction<HabitT[]>>
  ) {
    this._habits = this._habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    update(this._habits);
  }

  onDecrement(
    habit: HabitT,
    update: React.Dispatch<React.SetStateAction<HabitT[]>>
  ) {
    this._habits = this._habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    update(this._habits);
  }

  onDelete(
    habit: HabitT,
    update: React.Dispatch<React.SetStateAction<HabitT[]>>
  ) {
    this._habits = this._habits.filter((item) => item.id !== habit.id);
    update(this._habits);
  }

  onAdd(name: string, update: React.Dispatch<React.SetStateAction<HabitT[]>>) {
    if (this._habits.length === this.MAX_HABITS) {
      throw new Error(
        `Habit list length cannot be more than ${this.MAX_HABITS}`
      );
    }
    this._habits = [...this._habits, { id: Date.now(), name, count: 0 }];
    update(this._habits);
  }

  onReset(update: React.Dispatch<React.SetStateAction<HabitT[]>>) {
    this._habits = this._habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
      // return { ...habit, count: 0 };
    });
    update(this._habits);
  }
}
