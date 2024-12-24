const treeContainer = document.getElementById('tree');
export function displayTree(node) {
    // Create an HTML element for the current node
    const element = document.createElement("div");
    element.className = "node";
    element.dataset.value = node.value;
    element.dataset.id = node.id;
    element.innerHTML = `<span>${node.name}</span>`;

    // Check if the current node has children
    if (node.children && node.children.length > 0) {
        const childrenContainer = document.createElement("div");
        childrenContainer.className = "children";
        node.children.forEach((child) => {
            childrenContainer.appendChild(displayTree(child));
        });
        element.appendChild(childrenContainer);
    }

    // Append the container of children to the current node element
    treeContainer.appendChild(element);

    // Append the current node element to the main tree container in the DOM
    return element;
}