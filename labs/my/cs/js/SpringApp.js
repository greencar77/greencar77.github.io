"use strict";

function shortName(el) {
    let parts = el.canonical.split('.');
    let prefix = '';
    if (el.type == '@interface') {
        prefix = '@';
    }
    return prefix + parts[parts.length-1];
}

class SpringApp extends CsApp {
    constructor() {
        let springJavaTypes = document.getElementById("springJavaTypes");
        for (const e of global_spring_types.values) {
            let li = document.createElement("li");
            li.textContent = shortName(e);
            let kb = document.createElement("kb");
            kb.setAttribute("value", "import_" + e.canonical);
            li.appendChild(kb);
            springJavaTypes.appendChild(li);
        }

        super();
    }
}

