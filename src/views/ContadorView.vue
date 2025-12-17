<!--
  Este componente muestra dos contadores en pantalla.
  Cada <Contador /> es una instancia del componente Contador.vue
-->
<template>
  <div>
      <!-- Primera instancia del componente Contador -->
       <!-- Enviamos:
        - tit2: Título del contador
        - inicio: valor inicial (mayor a 10 por la validación del prop)
        - mostrar: muestra un botón condicional dentro del contador
    -->
      <Contador tit2="Contador 1"
       v-bind:inicio="20" 
       :mostrar="true"/>
       <!-- Segunda instancia del mismo componente -->
       <!-- Este contador tendrá su propio estado independiente -->
      <Contador
       tit2="Contador 2"  
       :inicio="4" 
       :mostrar="false"/>
</div>
</template>

<script>
// Importamos el componente Contador desde la carpeta components
import Contador from '../components/Contador.vue';
export default {
    // Registramos el componente para poder usarlo dentro del <template>
    components: {
        Contador
    }

}
</script>

<style>

</style>