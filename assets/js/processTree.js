import Node from "./Node.js ";

export function processTree(data) {
    if (!data) return null;
    // ایجاد گره
    const node = new Node(data.id, data.name, data.value);

    // پردازش فرزندان به صورت بازگشتی
    if (data.children && data.children.length > 0) {
        node.children = data.children.map(processTree);
    }

    return node;
}
