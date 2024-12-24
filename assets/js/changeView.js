const radioButtonChangeView = [...document.querySelectorAll('.radio_button input[name="view"]')]

export function changeView(treeContainer) {
    radioButtonChangeView.forEach((btn) => {
        const id = btn.getAttribute('id');
        btn.addEventListener('click', () => {
            id === 'horizontal' ? treeContainer.classList.add('horizontal') : treeContainer.classList.remove('horizontal');
        });
    })
}