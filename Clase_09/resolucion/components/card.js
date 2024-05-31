const Card = {
    props : {
        id: Number,
        titulo: String,
        detalle: String,
        foto: String,
        precio: Number
    },
    methods: {
        addCart(){
            console.log('Agregando ' , this.id );
            // El hijo emite un evento "agregar"
            this.$emit('agregar', { id: this.id, titulo: this.titulo, precio: this.precio });
        }
    },        //  alt + 96
    template: // html 
            `<div class="card" style="width: 18rem;">
                <img v-bind:src="foto" class="card-img-top" v-bind:alt="titulo">
                <div class="card-body">
                <h5 class="card-title text-center">{{ titulo}}</h5>
                <p class="card-text">{{ detalle }}</p>
                <hr>
                <h4 class="text-center"> $ {{precio}} </h4>
                <a v-on:click="addCart" href="#" class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></a>
                </div>
            </div>`
}