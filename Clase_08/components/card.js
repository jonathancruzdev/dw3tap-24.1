const Card = {
    props : {
        id: Number,
        titulo: String,
        detalle: String,
        foto: String
    },
    methods: {
        addCart(){
            console.log('Agregando ' , this.id );
            // El hijo emite un evento "agregar"
            this.$emit('agregar', { id: this.id, titulo: this.titulo });
        }
    },        //  alt + 96
    template: // html 
            `<div class="card" style="width: 18rem;">
                <img v-bind:src="foto" class="card-img-top" v-bind:alt="titulo">
                <div class="card-body">
                <h5 class="card-title">{{ titulo}}</h5>
                <p class="card-text">{{ detalle }}</p>
                <a v-on:click="addCart" href="#" class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></a>
                </div>
            </div>`
}