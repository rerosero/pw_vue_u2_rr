<!--
  Este es un componente de Vue.
  Un componente .vue se divide en tres partes:
  1) <template>  → El HTML que se muestra en pantalla.
  2) <script>    → La lógica del componente.
  3) <style>     → Los estilos (CSS) del componente.
-->

<template>
  <!-- Contenido visual del componente -->
  <div>
    
    <!-- Mostrar el título recibido desde el padre mediante props -->
    <h1>{{ tit2 }}</h1>

    <!-- Mostrar cálculos usando propiedades computadas -->
    <p>{{ numero }}<sup>2</sup> = {{ calculaCuadrado }}</p>

    <!-- Línea repetida a propósito (solo para prueba) -->
    <!-- Si no la necesitas, puedes eliminarla -->
    <p>{{ numero }}<sup>2</sup> = {{ calculaCuadrado }}</p>

    <!-- Otra línea repetida (explicación igual que arriba) -->
    <p>{{ numero }}<sup>2</sup> = {{ calculaCuadrado }}</p>

    <!-- Mostrar cálculo de cubo con propiedad computada -->
    <p>{{ numero }}<sup>3</sup> = {{ calculoCubo }}</p>

    <!-- Mostrar cálculo de cubo con método (se recalcula cada clic) -->
    <!-- OJO: tu escribiste “obtenercubo()” con minúscula; Vue no lo encontraría -->
    <p>{{ numero }}<sup>3</sup> = {{ obtenerCubo() }}</p>

  </div>

  <div>
    <!-- Eventos que ejecutan funciones del script -->
    <button v-on:click="incrementar()">+1</button>
    <button v-on:click="decrementar()">-1</button>

    <!-- Botón que solo aparece si el prop "mostrar" es true -->
    <button v-if="mostrar">prueba</button>
  </div>
</template>

<script>
// Importaciones opcionales — en este caso no se están usando directamente
import { computed } from 'vue';

export default {

  /* ------------------------------------
         PROPIEDADES (props)
     Valores recibidos del componente padre
     ------------------------------------ */
  props: {
    // Cadena opcional
    tit2: String,

    // Prop numérico con validación
    inicio: {
      type: Number,
      default: 99,
      validator(value) {
        // Solo permite números mayores a 10
        return value > 10;
      }
    },

    // Booleano para mostrar u ocultar elementos
    mostrar: Boolean
  },

  /* ------------------------------------
                   DATA
     Estado interno del componente
     ------------------------------------ */
  data() {
    return {
      numero: this.inicio, // Se inicializa usando el prop "inicio"
      titulo: "Contador"
    };
  },

  /* ------------------------------------
                 MÉTODOS
     Funciones que se ejecutan con eventos
     ------------------------------------ */
  methods: {
    // Método para calcular cuadrado
    obtenerCuadrado() {
      console.log("Obteniendo el cuadrado de", this.numero);
      return this.numero * this.numero;
    },

    // Método para calcular cubo
    obtenerCubo() {
      return this.numero * this.numero * this.numero;
    },

    // Incrementar número
    incrementar() {
      console.log(this.tit2); // Muestra el título en consola
      this.numero++;
    },

    // Decrementar número
    decrementar() {
      this.numero--;
    }
  },

  /* ------------------------------------
           PROPIEDADES COMPUTADAS
     Son como métodos, pero se guardan en caché
     y solo cambian cuando cambia el estado
     ------------------------------------ */
  computed: {
    // Cuadrado reactivo
    calculaCuadrado() {
      console.log("Computando cuadrado de", this.numero);
      return this.numero * this.numero;
    },

    // Cubo reactivo
    calculoCubo() {
      return this.numero * this.numero * this.numero;
    }
  }
};
</script>

<style>
/* Estilos del componente */
</style>
