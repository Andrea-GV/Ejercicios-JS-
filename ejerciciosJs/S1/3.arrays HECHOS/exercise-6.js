// Elimina el segundo elemento del array y muestra el array por consola.

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

RickAndMortyCharacters.splice(1, 1);
for (let i = 0; i < RickAndMortyCharacters.length; i++) {
    console.log(RickAndMortyCharacters[i]);
}
