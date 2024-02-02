class SelectableItems extends HTMLElement {
    static register(tagName) {
        if ("customElements" in window) {
            customElements.define(tagName || "selectable-items", SelectableItems);
        }
    }

    selectionClass = "active";

    constructor() {
        super();
    }

    // connect component
    connectedCallback() {
        addEventListener('DOMContentLoaded', () => {
            const selector = this.getAttribute("selector") ?? "a";

            this.selectables = this.querySelectorAll(selector) ?? [];
            console.debug(`Found ${this.selectables.length} menu items.`);

            this.#addClickHandler();

            this.selectionClass = this.getAttribute("selection-class") || "active";
        });
    }

    #addClickHandler() {
        this.selectables?.forEach(x => {
            x.addEventListener("click", e => this.#itemClicked(e));
        });
    }

    /**
     * @param {MouseEvent} event
     **/
    #itemClicked(event) {
        this.selectables.forEach(a => {
            a.classList.remove(this.selectionClass);

            if (a == event.target)
                a.classList.add(this.selectionClass);
        });
    }

    disconnectedCallback() {
        console.debug("disconnected");
    }
}

SelectableItems.register();
