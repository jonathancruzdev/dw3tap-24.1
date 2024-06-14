<script>
    export default {
        name: 'ProductList',
        data(){
            return {
                products: []
            }
        },
        mounted(){
            this.getProducts();
        },
        methods: {
            async getProducts(){
                const endPoint = 'https://dummyjson.com/products';
                const response = await fetch(endPoint);
                const json = await response.json();
                this.products = json.products;
                console.log(json);
            }
        }
    }
</script>

<template>
    <main class="products-list">
        <div v-for="product in products" class="card">
            <h4> {{ product.title}}</h4>
            <h3> {{ product.id  }}</h3>
            <img v-bind:src="product.thumbnail" v-bind:alt="product.title">
            <p> {{ product.price }}</p>
            <a v-bind:href="`/product/${product.id}`"> Ver Detalle</a>
        </div>
    </main>

</template>

<style scoped>
.products-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.card {
    border: 1px solid snow;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>