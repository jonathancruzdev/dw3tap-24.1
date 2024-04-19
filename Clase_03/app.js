const compras = Vue.createApp({
    // El modelo de Datos
    data(){
        return {
            producto: '',
            precio: '',
            lista: [],
            total: 0
        }
    },
    // Métodos
    methods: {
        agregar(){
            this.lista.push({
                precio: this.precio,
                producto: this.producto
            });
            this.producto = '';
            this.precio = '';
            this.calcularTotal();
        },
        eliminar(index){
            console.log('eliminando' , index);
            this.lista.splice(index, 1);
            this.calcularTotal();
        },
        calcularTotal(){
            this.total = 0;
            this.lista.forEach(producto => {
            this.total += producto.precio;
            });
        }
    }

});

compras.mount('#app');