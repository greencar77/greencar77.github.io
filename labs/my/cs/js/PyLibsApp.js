"use strict";

class PyLibsApp {
    constructor(data) {
        this.data = data.values;
        this.show();
    }

    show() {
        let main = document.getElementById('methods');

        let ol = document.createElement('ol');
        Object.keys(this.data).forEach(module => {
            let li = document.createElement('li');
            li.innerHTML = module;
            ol.appendChild(li);
            let children = this.data[module];
            let olChild = document.createElement('ol');
            children.forEach(c => {
                if (typeof c === 'string') {
                    this.appendString(olChild, c);
                } else if (c.type == 'method') {
                    this.appendMethod(olChild, c);
                } else if (c.type == 'class') {
                    this.appendClass(olChild, c);
                } else {
                    alert(c)
                }
            });
            ol.appendChild(olChild);
        });

        main.appendChild(ol);
    }

    appendString(parent, e) {
        let li = document.createElement('li');
        li.innerHTML = e;
        parent.appendChild(li);
    }

    appendMethod(parent, e) {
        let li = document.createElement('li');
        li.innerHTML = e.name + (e.docUrl? ' <a href="' + e.docUrl + '">doc</a>' : '');
        parent.appendChild(li);
    }

    appendClass(parent, e) {
        let li = document.createElement('li');
        li.innerHTML = e.name + (e.docUrl? ' <a href="' + e.docUrl + '">doc</a>' : '');
        parent.appendChild(li);
        let ol = document.createElement('ol');
        e.methods.forEach(m => {
            this.appendClassMember(ol, m);
        });
        parent.appendChild(ol);
    }

    appendClassMember(parent, e) {
        let li = document.createElement('li');
        li.innerHTML = e.name + (e.docUrl? ' <a href="' + e.docUrl + '">doc</a>' : '');;
        parent.appendChild(li);
    }
}