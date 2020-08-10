const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//adding content and update DOM item tabs
function selectItem(e) {

    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#.${this.id}-content`);
    tabContentItem.classList.add('show');
}

//remove borders
removeBorder = () => {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

// remove content on click
removeShow = () => {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

//listen for clicks
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});
