import{
    pedir,
    obtenerPokemon,
    listarpokemon,
    obtenerTipo
}from './pokeapi.service.js';

async function ejecutarApp(){
try{
    console.log("Obteniendo pokemon...");
    const pikachu = await obtenerPokemon("pikachu");
    console.log("Nombre:", pikachu.name);
    console.log("Peso:", pikachu.weight);op

    console.log("Listando pokemones...");
    const pokemones = await listarpokemon(10);
    console.log(pokemones.results);

    console.log("Obteniendo tipo...");
    const tipo = await obtenerTipo("fire");
    console.log("Tipo:", tipo.name);
    console.log("Pokemones de tipo fuego:", tipo.pokemon.map(p => p.pokemon.name));
}
catch(error){
    console.error("hubo un error:", error.message);
}
}

ejecutarApp();