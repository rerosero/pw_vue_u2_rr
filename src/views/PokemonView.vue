<template>
  <div>
    <PokemonImage :pokemonId="1" />
    <PokemonOpciones />
  </div>
</template>

<script>
    import PokemonImage from '../components/PokemonImage.vue';
    import PokemonOpciones from '../components/PokemonOpciones.vue';
export default {
    components: {
        PokemonImage,
        PokemonOpciones
    },
    methods: {

    }
}
</script>

<style>

</style>