import { treeData } from "./app.js";
import { getNodeById } from "./getNodeById.js";

export function drawLink(nodeId, color) {
    const path = []; // برای ذخیره مسیر گره‌ها

    function findPath(node, targetId) {
        if (!node) return false; // اگر گره وجود ندارد، به پایان برس

        // گره فعلی را به مسیر اضافه کن
        path.push(node.id);

        // اگر گره فعلی همان گره هدف است، مسیر کامل شده است
        if (node.id === targetId) return true;

        // اگر گره فرزندانی دارد، آن‌ها را بررسی کن
        if (node.children && node.children.length > 0) {
            for (let child of node.children) {
                if (findPath(child, targetId)) {
                    return true; // اگر مسیر در فرزندان پیدا شد، عملیات را متوقف کن
                }
            }
        }

        // اگر گره فعلی در مسیر نباشد، آن را حذف کن
        path.pop();
        return false;
    }

    // جستجوی مسیر برای گره هدف
    if (findPath(treeData, nodeId)) {
        console.log(`Path found: ${path}`);
    } else {
        console.log("Node not found!");
        return [];
    }

    // کشیدن لینک‌ها یا کار با رنگ 
    console.log(`Draw links with color ${color}`);
    drawRelate(path, color);
    return path;
}


export function drawRelate(nodeIds, color) {
    nodeIds.map((nodeId) => {
        const node = getNodeById(nodeId);
        if (node) {
            node.setColor(color); // تغییر رنگ گره
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
        const id = inputNodeId.value;
        const color = inputColor.value;

        if (id == '' || color == '') {
            resultDrawLink.textContent = 'Please Enter Node Id or color';
            return
        }
        const path = drawLink(id, color);

        path.length > 0 ? resultDrawLink.textContent = `Path found: [${path}]` : "Node not found!"
    });
};

export function clickHandlerDrawRelate() {
    const btnDrawRelate = document.getElementById('btnDrawRelate');
    const resultDrawRelate = document.querySelector('.result_drawRelate');
    const inputNodeId = document.getElementById('drawRelateIdInput');
    const inputColor = document.getElementById('drawRelateColorInput');

    btnDrawRelate.addEventListener('click', (event) => {
        event.preventDefault();
        const nodeIds = inputNodeId.value.split(',');
        const color = inputColor.value;

        if (nodeIds == '' || color == '') {
            resultDrawRelate.textContent = 'Please Enter Nodes Id or color';
            return
        }
        drawRelate(nodeIds, color);
        resultDrawRelate.textContent = `Path found: [${nodeIds}]`
    });
};

