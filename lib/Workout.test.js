const Workout = require('./Workout');

test('is a function', () => {
    expect(typeof Workout).toEqual('function');
});

test('has a parameterless constructor', () => {
    expect(() => new Workout()).not.toThrow();
});

test('defaults date to now if none provided', () => {
    const workout = new Workout();
    expect(workout.date).toBeDefined();
});

test('defaults set to empty list if none provided', () => {
    const workout = new Workout();
    expect(workout.sets).toEqual(expect.anything());
    expect(workout.sets.length).toEqual(0);
});

test('has an addSet function', () => {
    const workout = new Workout();
    expect(workout.addSet).toExist;
});

test('requires a set parameter for addSet', () => {
    const workout = new Workout();
    expect(() => workout.addSet()).toThrow();
});
