"use strict";

class LinuxApp extends CsApp {
    constructor() {
        super();
        this.prepareLinuxCommands();
        super.prepareKb();
    }

    prepareLinuxCommands() {
        const parentId = "linuxCommands";
        let source = global_linux_commands.values;
        source = source.sort((a, b) => a.com.localeCompare(b.com));

        let parent = document.getElementById(parentId);
        for (const e of source) {
            let li = document.createElement("li");
            li.textContent = e.com;

            let kb = document.createElement("kb");
            kb.setAttribute("value", "nix_com_" + e.com);
            li.appendChild(kb);

            parent.appendChild(li);
        }
    }

    detailsRoot() {
        return super.detailsRoot() + '../';
    }
}

