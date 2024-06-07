<template>
    <div class="card">
        <Titulo v-bind:texto="name" />
        <img src="" alt="">
        <button type="button"> Ver más</button>
    </div>
</template>

<script>
    import Titulo from './Titulo.vue';

    export default {
        name: 'Card',
        components: { Titulo },
        props: {
            name: String
        }
    }
</script>

<style scoped>
    .card {
        border: 2px solid white;
        padding: 16px;
        width: 200px;
        height: 300px;
    }
</style>