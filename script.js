document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const itemList = document.getElementById('item-list');
    const items = itemList.getElementsByTagName('li');

    searchBar.addEventListener('keyup', function () {
        const searchTerm = searchBar.value.toLowerCase();

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.textContent.toLowerCase().includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });
});