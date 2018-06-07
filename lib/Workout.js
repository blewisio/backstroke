class Workout {
    constructor(params = {}) {
        const { date, style, poolLengthInMeters = 25, sets = [] } = params;
        
        this.date = date || new Date().toISOString();
        this.style = style;
        this.poolLengthInMeters = poolLengthInMeters;
        this.sets = sets;
    }

    addSet(set) {
        if (!set) throw new Error('Must include set when adding a set');

        this.sets.push(set);
    }
}

class WorkoutSet {
    constructor(params = {}) {
        const { style, laps, lapDistanceInMeters } = params;

        this.style = style;
        this.laps = laps;
        this.lapDistanceInMeters = lapDistanceInMeters;
    }
}

module.exports = {
    Workout,
    WorkoutSet
};
