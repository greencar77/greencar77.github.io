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

            let jdoc = document.createElement("a");
            let root = 'https://docs.spring.io/spring-framework/docs/current/javadoc-api/';
            if (e.canonical.indexOf(".boot.") > -1) {
                root = 'https://docs.spring.io/spring-boot/api/java/';
            }
            jdoc.href = root + e.canonical.replaceAll('.', '/') +  '.html';
            jdoc.textContent = "[API]";
            li.appendChild(document.createTextNode(" "));
            li.appendChild(jdoc);

            if (e.links) {
                for (const l of e.links) {
                    if (l.indexOf("https://www.baeldung.com/") > -1) {
                        let a = document.createElement("a");
                        a.href = l;
                        a.textContent = "[Bae]";
                        li.appendChild(document.createTextNode(" "));
                        li.appendChild(a);
                    }
                }
            }

            let kb = document.createElement("kb");
            kb.setAttribute("value", "import_" + e.canonical);
            li.appendChild(kb);

            springJavaTypes.appendChild(li);
        }

        super();
    }
}

