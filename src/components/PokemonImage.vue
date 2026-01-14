<template>
    <div class="pokemon-container">
        <img :src="srcImagen"
            alt="No se pudo renderizar la imagen del pokemon" />
    </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },
    computed:{
        srcImagen(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    }
    
}
</script>

<style>
img {
    height: 200px;
    display: block;
}

.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>