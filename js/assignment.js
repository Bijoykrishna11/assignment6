// function loadCatagory() {

//     fetch('https://openapi.programming-hero.com/api/news/categories')
//         .then(Response => Response.json())
//         .then(data => displayCatagory(data))
// }
// const displayCatagory = data => {
//     const cataName = document.getElementById('name');
//     cataName.innerText = data.news_category;
//     // console.log(data);

//     // for (const item of data) {
//     //     console.log(item);
//     // }


// }

// loadCatagory();



//   end


const allNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const Response = await fetch(url);
    const data = await Response.json();
    displayItem(data.data);
}

const displayItem = khabor => {
    console.log(khabor);
}


allNews()













