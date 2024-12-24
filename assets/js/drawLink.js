import { treeData } from "./app.js";
import { getNodeById } from "./getNodeById.js";

export function drawLink(nodeId, color) {
    const path = [];  // Array to store the path of node IDs.

    function findPath(node, targetId) {
        if (!node) return false;  // Exit if the current node does not exist.

        // Add the current node's ID to the path.
        path.push(node.id);

        // Check if the current node is the target node.
        if (node.id === targetId) return true;

        // Recursively check the children of the current node.
        if (node.children && node.children.length > 0) {
            for (let child of node.children) {
                if (findPath(child, targetId)) {
                    return true; // Stop searching once the path is found.
                }
            }
        }

        // Remove the current node from the path if it is not part of the final path.
        path.pop();
        return false;
    }

    // Start finding the path to the target node.
    if (findPath(treeData, nodeId)) {
        console.log(`Path found: ${path}`);
    } else {
        console.log("Node not found!");
        return [];
    }

    // Draw the links between nodes along the found path.
    console.log(`Draw links with color ${color}`);
    drawRelate(path, color);
    return path;
}


export function drawRelate(nodeIds, color) {
    nodeIds.map((nodeId) => {
        const node = getNodeById(nodeId);
        if (node) {
            node.setColor(color);// Apply the specified color to the node
        } else {
            console.error(`Node with ID ${nodeIds[i]} not found.`);
        }
    })
}


export function clickHandlerDrawLink() {
    const btnDrawLink = document.getElementById('btnDrawLink');
    const resultDrawLink = document.querySelector('.result_drawLink');
    const inputNodeId = document.getElementById('drawLinkIdInput');
    const inputColor = document.getElementById('drawLinkColorInput');

    btnDrawLink.addEventListener('click', (event) => {
        event.preventDefault();

        const nodeIds = inputNodeId.value.trim();
        const color = inputColor.value.trim();

        if (!nodeIds || !color) {
            resultDrawLink.textContent = 'Please Enter Node Id or color';
            return
        }
        const path = drawLink(nodeIds, color);

        resultDrawLink.textContent = path.length > 0
            ? `Path found: [${path}]`
            : "Node not found!";
    });
};

export function clickHandlerDrawRelate() {
    const btnDrawRelate = document.getElementById('btnDrawRelate');
    const resultDrawRelate = document.querySelector('.result_drawRelate');
    const inputNodeId = document.getElementById('drawRelateIdInput');
    const inputColor = document.getElementById('drawRelateColorInput');

    btnDrawRelate.addEventListener('click', (event) => {
        event.preventDefault();
        const nodeIds = inputNodeId.value
            .split(',')
            .map(id => id.trim()) // Trim spaces around IDs
            .filter(Boolean); // Remove empty strings
        const color = inputColor.value.trim();

        if (nodeIds.length === 0 || !color) {
            resultDrawRelate.textContent = 'Please Enter Nodes Id or color';
            return
        }
        drawRelate(nodeIds, color);
        resultDrawRelate.textContent = `Path found: [${nodeIds}]`
    });
};

