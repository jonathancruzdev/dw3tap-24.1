const app = Vue.createApp({
    data(){
        return {
            titulo: 'Componentes',
            lista: [
                { titulo: 'Gatitos', foto: 'images/gatito1.jpg'},
                { titulo: 'Pequeño', foto: 'images/gatito2.jpg'},
                { titulo: 'Blanco', foto: 'images/gatito3.jpg'}
            ]
        }
    }
})

/* -------------------------- Creo los componentes -------------------------- */
// `` alt + 96
app.component('titulo',{
    props: ['texto'],
    template: `<h2 class="text-center"> {{ texto }} </h2>`,

})

app.component('post', {
    props: ['foto', 'titulo'],
    data(){
        return {
            likes: 0
        }
    },
    methods:{
        darLike(){
            this.likes++;
        }
    },
    template: // html
        `<div class="card col-md-5">
            <img v-bind:src="foto"  v-bind:alt="titulo" class="card-img-top">
            <div class="card-body">
                <h2> {{ titulo}} </h2>
                <i v-if="likes > 0" v-on:click="darLike" class="fa-solid fa-heart fa-lg text-danger"></i>
                <i v-else v-on:click="darLike" class="fa-regular fa-heart fa-lg"></i> 
                {{likes}}
                
                <hr>
                <button class="btn btn-success" type="button"> Ver foto</button>
            </div>
        </div>`
})


app.mount('#app')