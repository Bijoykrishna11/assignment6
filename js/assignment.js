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



//  ................... end...............//


const allNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const Response = await fetch(url);
    const data = await Response.json();
    displayItem(data.data);
}

const displayItem = khabor => {
    // console.log(khabor);

    const newsContainer = document.getElementById('news-container');

    khabor.forEach(element => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('coll');
        newsDiv.innerHTML = `
                    <div class="card mb-4  ">
                            <img src="${element.image_url}" class="  card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class="card-text">${element.details} </p>
                            
                                
                                
        <div class="d-flex">
        <img src="${element.author.img}" class="w-25  card-img-top" alt="...">
        <p class="card-text fw-bolder fs-2 mt-5 ms-5">${element.author.name} </p>     
        <p class="card-text fs-3 mt-5 ms-5">${element.total_view} views 
        <span><button class="bg-primary ms-5 fs-4 text-light border border-danger rounded-3">More detals</button></span> </p>
        
     
    </div>
                 
                        </div>
                        `;

        newsContainer.appendChild(newsDiv);

    })

}
allNews()













