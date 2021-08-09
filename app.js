// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// Selecting the Section Container
const container = document.getElementById('container');

// const newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
// container.appendChild(newImg);

// Storing Base URL for Pokemons in a Variable
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// For each of the 151 Pokemons, Run this -->
for (let i = 1; i <= 151; i++) {
    // Creating a new Div
    const pokemon = document.createElement('div');
    // Adding .pokemon Class to Div
    pokemon.classList.add('pokemon');
    // New Span Element
    const label = document.createElement('span');
    // Consecutive Numbers in Span
    label.innerText = `#${i}`;
    // New Image Element
    const newImg = document.createElement('img');
    // Using String Template Literal to Set Images' URL
    newImg.src = `${baseURL}${i}.png`;

    // Appending Image & Label to Pokemon Div
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    // Appending Pokemon Div to Container Section
    container.appendChild(pokemon);
}

{/* <div>
    <img>
    <span>2</span>
</div> */}