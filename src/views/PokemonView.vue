<template>
    <div>
        <PokemonImage v-if="mostrar" :pokemonId="pokemonGanador" />
        <PokemonOpciones @seleccionado="evaluarGanador($event)" :listaPokemons="pokemonArr" />
        <div class="button">
            <button @click="destruir()">Destruir</button>
        </div>
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
            mensaje: false,
            mostrar: true
        }
    },
    beforeCreate() {
        console.log("componente PokemonView antes de crearse:Apenas inicia la instancia del componente");
    },
    created() {
        console.log("componente PokemonView creado:ya se resolvieron data, computed, methods, watch");
    },
    /* Monta el componente cuando se renderiza o visualiza el componente */
    beforeMount() {
        console.log("Justo ante del primer render de un elemento html");
    },
    mounted() {
        console.log("componente PokemonView montado");
        console.log("componente PokemonView montado -> el componente ya se visualiza en el html");
        this.iniciarJuego();
    },
    /* Actualiza el componente cuando hay cambios en data o props */
    beforeUpdate() {
        console.log("beforeUpdate: cuando cambio un data o un props del componente y vue esta por renderizar el cambio -> antes de que el DOM se actualice");
    },
    updated() {
        console.log("updated: cuando ya se actualizo tras la re-renderizacion -> el DOM se actualizó");
    },
    methods: {
        async iniciarJuego() {
            this.pokemonArr = await obtenerVectorPokemonFacade();

            const idAleatorio = obtenerAleatorioFacade(0, 3);
            this.pokemonGanador = this.pokemonArr[idAleatorio].id;
        },
        destruir() {
            this.mostrar = !this.mostrar;
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
.mensaje {
    background-color: lightgray;
    text-align: center;
}

.button {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>