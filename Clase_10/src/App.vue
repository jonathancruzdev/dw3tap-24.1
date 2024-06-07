<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import Titulo from './components/Titulo.vue';
  import Card from './components/Card.vue';
</script>

<script>
  // Crear un array de productos y renderizarlos por medio de un componente card
  export default {
    data(){
      return {
        productos: [
          { id:1 , nombre: 'Producto 1' },
          { id:1 , nombre: 'Producto 2' },
          { id:1 , nombre: 'Producto 3' }

        ]
      }
    },
    methods:{

    }
  }
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>


  <Card v-for="item in productos" v-bind:name="item.nombre" />
  <Titulo texto="Hola Chicos" />
  <Titulo texto="Producto 1" />

  <HelloWorld msg="Proyecto con VueCLI" />



</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
