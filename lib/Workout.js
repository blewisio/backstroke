class Workout {
    constructor(params = {}) {
        const { date, style, time } = params;
        
        this.date = date;
        this.style = style;
        this.time = time;
        this.sets = [];
    }
}

module.exports = Workout;
