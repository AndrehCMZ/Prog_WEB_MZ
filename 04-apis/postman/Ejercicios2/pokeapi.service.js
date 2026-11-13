const BASE_URL = 'https://pokeapi.co/api/v2';

export async function pedir(ruta){
    const urlfull = `${BASE_URL}${ruta}`;
    console.log("Pidiendo:", urlfull);
    const respuesta = await fetch(urlfull);
    if(!respuesta.ok){
        throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    return respuesta.json();

}

export function obtenerPokemon(nombre){
    console.log("ObtenerPokemon:", nombre);
    return pedir(`/pokemon/${nombre}`);
}

export async function listarpokemon(limite = 10){
    return pedir(`/pokemon?limit=${limite}`);
};

export async function obtenerTipo(tipo){
    return pedir(`/type/${tipo}`);
};