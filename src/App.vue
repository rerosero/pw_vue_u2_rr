<template>
  <div> 
    <!-- Renderiza el componente  -->
    <PokemonView />
  </div>
</template>

<script>
// Importamos el componente desde el mismo directorio
import PokemonView from './views/PokemonView.vue';

export default {
  // Registramos el componente para que pueda usarse en el template
  components: {
    PokemonView
  }
};
</script>

<style>
/* Estilos opcionales del componente */
</style>
