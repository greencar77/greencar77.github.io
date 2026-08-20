"use strict";

class HibernateApp extends CsApp {
    constructor() {
        super();
        this.prepareHibernateTypes();
        super.prepareKb();
    }

    prepareHibernateTypes() {
        const parentId = "hibernateJavaTypes";
        let source = global_hibernate_types.values;
        source = source.sort((a, b) => a.canonical.localeCompare(b.canonical));

        let parent = document.getElementById(parentId);
        for (const e of source) {
            let li = document.createElement("li");
            li.textContent = shortName(e);

            let jdoc = document.createElement("a");
            let root = 'https://docs.hibernate.org/orm/6.5/javadocs/';
            jdoc.href = root + e.canonical.replaceAll('.', '/') +  '.html';
            if (e.canonical.startsWith("jakarta.")) {
                // root = 'https://docs.oracle.com/javaee/8/api/';
                root = 'https://jakarta.ee/specifications/persistence/3.2/apidocs/jakarta.persistence/';
                jdoc.href = root + e.canonical.replaceAll('.', '/').toLowerCase();
            }
            jdoc.textContent = "[API]";
            li.appendChild(document.createTextNode(" "));
            li.appendChild(jdoc);

            let kb = document.createElement("kb");
            kb.setAttribute("value", "import_" + e.canonical);
            li.appendChild(kb);

            parent.appendChild(li);
        }
    }
}

