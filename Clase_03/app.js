const compras = Vue.createApp({
    // El modelo de Datos
    data(){
        return {
            producto: 'azucar',
            lista: [
                { precio: 400, producto: 'Pera'},
                { precio: 500, producto: 'Banana'}
            ],
            total: 500
        }
    },
    // Métodos
    methods: {
        agregar(){
            console.log('Agregando Producto');
            this.lista.push( this.producto);
            this.producto = '';
        }
    }

});

compras.mount('#app');