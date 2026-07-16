"use strict";

class App {
    constructor() {
        let kbList = document.getElementsByTagName("kb");
        for (const kb of kbList) {
            const span = document.createElement("span");
            span.textContent = "Hello!";
            span.className = "kb";

            span.addEventListener('click', (e) => {
                const tag = kb.getAttribute('value');
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

    closePopup() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }

    openPopup(tag) {
        const popupTitle = document.getElementById('popup-title');
        popupTitle.textContent = tag;
        const popupLinks = document.getElementById('popup-links');
        popupLinks.innerHTML = '';

        // const links = itemData[itemId] || [];
        // links.forEach(link => {
        //     const li = document.createElement('li');
        //     const a = document.createElement('a');
        //     a.href = link.url;
        //     a.textContent = link.text;
        //     a.target = '_blank';
        //     li.appendChild(a);
        //     popupLinks.appendChild(li);
        // });

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
    }
}

