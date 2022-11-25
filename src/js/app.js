import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`) 
    .then(res => res.json())
    .then(data=> {
      data.results.forEach(pok => {
        let ul = document.createElement('ul')
        ul.innerHTML = `<li>${pok.name}</li>`
        document.body.appendChild(ul)
        
      })
  })
  
    
  });
