<!--
  Este componente muestra dos contadores en pantalla.
  Cada <Contador /> es una instancia del componente Contador.vue
-->
<template>
  <div>
      <!-- Primera instancia del componente Contador -->
      <Contador />
      <!-- Segunda instancia del mismo componente -->
      <!-- Son independientes: cada uno maneja su propio estado -->
      <Contador />
</div>
</template>

<script>
// Importamos el componente Contador desde la carpeta components
import Contador from './components/Contador.vue';
export default {
    // Registramos el componente para poder usarlo dentro del <template>
    components: {
        Contador
    }

}
</script>

<style>

</style>