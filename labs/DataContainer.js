"use strict";

class DataContainer {
    constructor(base) {
        this.tasks = new Map(global_index.values.map(e => [e.id, e]));;
        this.solutions = new Map(global_sol.values.map(e => [e.data.labId, e]));

        this.tasks.forEach(x => {
            if (this.solutions.has(x.id)) {
                x.tags.push("solved_x");
            }
        })
    }

    getId(item) {
        return item.data.labId;
    }
}