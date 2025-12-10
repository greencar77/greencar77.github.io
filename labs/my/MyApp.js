"use strict";

class MyApp {


    constructor() {
        this.data = new DataContainer(global_index);
        this.appData = this.data.data;

        this.show();
    }

    show() {
        let main = document.getElementById('main');

        main.appendChild(this.createTitle('x', 'Completed Tasks'));

        let table = document.createElement('table');
        let sorted = Array.from(this.data.solutions.values()).sort(this.compare);
        sorted.forEach(e => {
            table.appendChild(this.entryCreator(e));
        });

        main.appendChild(table);
    }

    entryCreator(entry, skippingTags) {
        let result = document.createElement('tr');
        result.innerHTML = this.createItem(entry, skippingTags);
        return result;
    }

    compare(a, b) {
        if (a.data.completed > b.data.completed){
            return -1;
        }
        if (a.data.completed < b.data.completed){
            return 1;
        }
        return 0;
    }

    createItem(entry, skippingTags) {
        let task = this.data.tasks.get(entry.data.labId);
        let langLv;
        let langEn;
        if (task.lang.includes('lv')) {
            langLv = true;
        }
        if (task.lang.includes('en')) {
            langEn = true;
        }
        let linkLv = (langLv? '<a href="' + this.getLocalizedLink(task, 'lv') + '">[lv]</a>' : '');
        let linkEn = (langEn? '<a href="' + this.getLocalizedLink(task, 'en') + '">[en]</a>' : '');
        if (task.type == 'special') {
            linkEn = '<a href="' + task.url + '">[en]</a>';
        }
        return '<td>'
            + entry.data.completed
            + '</td>'
            + '<td>'
            + '<span class="titleclass">' + (task.title? task.title : task.path) + '</span>' + ' ' + '<span class="idclass">(' + task.id + ')</span>'
            + '</td>'
            + '<td>'
            + linkLv
            + '</td>'
            + '<td>'
            + linkEn
            + '</td>'
            + '<td>'
            + '<a href="https://github.com/greencar77/labssol/tree/main/' + entry.path + '">[solution]</a>'
            + '</td>'
            ;
    }

    getLocalizedLink(entry, lang) {
        let link;
        if (entry.type == 'simple') {
            link = entry.path + (lang == 'en'? '_en' : '') + '.md';
        }
        if (entry.type == 'standalone') {
            if (lang == 'lv') {
                link = entry.path + '/practice.md';
            }
            else {
                link = entry.path + '/practice_en.md';
            }
        }
        link = 'https://github.com/greencar77/labs/blob/master/ch/' + link;
        return link;
    }

    createTitle(id, text) {
        let result = document.createElement('h2');
        result.setAttribute('id', id);
        result.textContent = text;
        return result;
    }
}