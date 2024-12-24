const treeContainer = document.getElementById('tree');
export function displayTree(node) {
    // ایجاد عنصر HTML برای گره فعلی
    const element = document.createElement("div");
    element.className = "node";
    element.dataset.value = node.value;
    element.dataset.id = node.id;
    element.innerHTML = `<span>${node.name}</span>`;

    // اگر گره فرزند داشته باشد
    if (node.children && node.children.length > 0) {
        const childrenContainer = document.createElement("div");
        childrenContainer.className = "children";
        node.children.forEach((child) => {
            childrenContainer.appendChild(displayTree(child)); // اضافه کردن فرزندان
        });
        element.appendChild(childrenContainer);
    }

    // افزودن گره به درخت
    treeContainer.appendChild(element);

    // بازگرداندن عنصر برای فرزندان
    return element;
}