const url ="https://pokeapi.co/api/v2/pokemon/pikachu";

async function getPokemon() {

    const respuesta = await fetch(url);
    console.log("Codigo:", respuesta.status);

    const datos = await respuesta.json();
    console.log("Nombre:", datos.name);
    console.log("Altura:", datos.height);
    console.log("Habilidades:", datos.abilities[1].ability.name);

}

getPokemon();