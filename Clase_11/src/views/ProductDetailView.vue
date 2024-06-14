<script>
    export default {
        name: 'ProductDetail',
        data(){
            return {
                id: '',
                name: '',
                price: '',
                images: [],
                stock: '',
                description: ''
            }
        },
        created(){
            const id = this.$route.params.id;
            this.id = id;
            console.log( {id });
            this.getProductById(id);
        },
        methods: {
            async getProductById( id){
                const endPoint = 'https://dummyjson.com/products/'+ id;
                const response = await fetch(endPoint);
                const json = await response.json();

                console.log(json);
                this.name = json.title;
                this.description = json.description;
            }
        }
    }
</script>

<template>
    <h2> Detalle {{ name }} - {{ id }}</h2>
    <p> {{  description }}</p>
</template>

<style>

</style>