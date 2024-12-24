import { treeData } from './app.js';

export function getNodeById(id) {
    function findNode(id, node) {
        if (!node) return null;
        if (node.id === id) return node;

        if (node.children && node.children.length > 0) {
            for (let child of node.children) {
                const result = findNode(id, child);
                if (result) return result;
            }
        }
        return null;
    }
    return findNode(id, treeData);
};

export function clickHandlerGetNodeId() {
    const btnGetNodeById = document.getElementById('getNodeById');
    const resultGetNodeById = document.querySelector('.result_getNodeById');
    const inputNodeId = document.getElementById('getNodeId');

    btnGetNodeById.addEventListener('click', (event) => {
        event.preventDefault();
        const id = inputNodeId.value;
        const node = getNodeById(id);

        if (id == '') {
            resultGetNodeById.textContent = 'Please Enter Node Id';
            return
        }
        (!node) ? resultGetNodeById.textContent = 'Node Not Found' : resultGetNodeById.textContent = `Node Found: ${node.id}, Value: ${node.value}`;
    });
};

export function clickHandlerSetNodeValue() {
    const btnSetValue = document.getElementById('setValueNode');
    const inputNodeId = document.getElementById('setValueIdInput');
    const inputNodeValue = document.getElementById('setValueInput');
    const resultSetValue = document.querySelector('.result_SetValue');
    btnSetValue.addEventListener('click', (event) => {
        event.preventDefault();
        const id = inputNodeId.value;
        const value = inputNodeValue.value;
        const node = getNodeById(id);
        if (id == '' || value == '') {
            resultSetValue.textContent = 'Please Enter Node Id or value';
            return
        }

        if (!node) {
            resultSetValue.textContent = 'Node Not Found';
            return
        }

        node.setValue(value);
        resultSetValue.textContent = `Value of node ${node.id} changed to: ${node.value} `;
    });
}

export function clickHandlerSetNodeName() {
    const btnSetName = document.getElementById('setNameNode');
    const inputNodeId = document.getElementById('setNameIdInput');
    const inputNodeName = document.getElementById('setNameInput');
    const resultSetName = document.querySelector('.result_SetName');
    btnSetName.addEventListener('click', (event) => {
        event.preventDefault();
        const id = inputNodeId.value;
        const value = inputNodeName.value;
        const node = getNodeById(id);
        if (id == '' || value == '') {
            resultSetName.textContent = 'Please Enter Node Id or Name';
            return
        }

        if (!node) {
            resultSetName.textContent = 'Node Not Found';
            return
        }

        node.setName(value);
        resultSetName.textContent = `Name of node ${node.id} changed to: ${node.name} `;
    });
}

export function clickHandlerHideNode() {
    const btnHideNode = document.getElementById('btnHideNode');
    const inputNodeId = document.getElementById('ToggleNodeIdInput');
    const resultHideNode = document.querySelector('.result_hideNode');
    btnHideNode.addEventListener('click', (event) => {
        const id = inputNodeId.value;
        const node = getNodeById(id);
        if (id == '') {
            resultHideNode.textContent = 'Please Enter Node Id';
            return
        }
        if (!node) {
            resultHideNode.textContent = 'Node Not Found';
            return
        }
        node.hide();
        resultHideNode.textContent = `Node ${node.id} is now hidden.`;
    });
}

export function clickHandlerShowNode() {
    const btnShowNode = document.getElementById('btnShowNode');
    const inputNodeId = document.getElementById('ToggleNodeIdInput');
    const resultShowNode = document.querySelector('.result_hideNode');
    btnShowNode.addEventListener('click', (event) => {
        const id = inputNodeId.value;
        const node = getNodeById(id);
        if (id == '') {
            resultShowNode.textContent = 'Please Enter Node Id';
            return
        }
        if (!node) {
            resultShowNode.textContent = 'Node Not Found';
            return
        }
        node.show();
        resultShowNode.textContent = `Node ${node.id} is now show.`;
    });
}

