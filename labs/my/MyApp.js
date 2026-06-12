"use strict";

class MyApp {

    filterConfig = {
            "tagPropName": "tags",
            "filters":  [
                {
                   "id": "f1",
                   "random": true,
                },
            ],
            "ignorableTags": null,
            "entryCreator": (entry, skippingTags) => this.entryCreator(entry, skippingTags),
            "appName": "app",
            "filterPropertyName": "filterApp",
            "itemsComparator": this.compare,
            "tagGroups": [
                {
                    "id": "g2",
                    "byValues": [ "java", "python" ],
                    "title": "Programming language",
                },
                {
                    "title": "Language",
                    "byPrefix": "lang_",
                },
                {
                    "title": "Maven dependency",
                    "byPrefix": "mvndep_",
                },
                {
                    "title": "SpringBoot",
                    "byPrefix": "springboot_",
                },
                {
                    "title": "Python libs",
                    "byPrefix": "pylib_",
                },
            ],
            "containerFn": () => this.createContainerTable,
        };

    constructor() {
        this.data = new DataContainer(global_index);
        this.appData = Array.from(this.data.solutions.values());

        this.filterApp = new FilterCore(this.appData, this.filterConfig);
        this.filterApp.init();
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

    createContainerTable() {
        let outerElement = document.createElement('div');
        let innerElement = document.createElement('table');
        innerElement.setAttribute('class', 'filter');
        outerElement.appendChild(innerElement);
        return { "outer": outerElement, "inner": innerElement };
    }
}