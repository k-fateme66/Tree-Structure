import { changeView } from './changeView.js';
import { displayTree } from './displayTree.js';
import { clickHandlerDrawLink, clickHandlerDrawRelate } from './drawLink.js';
import { clickHandlerGetNodeId, clickHandlerHideNode, clickHandlerSetNodeName, clickHandlerSetNodeValue, clickHandlerShowNode } from './getNodeById.js';
import { processTree } from './processTree.js';

const treeContainer = document.getElementById('tree');
const apiGetTree = 'http://localhost:3000/tree';
export let treeData = null;

function getData(url) {
    axios
        .get(url)
        .then((response) => {
            // Process the data into nodes of the Node class
            treeData = processTree(response.data);
            // Render the tree structure in the DOM
            displayTree(treeData);
        })
        .catch((error) => {
            console.log(error);
        });
}


/**
 * Set up event listeners and initialize tree rendering
 * This runs once the DOM content has fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display the tree data
    getData(apiGetTree);

    changeView(treeContainer);
    clickHandlerGetNodeId();
    clickHandlerSetNodeValue();
    clickHandlerHideNode();
    clickHandlerShowNode();
    clickHandlerDrawLink();
    clickHandlerSetNodeName();
    clickHandlerDrawRelate();
});
