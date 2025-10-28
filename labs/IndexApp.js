"use strict";

class IndexApp {
	
    filterConfig = {
            "tagPropName": "tags",
            "filters": null,
            "ignorableTags": null,
            "entryCreator": (entry, skippingTags) => this.entryCreator(entry, skippingTags),
            "appName": "app",
            "filterPropertyName": "filterApp",
            "itemsComparator": (a, b) => {
                if (a.id && b.id) {
                    if (a.id == b.id) {
                        return 0;
                    }
                    if (a.id > b.id) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
                return 0;
            },
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
            ],
            "containerFn": () => this.createContainerTable,
        };


    constructor() {
        this.data = new DataContainer(base);
        this.appData = this.data.data;
        this.filterApp = new FilterCore(this.appData, this.filterConfig);
        this.filterApp.init();
    }

    show() {
        let main = document.getElementById('main');

        main.appendChild(this.createTitle('x', 'Practices'));

        let table = document.createElement('table');
        let sorted = this.data.data.sort((a, b) => a.path.localeCompare(b.path));
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
        let langLv;
        let langEn;
        if (entry.lang.includes('lv')) {
            langLv = true;
        }
        if (entry.lang.includes('en')) {
            langEn = true;
        }


        return '<td>'
            + entry.path
            + '</td>'
            + '<td>'
            + (langLv? '<a href="' + this.getLocalizedLink(entry, 'lv') + '">[lv]</a>' : '')
            + '</td>'
            + '<td>'
            + (langEn? '<a href="' + this.getLocalizedLink(entry, 'en') + '">[en]</a>' : '')
            + '</td>'
//            + '<td>'
//            + '<a href="practice/' + entry.path + '/practice.txt">practice.txt</a>'
//            + ' ' + '(<a href="practice/' + entry.path + '">all files</a>)'
//            + '</td>'
//            + '<td>'
//            + '<a href="' + link + '">def</a>'
//            + '</td>'
//            + '<td>'
//            + '<a href="https://github.com/greencar77/labs/tree/master/base/' + entry.basePath + '">base zip</a>'
//            + '</td>'
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

    createContainerTable() {
        let outerElement = document.createElement('div');
        let innerElement = document.createElement('table');
        innerElement.setAttribute('class', 'filter');
        outerElement.appendChild(innerElement);
        return { "outer": outerElement, "inner": innerElement };
    }
}