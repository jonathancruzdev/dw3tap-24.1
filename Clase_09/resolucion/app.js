const app = Vue.createApp({
    data(){
        return {
            lista: [
                { id: 1, titulo: 'Pizza a la Napolitana', foto: 'images/napolitana.jpg', precio: 3000, detalle: 'La mejor pizza a la Napolitana'},
                { id: 2, titulo: 'Milanesa con papas Fritas', foto: 'images/milanesa.jpg', precio: 4000, detalle: 'Milanesa con papas, la mejores del planeta'},
                { id: 3, titulo: 'Hamburguesa', foto: 'images/hamburguesa.jpg', precio: 2000, detalle: "Hamburguesas Gigantes, las mejores 😋" }
            ],
            carrito: [

            ]
        }
    },
    methods: {
        agregarAlCarrito( data ){
            const id = data.id;
            const titulo = data.titulo;
            const precio = data.precio;

            const index = this.carrito.findIndex(  producto => producto.id == data.id );
            if( index == -1){
                this.carrito.push({
                    id: id,
                    titulo: titulo,
                    precio: precio,
                    cantidad: 1
                })
            } else {
                this.carrito[index].cantidad++;
            }
        }
    }
})


/* ------------------------ Registro los componentes ------------------------ */
app.component('card', Card)

app.mount('#app')
