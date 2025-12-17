<template>
    <div>

        <!-- Campo de entrada para el nombre -->
        <label for="id_nombre">Nombre </label>
        <input v-model="nombre" id="id_nombre" type="text">
        
        <!-- Se muestra el nombre mientras se escribe -->
        <p>{{ nombre }}</p>

        <!-- Campo de entrada para el apellido -->
        <label for="id_apellido">Apellido </label>
        <input v-model="apellido" id="id_apellido" type="text">

        <!-- Botón que imprime el nombre en consola -->
        <button v-on:click="imprimirNombre()">Imprimir Nombre</button>

        <!-- Botón que agrega un estudiante a la lista -->
        <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>

        <!-- Muestra el primer elemento del arreglo (si existe) -->
        <h1>{{ arreglo[0] }}</h1>

        <hr/>
        <label for="id_nombre_1">Nombre</label>
        <input  v-model="nombre" id="id_nombre_1" type="text">
        <label for="id_apellido_1">Apellido</label>
        <input v-model="apellido" @keypress.enter="agregarEStudiante1" id="id_apellido_1" type="text">

        <!-- Lista de estudiantes -->
        <ul>
            <!--
                v-for con destructuración para obtener nombre y apellido
                v-show="nombre" es extraño aquí → solo muestra si "nombre" del formulario NO está vacío.
                PROBABLEMENTE lo quieres eliminar, porque oculta la lista innecesariamente.
            -->
            <li 
               v-show="nombre" v-for="{ nombre, apellido } in arreglo" 
                :key="nombre"
            >
                {{ nombre }} - {{ apellido }}
            </li>
        </ul>

        <!-- Tabla con los estudiantes -->
        <h2>Tabla</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>

            <tbody>
                <!-- Renderiza cada estudiante en una fila -->
                <tr v-for="{ nombre, apellido } in arreglo" :key="apellido">
                    <td>{{ nombre }}</td>
                    <td>{{ apellido }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: null,      // dato enlazado al input de nombre
            apellido: null,    // dato enlazado al input de apellido
            arreglo: [],       // arreglo donde se guardan estudiantes
        }
    },

    methods: {

        // Solo imprime el nombre en consola
        imprimirNombre() {
            console.log(this.nombre)
        },

        // Agrega un estudiante al arreglo
        agregarEstudiante() {
            // Crea un objeto estudiante usando los datos actuales
            const estu = {
                nombre: this.nombre,
                apellido: this.apellido
            };

            console.log("Se agrega estudiante:");
            console.log(estu);

            this.arreglo.push(estu); // Se agrega al arreglo

            this.limpiarFormulario(); // Limpia el formulario después
        },
        agregarEStudiante1(event){
            console.log('event')
            if(event.charCode !==13){
                return
            }
            console.log('presiono el Enten');
            console.log("Agrego estudiante 1");
            console.log(event);
            console.log(event.charCode);
            console.log(event.keyCode);
            this.agregarEstudiante();
        },

        // Limpia los campos para permitir ingresar otro estudiante
        limpiarFormulario() {
            this.nombre = null;
            this.apellido = null;
        }
    }
}
</script>

<style>
/* Puedes agregar estilos aquí si lo necesita*/
</style>