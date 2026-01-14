<template>
    <div>
        <PokemonImage :pokemonId="1" />
        <PokemonOpciones @seleccionado="evaluarGanador($event)" :listaPokemons="pokemonArr" />
    </div>
    <div class="mensaje">
        <h1 v-if="mensaje">{{ mensaje }}</h1>
    </div>
        
</template>

<script>
import PokemonImage from '../components/PokemonImage.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';
import { obtenerVectorPokemonFacade } from '@/clients/PokemonClient.js';
import { obtenerAleatorioFacade } from '@/clients/PokemonClient.js';
export default {
    components: {
        PokemonImage,
        PokemonOpciones
    },
    data() {
        return {
            pokemonArr: [],
            pokemonGanador: null,
            mensaje: null
        }
    },
    mounted() {
        console.log("componente PokemonView montado");
        this.iniciarJuego();
    },
    methods: {
        async iniciarJuego() {
            this.pokemonArr = await obtenerVectorPokemonFacade();

            const idAleatorio = obtenerAleatorioFacade(0, 3);
            this.pokemonGanador = this.pokemonArr[idAleatorio].id;
        },
        evaluarGanador(idGanador) {
            console.log('valor recibido desde padre')
            console.log(idGanador);
            if (idGanador === this.pokemonGanador) {
                console.log('¡Has ganado!');
                this.mensaje = '¡Has ganado!';
            } else {
                console.log('¡Has perdido! Inténtalo de nuevo.');
                this.mensaje = '¡Has perdido! Inténtalo de nuevo.';
            }
        }
    }
}
</script>

<style>
    .mensaje{
        background-color:  lightgray;
        text-align: center;
    }
</style>