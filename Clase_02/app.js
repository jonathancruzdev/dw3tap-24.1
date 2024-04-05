const aplicacion = Vue.createApp({
    // Configuraciones
    data: function(){
        return {
            titulo: 'Mi aplicación',
            detalle: 'Esto es un detalle',
            foto: 'images/perro.png',
            mascota: 'perrito',
            activo: false,
            cantidad: 1
        }
    }
});

aplicacion.mount('#app');
