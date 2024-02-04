const url = `https://openapi.programming-hero.com/api/ai/tools`;
fetch (url)
.then(res => res.json())
.then(data => displayUsers (data.data));

const displayUsers = items => {
    console.log(items.tools)
}