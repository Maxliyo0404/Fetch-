let container = document.getElementById("container");
fetch('https://jsonplaceholder.typicode.com/posts')
.then(reponse => reponse.json())
.then(data =>{
    render(data);
})
.catch(error("Xatolik kelib chiqdi:", error));

function  render (users){
    const cards = u
}