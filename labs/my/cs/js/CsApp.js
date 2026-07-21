"use strict";

class CsApp {
    allowedStarts = [ 'entitymanager_', 'docker_cmd_', 'import_', 'spring_di_' ]

    constructor() {
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
            <div id="popup-content">
                <p>Solutions:</p>
                <ol id="popup-links">
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
        const popupLinks = document.getElementById('popup-links');
        popupLinks.innerHTML = '';

        this.tagMap.get(tag).forEach(task => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = 'https://github.com/greencar77/labssol/tree/main/' + task.path;
            a.textContent = task.path;
            a.target = '_blank';
            li.appendChild(a);
            const span = document.createElement('span');
            span.textContent = " (" + task.data.labId + ")";
            li.appendChild(span);
            popupLinks.appendChild(li);
        });

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
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

