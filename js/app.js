const url = `https://openapi.programming-hero.com/api/ai/tools`;
fetch (url)
.then(res => res.json())
.then(data => displayItems (data.data.tools));

const displayItems = items => {
    console.log(items)
    const itemsContainer = document.getElementById('items-container');
    items.forEach(item => {
       const itemsDiv = document.createElement('div'); 
       itemsDiv.classList.add('col');
       itemsDiv.innerHTML= `
       <div class="card h-100">
       <img src="${item.image}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title"><strong>Features</strong></h5>
         <p class="card-text">${item.features[0]}</p>
         <p class="card-text">${item.features[1]}</p>
         <p class="card-text">${item.features[2]}</p>
       </div>
       <div class="card-footer">
         <h4><strong>${item.name}</strong><h4>
         <div class="d-flex justify-content-between">
         <p><small> 11/01/2022 </small></p>
         <div class="d-flex align-items-center btn btn-outline-danger border border-danger-subtle rounded-circle"><i class= " fa-solid fa-arrow-right"></i> <div>
         </div>
         </div>
     </div>
       `;
        itemsContainer.appendChild(itemsDiv);
    });
}