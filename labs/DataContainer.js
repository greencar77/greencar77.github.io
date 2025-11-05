"use strict";

class DataContainer {
    constructor(base) {
        this.data = global_index.values;

        let mySolved = global_sol.values.map(this.getId);
        this.data.forEach(x => {
            if (mySolved.includes(x.id)) {
                x.tags.push("solved_x");
            }
        })
    }

    getId(item) {
        return item.data.labId;
    }
}