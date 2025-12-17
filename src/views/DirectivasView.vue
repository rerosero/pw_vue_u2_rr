<!--
  Este archivo sirve como una vista o página que simplemente muestra
  el componente <Directivas /> dentro del template.
-->

<template>
  <!-- Renderiza el componente Directivas.vue -->
  
  <div class="view-container">
      <h2>Prueba</h2>
      <Directivas />
  </div>
</template>

<script>
// Importamos el componente desde la carpeta components
import Directivas from '../components/Directivas.vue';

export default {
    // Registramos el componente para poder usarlo dentro del template
    components:{
        Directivas
    }
}
</script>

<style scoped>
.view-container{
  display: flex;
  justify-content: center;
  align-items: center;

}
h2{
  font-size: 50px;
}
</style>