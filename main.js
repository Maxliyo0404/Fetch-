let container = document.getElementById("container");
fetch('https://jsonplaceholder.typicode.com/posts')
.then(reponse => reponse.json())
.then(data =>{
    render(data);
})
.catch(error("Xatolik kelib chiqdi:", error));

function  render (users){
    const cards = users.map(el => `
       <div class="card">
          <h2>${el.id}</h2>
          <p>${el.title}</p>
          <a href="#">${el.body}</a>
    </div> 
        `).join("");
        container.innerHTML = cards;
}