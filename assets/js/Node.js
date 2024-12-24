export default class Node {
    constructor(id, name, value, children = []) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.children = children;
    }

    setValue(newValue) {
        this.value = newValue;
        console.log(`Value of node ${this.id} changed to: ${this.value}`);

        // به‌روزرسانی مقدار در DOM
        const domNode = document.querySelector(`[data-id="${this.id}"]`);
        if (domNode) {
            domNode.dataset.value = newValue;
        }
    }

    setName(newName) {
        this.name = newName;
        console.log(`Name of node ${this.id} changed to: ${this.newName}`);

        // به‌روزرسانی مقدار در DOM
        const domNode = document.querySelector(`[data-id="${this.id}"] span`);
        if (domNode) {
            domNode.textContent = newName;
        }
    }

    hide() {
        console.log(`Node ${this.id} is now hidden.`);
        const domNode = document.querySelector(`[data-id="${this.id}"]`);
        if (domNode) {
            domNode.classList.add('hide');
        }
    }

    show() {
        console.log(`Node ${this.id} is now visible.`);
        const domNode = document.querySelector(`[data-id="${this.id}"]`);
        if (domNode) {
            domNode.classList.remove('hide');
        }
    }

    setColor(color) {
        const domNode = document.querySelector(`[data-id="${this.id}"]`);
        if (domNode) {
            domNode.style.setProperty('--before-color', color);
        }
    }
}
