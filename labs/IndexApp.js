"use strict";

class IndexApp {

    constructor() {
        this.data = new DataContainer(
              labs_practices);
        this.show();
    }

    show() {
        let main = document.getElementById('main');

        main.appendChild(this.createTitle('x', 'Practices'));

        let table = document.createElement('table');
        let sorted = this.data.practices.sort((a, b) => a.id.localeCompare(b.id));
        sorted.forEach(e => {
            table.appendChild(this.entryCreator(e));
        });

        main.appendChild(table);
    }

    entryCreator(entry) {
        let result = document.createElement('tr');
        result.innerHTML = this.createItem(entry);
        return result;
    }

    createItem = function(entry) {
        return '<td>'
            + entry.id
            + '</td>'
            + '<td>'
            + entry.name
            + '</td>'
            + '<td>'
            + '<a href="https://github.com/greencar77/labs/tree/master/practice/' + entry.path + '/practice.txt">practice.txt</a>'
            + '</td>'
            + '<td>'
            + '<a href="https://github.com/greencar77/labs/tree/master/practice/' + entry.path + '/solution">solution</a>'
            + '</td>'
            ;
    }

    createTitle(id, text) {
        let result = document.createElement('h2');
        result.setAttribute('id', id);
        result.textContent = text;
        return result;
    }
}