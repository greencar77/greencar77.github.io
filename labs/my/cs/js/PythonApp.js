"use strict";

class PythonApp extends CsApp {
    constructor() {
        super();
        this.prepareLibraries();
        new PyLibsApp(global_pylibs);
        super.prepareKb();
    }

    getDetailedLibraries() {
        const result = []
        const libraries = document.getElementsByClassName("library_det");
        for (const library of libraries) {
            result.push(library.textContent);
        }
        return result;
    }

    prepareLibraries() {
        let parent = document.getElementById("libraries");
        const sorted = global_python_libraries.values.sort((a, b) => a.id.localeCompare(b.id));

        const detailedLibraries = this.getDetailedLibraries();

        for (const e of sorted) {
            let li = document.createElement("li");
            if (e.homeUrl) {
                let a = document.createElement("a");
                a.href = e.homeUrl;
                a.textContent = e.name? e.name : e.id;
                li.appendChild(a);
            } else (
                li.textContent = e.id
            )

            if (detailedLibraries.includes(e.id)) {
                li.appendChild(document.createTextNode(' '));
                let a = document.createElement("a");
                a.href = "#det_" + e.id;
                a.textContent = "[v]";
                li.appendChild(a);
            }

            li.appendChild(createKb("pylib_", e.id));
            parent.appendChild(li);
        }
    }
}

