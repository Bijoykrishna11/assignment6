const loaditem = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    return data;
    // console.log(data);
}
const setAllMenu = async () => {
    const data = await loaditem();

    const list = data.data.news_category;

    const menu = document.getElementById('all-menu')

    for (const product of list) {

        // console.log(product.category_name);
        const li = document.createElement("li");
        li.innerHTML = `<a>${product.category_name}</a>`;
        menu.appendChild(li);

    }
}

setAllMenu();

// loaditem();