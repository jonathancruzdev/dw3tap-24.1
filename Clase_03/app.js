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
        // ASYNC AWAIT
        async getJSON(){
            const ruta = 'data.json';
            const resp = await fetch(ruta);
            const json = await resp.json();
            this.lista = json.data;
            console.log(this.lista)
        },
/*         getJSON(){

            const ruta = 'data.json';
            fetch( ruta)
            .then( resp => {
                return resp.json();
            }).then( json => {
                console.log(json)
                this.lista = json.data;
                this.calcularTotal();
            }).catch( error =>{
                console.error(error);
                alert('Upss tenemos un error')
            })
        }, */
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