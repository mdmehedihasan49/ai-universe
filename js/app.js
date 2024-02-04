const url = `https://openapi.programming-hero.com/api/ai/tools`;
fetch (url)
.then(res => res.json())
.then(data => displayItems (data.data.tools));

const displayItems = items => {
    // console.log(items)
    const itemsContainer = document.getElementById('items-container');
    items.forEach(item => {
       const itemsDiv = document.createElement('div'); 
       itemsDiv.classList.add('col');
       itemsDiv.innerHTML= `
       <div class="card h-100">
       <img src="${item.image}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>
       <div class="card-footer">
         <small class="text-body-secondary">Last updated 3 mins ago</small>
       </div>
     </div>
       `;
        itemsContainer.appendChild(itemsDiv);
    });
}