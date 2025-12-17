<template>
  <div> 
    <!-- Renderiza el componente DirectivasView -->
    <PreguntaView />
  </div>
</template>

<script>
// Importamos el componente desde el mismo directorio
import DirectivasView from '@/views/DirectivasView.vue';
import PreguntaView from './views/PreguntaView.vue';

export default {
  // Registramos el componente para que pueda usarse en el template
  components: {
    DirectivasView,
    PreguntaView
  }
};
</script>

<style>
/* Estilos opcionales del componente */
</style>
