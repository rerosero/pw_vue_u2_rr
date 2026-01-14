import axios from "axios";

const consumirAPI = async (id) => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data);//aqui se puede omitir el await
    console.log(respuesta);
    return respuesta;
}

//como es asincrono necestio que lo esperen(await->async)
export async function consumirAPIFacade() {//si tiene await entonces debe ser async
    return await consumirAPI(); //aqui no se puede omitir
}
export async function consumirAPIFacad2() {
    return await consumirAPI();
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const obtenerVectorNumerico = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector[i] = obtenerAleatorio(1, 600);
    }
    return vector;
}
const obtenerVectorPokemon= (vectorNumerico) => {
    const data1 = consumirAPI(vectorNumerico[0]);
    const data2 = consumirAPI(vectorNumerico[1]);
    const data3 = consumirAPI(vectorNumerico[2]);
    const data4 = consumirAPI(vectorNumerico[3]);

    const obj1 = {
        nombre: data1.name,
        id: data1.id
    }

}