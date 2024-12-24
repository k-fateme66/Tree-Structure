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
            // تبدیل داده به گره‌های کلاس Node
            treeData = processTree(response.data);
            // Create tree on DOM
            displayTree(treeData);
        })
        .catch((error) => {
            console.log(error);
        });
}


document.addEventListener('DOMContentLoaded', () => {
    getData(apiGetTree);
    changeView(treeContainer);
    clickHandlerGetNodeId();
    clickHandlerSetNodeValue();
    clickHandlerHideNode();
    clickHandlerShowNode();
    clickHandlerDrawLink();
    clickHandlerSetNodeName();
    clickHandlerDrawLink();
    clickHandlerDrawRelate();
});
