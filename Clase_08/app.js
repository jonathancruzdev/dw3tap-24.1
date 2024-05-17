const app = Vue.createApp({
    data(){
        return {
            lista: [
                { id: 1, titulo: 'Pizza a la Napolitana', foto: 'images/napolitana.jpg'},
                { id: 2, titulo: 'Milanesa con papas Fritas', foto: 'images/milanesa.jpg'},
                { id: 3, titulo: 'Hamburguesa', foto: 'images/hamburguesa.jpg'}
            ],
            carrito: [
                { id:1, titulo: 'Milanesa con papas Fritas', cantidad: 2 }
            ]
        }
    },
    methods: {
        agregarAlCarrito( data ){
            console.log('agregar' , data)
            const producto = this.lista.find(  producto => producto.id == dataid );
            if( producto){
                this.carrito.push( producto );
            }
        }
    }
})


/* ------------------------ Registro los componentes ------------------------ */
app.component('card', Card)

app.mount('#app')
