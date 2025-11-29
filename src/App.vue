<template>
  <div> 
    <!-- Renderiza el componente DirectivasView -->
    <DirectivasView />
  </div>
</template>

<script>
// Importamos el componente desde el mismo directorio
import DirectivasView from './DirectivasView.vue';

export default {
  // Registramos el componente para que pueda usarse en el template
  components: {
    DirectivasView
  }
};
</script>

<style>
/* Estilos opcionales del componente */
</style>
