<template>
    <div class="pokemon-opciones">
        <ul>
            <li>Pokemon 1</li>
            <li>Pokemon 2</li>
            <li>Pokemon 3</li>
            <li>Pokemon 4</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
ul {
    list-style-type: none;
}

li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    width: 150px;
    margin-top: 10px;
    text-align: center;
}

.pokemon-opciones {
    display: flex;
    justify-content: center;
    
}
</style>