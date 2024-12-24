import Node from "./Node.js ";

export function processTree(data) {
    if (!data) return null;
    // Create a Node instance for the current data
    const node = new Node(data.id, data.name, data.value);

    // Recursively process child nodes, if any
    if (data.children && data.children.length > 0) {
        node.children = data.children.map(processTree);
    }

    return node;
}
