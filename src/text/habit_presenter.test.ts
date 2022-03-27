import HabitPresenter, { HabitPresenterI } from "../habit_presenter";
import { HabitT } from "../interface";

describe("HabitPresenter", () => {
  const habits: HabitT[] = [
    { id: 1, name: "Reading", count: 1 },
    { id: 2, name: "Running", count: 0 },
  ];
  const MAX_HABITS: number = 3;
  let presenter: HabitPresenterI;
  let update: jest.Mock; //mock function provided by jest.fn()
  //initialize presenter before each test
  beforeEach(() => {
    presenter = new HabitPresenter(habits, MAX_HABITS);
    update = jest.fn();
  });

  it("inits inital habits", () => {
    expect(presenter.habits).toEqual(habits);
  });

  it("increase habit count and call update function", () => {
    presenter.onIncrement(habits[0], update);

    expect(presenter.habits[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  describe("onDecrement", () => {
    it("decrease habit count and call update callback function", () => {
      presenter.onDecrement(habits[0], update);

      expect(presenter.habits[0].count).toBe(0);
      checkUpdateIsCalled();
    });

    it("does not set count below 0 when onDecrement and call update callback function", () => {
      presenter.onDecrement(habits[1], update);
      expect(presenter.habits[1].count).toBe(0);
      checkUpdateIsCalled();
    });
  });

  it("deletes habit from list and call update callback function", () => {
    presenter.onDelete(habits[1], update);
    expect(presenter.habits.length).toBe(1);
    expect(presenter.habits[0].name).toBe("Reading");
    checkUpdateIsCalled();
  });

  describe("onAdd", () => {
    it("adds new habit to the list and call update callback function", () => {
      presenter.onAdd("yoga", update);
      expect(presenter.habits[2].name).toBe("yoga");
      expect(presenter.habits[2].count).toBe(0);
      checkUpdateIsCalled();
    });

    it("throws an error when the max habit limit is exceeded", () => {
      presenter.onAdd("yoga", update);
      expect(() => presenter.onAdd("laundary", update)).toThrow(
        `Habit list length cannot be more than ${MAX_HABITS}`
      );
      checkUpdateIsCalled();
    });
  });

  describe("onReset", () => {
    it("resets hait count to be zero", () => {
      presenter.onReset(update);
      expect(presenter.habits[0].count).toBe(0);
      expect(presenter.habits[1].count).toBe(0);
    });

    //object immutability check
    it("call update callback function only if the count is not zero", () => {
      const habits = presenter.habits;
      presenter.onReset(update);
      const updatedHabits = presenter.habits;

      // [note] .toEqual compares field value, toBe compares reference value
      expect(updatedHabits[1]).toBe(habits[1]);
    });
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenLastCalledWith(presenter.habits);
  }
});
