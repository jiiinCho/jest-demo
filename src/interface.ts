export type HabitT = {
  id: number;
  name: string;
  count: number;
};

export type IncrementT = (habit: HabitT) => void;
export type DecreamentT = (habit: HabitT) => void;
export type DeleteT = (habit: HabitT) => void;
export type AddT = (name: string) => void;
export type ResetT = () => void;
