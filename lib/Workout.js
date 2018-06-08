class Workout {
    constructor(params = {}) {
        const defaultLength = { value: 25, unit: 'm' };
        const { date, style, poolLength = defaultLength, sets = [] } = params;
        
        this.date = date || new Date().toISOString();
        this.style = style;
        this.poolLength = poolLength;
        this.sets = sets.map(x => new WorkoutSet(x));
    }

    addSet(set) {
        if (!set) throw new Error('Must include set when adding a set');

        this.sets.push(set);
    }
}

class WorkoutSet {
    constructor(params = {}) {
        const { style, laps, rest, distance = 25 } = params;

        this.style = style;
        this.laps = laps;
        this.distance = distance;
        this.rest = rest;
    }
}

module.exports = {
    Workout,
    WorkoutSet
};
