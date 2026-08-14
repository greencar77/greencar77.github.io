"use strict";

class SpringApp extends CsApp {
    constructor() {
        super();
        this.prepareJavaTypes();
        this.prepareStarter();
        super.prepareKb();
    }

    prepareJavaTypes() {
        const parentId = "springJavaTypes";
        const source = global_spring_types.values;

        let parent = document.getElementById(parentId);
        for (const e of source) {
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

            parent.appendChild(li);
        }
    }

    prepareStarter() {
        const parentId = "springStarter";
        let source = global_spring_starter.values;
        source = source.sort((a, b) => (a.groupId + ":" + a.artifactId).localeCompare(b.groupId + ":" + b.artifactId));

        let parent = document.getElementById(parentId);
        for (const e of source) {
            let li = document.createElement("li");
            let val = e.artifactId;
            if (val.startsWith("spring-boot-starter-")) {
                val = val.substring("spring-boot-starter-".length);
            }
            li.textContent = val;

            let kb = document.createElement("kb");
            kb.setAttribute("value", "mvndep_" + e.groupId + ":" + e.artifactId);
            li.appendChild(kb);

            parent.appendChild(li);
        }
    }

    detailsRoot() {
        return super.detailsRoot() + '../';
    }

}

