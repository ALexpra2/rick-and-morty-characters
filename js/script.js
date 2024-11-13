const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');
let pagina = 0;


function cambioPagina (pagina) {
fetch('https://rickandmortyapi.com/api/character?page=' + pagina)
  .then((response) => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .then((data) => {
    displayCharacters(data.results);
  })
}  

nextPage.addEventListener ('click', () =>{
  pagina++;
  cambioPagina (pagina);

})
prevPage.addEventListener ('click', () =>{
  pagina++;
  cambioPagina (pagina);
})
 
cambioPagina (pagina); //la primera vez

// Obtenemos los personajes
function displayCharacters(characters) {
  const characterList = document.getElementById('character-list');
  characterList.innerHTML = '';
  characters.forEach(character => {
    
     const listItem = document.createElement('li');
    
     const img = document.createElement('img');
     img.src = character.image;
     listItem.appendChild(img);
    
     const name = document.createElement('h3');
     name.textContent = "Name: " + character.name;
     listItem.appendChild(name);
    
     const species = document.createElement('p');
     species.textContent = `Species: ${character.species}`;
     listItem.appendChild(species);

    
     characterList.appendChild(listItem);
  });
}



