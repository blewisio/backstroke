const { Workout } = require('./Workout');

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

test('parses sets into WorkoutSets', () => {
    const sets = [{
        style: 'freestyle',
        laps: 4,
        distance: 25
    }];
    const workout = new Workout({ sets });
    expect(workout.sets).toBeDefined();
    expect(workout.sets.length).toEqual(sets.length);
    expect(workout.sets.length).toBeGreaterThanOrEqual(1);
    expect(workout.sets.find(() => true)).toEqual(sets.find(() => true));
});
