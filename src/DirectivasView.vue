<!--
  Este archivo sirve como una vista o página que simplemente muestra
  el componente <Directivas /> dentro del template.
-->

<template>
  <!-- Renderiza el componente Directivas.vue -->
  <Directivas />
</template>

<script>
// Importamos el componente desde la carpeta components
import Directivas from './components/Directivas.vue';

export default {
    // Registramos el componente para poder usarlo dentro del template
    components:{
        Directivas
    }
}
</script>

<style>
/* Puedes agregar estilos propios para esta vista si lo deseas */
</style>
