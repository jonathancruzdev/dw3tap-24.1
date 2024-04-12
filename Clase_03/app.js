const compras = Vue.createApp({
    // El modelo de Datos
    data(){
        return {
            producto: 'azucar',
            lista: ['Peras', 'Bananas', 'Manzanas'],
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