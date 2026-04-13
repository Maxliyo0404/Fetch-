let container = document.getElementById("container");
fetch('https://jsonplaceholder.typicode.com/users')
.then(reponse => reponse.json())
.then(data =>{
    render(data);
})
.catch(error("Xatolik kelib chiqdi:", error));

function  render (users){
    const cards = users.map(el => `
       <div class="card">
           <img class="rasm"  src="https://picsum.photos/200/300?random=id${el.id} " alt="rasm">
          <h2>${el.name}</h2>
          <p>${el. }</p>
          <a href="#">${el.email}</a>
    </div> 
        `).join("");
        container.innerHTML = cards;
}