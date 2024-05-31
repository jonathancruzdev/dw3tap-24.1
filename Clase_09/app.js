const home = {
    template: `<div class="alert alert-primary" role="alert">Home</div>`,
    name: 'inicio'
}

const dos = {
    template: `<div class="alert alert-success" role="alert">Pantalla DOS</div>`,
    name: 'pantalla2'
}

const tres = {
    template: `<div class="alert alert-info" role="alert">Pantalla TRES</div>`,
    name: 'pantalla3'
}

const contactos = {
    template: `<contactos> </contactos>`,
    name: 'contacto'
}

// Creamos las rutas
const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/dos',
        component: dos
    },
    {
        path: '/tres',
        component: tres
    },
    {
        path: '/contactos',
        component: contactos
    }
]

// Creamos la instancia de Vue Router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes 
})


const app = Vue.createApp({
    data(){
        return {
            titulo: 'Vue Router'
        }
    },
    methods: {

    }
})

// Montamos el enrutador en al app Principal
app.use( router);
// Registro el componente
app.component('contactos', Contactos);


app.mount('#app');