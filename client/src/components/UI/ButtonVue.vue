<script setup>
const n = []

</script>

<style scoped>
button {
    border: solid;
    background-color: var(--secondary-color);
    border-radius: 8px;
    color: white;
    font-weight: 700;
    padding: 5px 10px;
    margin-top: 10px;
    transition: background-color 0.1s ease-in-out;
}:hover {
    cursor: pointer;
    
}:active {
    cursor: default;
    background-color: white;
    color: var(--secondary-color);
}
</style>

<template>
    <button><slot></slot></button>
</template>