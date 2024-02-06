const loadItems = async () =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch (url)
  const data = await res.json()
  displayItems (data.data.tools)

};

const displayItems = items => {
    const itemsContainer = document.getElementById('items-container');
    items.forEach(item => {
      console.log(item)
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
            <div onclick="showModal('${item.id}')"class="d-flex align-items-center btn btn-outline-danger border border-danger-subtle rounded-circle"><i class= " fa-solid fa-arrow-right"></i> <div>
         </div>
      </div>
     </div>
       `;
        itemsContainer.appendChild(itemsDiv);
    });
};

const showModal =async (id) => {
  console.log(id)
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res =await fetch (url)
  const data = await res.json()
  console.log(data);
}

// const passModal = data =>{
// console.log(data)
// } 