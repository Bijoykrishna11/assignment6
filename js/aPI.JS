const blogPart = different => {
    const aBlog = document.getElementById('questien');
    aBlog.innerHTML = ` <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
     Blog
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
 
          <h4>1.Var, Let, and Const – What's the Difference?</h4>

          <p>var declarations are globally scoped or function scoped while let and const are block scoped.var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.</p>

          <h4>2.What is the difference between arrow function and regular function?</h4>

          <p>Arguments objects are not available in arrow functions, but are available in regular functions. Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword.</p>

          <h4>3.Why we use Template Strings?</h4>

          <p>We use  templat string because the string templating (or string interpolation) feature is ubiquitous in many programming languages. You should use it when you have a distinct or recurring template that you wish to fill in with the variables in current scope. It makes the template more readable than concatenation of strings or printf-style formatting.</p>




          </div>
         
        </div>
      </div>
    </div>

    `;
}
blogPart();







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