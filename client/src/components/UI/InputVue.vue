<script setup>
const { type, placeholder } = defineProps({
    type: String,
    placeholder: String,
})

const model = defineModel({ type: String })
</script>

<style scoped>
input {
    border: none;
    border-bottom: var(--secondary-color) solid 3px;
    background: transparent;
    width: 100%;
    padding: 3px;
}

:focus {
    outline: none;
    transform: scale(1.01);
}

::-webkit-input-placeholder {
    color: var(--secondary-color);
    font-weight: 700;
}

:-ms-input-placeholder {
    color: var(--secondary-color);
    font-weight: 700;
}

::-moz-placeholder {
    color: var(--secondary-color);
    font-weight: 700;
}

:-moz-placeholder {
    color: var(--secondary-color);
    font-weight: 700;
}
</style>

<template>
    <input v-model="model" :name="type" :id="type" :type="type" :placeholder="placeholder" />
</template>