"use strict";

function createKb(prefix, value) {
    let kb = document.createElement("kb");
    kb.setAttribute("value", prefix + value);
    return kb
}
function shortName(el) {
    let parts = el.canonical.split('.');
    let prefix = '';
    if (el.type == '@interface') {
        prefix = '@';
    }
    return prefix + parts[parts.length-1];
}

class CsApp {
    //Add also a group in MyApp.js
    allowedStarts = [
        'entitymanager_',
        'docker_cmd_',
        'import_',
        'spring_di_',
        'hibernate_lock_',
        'hibernate_LockModeType_',
        'nix_com_',
        'pylib_',
    ]

    prepareKb() {
        this.prepareData();
        this.insertOverlayDiv();
        this.populateKb();
    }

    populateKb() {
        let kbList = document.getElementsByTagName("kb");
        for (const kb of kbList) {
            const tag = kb.getAttribute('value');
            const span = document.createElement("span");
            if (this.tagMap.has(tag)) {
                span.className = "kb";
                span.textContent = this.tagMap.get(tag).length;

                span.addEventListener('click', (e) => {
                    this.openPopup(tag);
                });

                const closeBtn = document.getElementById('close-btn');

                // Close on button click
                closeBtn.addEventListener('click', this.closePopup);

                const overlay = document.getElementById('overlay');

                // Close on click outside the popup
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        this.closePopup();
                    }
                });

                // Close on Esc key press
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closePopup();
                    }
                });

                kb.appendChild(span);
            }
        }
    }

    insertOverlayDiv() {
        const body = document.getElementsByTagName("body")[0];
        const html = `
    <div id="overlay" class="overlay">
        <div id="popup" class="popup">
            <h2 id="popup-title">Popup Title</h2>
<!--            <div id="focus">-->
<!--                <p>Focus:</p>-->
<!--                <ol id="focus-links">-->
<!--                    &lt;!&ndash; Links will be injected here &ndash;&gt;-->
<!--                </ol>-->
<!--            </div>-->
            <div id="used-in">
                <p>Used in:</p>
                <ol id="used-in-links">
                    <!-- Links will be injected here -->
                </ol>
            </div>
            <button id="close-btn">Close</button>
        </div>
    </div>
        `;
        body.insertAdjacentHTML("beforeend", html);
    }

    closePopup() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }

    openPopup(tag) {
        const popupTitle = document.getElementById('popup-title');
        popupTitle.textContent = tag;

        // this.appendTasks('focus-links', this.tagMap.get(tag), true);
        this.appendTasks('used-in-links', this.tagMap.get(tag),false);

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
    }

    appendTasks(linksId, tasks, focus) {
        const popupLinks = document.getElementById(linksId);
        popupLinks.innerHTML = '';
        tasks
            // .filter(task => focus || !task.data.focus)
            .forEach(task => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = 'https://github.com/greencar77/labssol/tree/main/' + task.path;
            a.textContent = task.path;
            a.target = '_blank';
            li.appendChild(a);

            const details = document.createElement('span');
            details.innerHTML = ' <a href="../details.html#' + task.data.labId + '">[details]</a>';
            li.appendChild(details);

            const span = document.createElement('span');
            span.textContent = " (" + task.data.labId + ")";
            li.appendChild(span);

            popupLinks.appendChild(li);
        });
    }

    prepareData() {
        this.tagMap = new Map();
        for (const sol of global_sol.values) {
            for (const tag of sol.tags) {
                for (const as of this.allowedStarts) {
                    if (tag.startsWith(as)) {
                        if (!this.tagMap.has(tag)) {
                            this.tagMap.set(tag, []);
                        }
                        this.tagMap.get(tag).push(sol);
                    }
                }
            }
        }
    }
}

