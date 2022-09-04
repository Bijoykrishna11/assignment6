
//  fetch for catagory

const loaditem = async () => {
  const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await response.json();
  return data;
}
const setAllMenu = async () => {
  const data = await loaditem();
  const list = data.data.news_category;
  const menu = document.getElementById('all-menu')

  for (const product of list) {
    const li = document.createElement("li");
    li.classList.add('list-group-item');
    li.innerHTML = `<a class="text-decoration-none" href="#" onclick="displayNews(this)">${product.category_name}</a>`;
    menu.appendChild(li);

  }
}

setAllMenu();

const fetchNews = async (category_id) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await response.json();
  return data;
}

const displayNews = async (value) => {
  const data = await loaditem();
  const li = data.data.news_category;
  let id;
  li.forEach(element => {
    if (value.innerHTML == element.category_name) {
      id = element.category_id;
    }
  });
  const dataCategory = await fetchNews(id);
  console.log(dataCategory);
}



