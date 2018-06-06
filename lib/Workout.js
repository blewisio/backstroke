class Workout {
    constructor(params = {}) {
        const { date, style, sets = [] } = params;
        
        this.date = date || new Date().toISOString();
        this.style = style;
        this.sets = sets;
    }

    addSet(set) {
        if (!set) throw new Error('Must include set when adding a set');

        this.sets.push(set);
    }
}

module.exports = Workout;
