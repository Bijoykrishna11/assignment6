
//  fetch for catagory

const loaditem = async () => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    return data;
  }
  catch {
    alert('something wrong');
  }
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
  try {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await response.json();
    return data;
  }
  catch {
    alert('something wrong');
  }

}

const displayNews = async (value) => {
  const getId = document.getElementById('news-bd');
  getId.innerHTML = " ";

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
  dataCategory.data.forEach(element => {
    const author = element.author.name;
    const authorImg = element.author.img;
    const view = element.total_view;
    const thumbnailHeader = element.title;
    const thumbnailImg = element.thumbnail_url;
    const details = element.details;


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3" style="width:100%;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${thumbnailImg}" class="img-fluid rounded-start" style="width:100%; height:100%;">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${thumbnailHeader}</h5>
                <p class="card-text">${details.slice(0, 150) + "...."}</p>

                <div class="d-flex justify-content-between">
                    <div>
                        <img src="${authorImg}" alt="" style="width: 50px;">
                        <span>${author != undefined ? author : "N/A"}</span>
                    </div>

                    <div>
                        <span>${view != undefined ? view : "N/A"} views</span>
                    </div>
                    <div>
                        <button type="button" class="btn btn-secondary">More details</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    `;
    getId.appendChild(div);
  }
  );
}



