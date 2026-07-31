"use strict";

class DetailsApp {

    constructor() {
        this.data = new DataContainer(global_index);
        this.appData = Array.from(this.data.solutions.values());

        let reqId = window.location.hash.substring(1);
        this.entry = this.appData.filter(e => e.data.labId == reqId)[0];

        this.show();
    }

    show() {
        let pathEl = document.getElementById('details-path');
        pathEl.innerHTML = '<a href="https://github.com/greencar77/labssol/tree/main/' + this.entry.path + '">' + this.entry.path + '</a>';

        let idEl = document.getElementById('details-id');
        idEl.innerHTML = this.entry.data.labId;

        let tagsEl = document.getElementById('tags');
        this.entry.tags.forEach(t => {
            let tagEl = document.createElement('li');
            tagEl.innerHTML = t;
            tagsEl.appendChild(tagEl);
        });
    }
}