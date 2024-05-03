const app = Vue.createApp({
    data(){
        return {
            nombre: '',
            apellido: '',
            email: '',
            cursoId: 3,
            terminos: false,
            filtro: '',
            inscripciones: [],
            cursos: []
        }
    },
    created() {
        console.log('Creación de Vue :D');
        this.getJSON();
        this.leerLocal();
    },
    // Propiedades computadas
    computed: {
        cantidad(){
            return this.inscripciones.length;
        },
        inscripcionesFiltradas(){
            const lista = this.inscripciones.filter(item => item.nombre.toLowerCase().includes( this.filtro.toLowerCase()) );
            return lista
        }
    },
    methods: {
        async getJSON(){
            const resp = await fetch('api/cursos.json');
            const json = await resp.json();
            console.log(json);
            this.cursos = json.data;
        },
        obtenerCurso(id){
            const curso = this.cursos.find( item => item.id == id );
            return curso ? curso.nombre : '';
        },
        inscribirse(){
            console.log('Inscripción');
            const inscripcion = {
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                cursoId: this.cursoId
            }
            console.log(inscripcion);
            this.inscripciones.push(inscripcion);
            this.guardarLocal();

            // Limpiamos los inputs
            this.nombre = '';
            this.apellido = '';
            this.email = '';
            this.cursoId = 3;
        },
        leerLocal(){
            const storage = JSON.parse( localStorage.getItem('inscripciones') );
            this.inscripciones = storage ? storage : [];
        },
        guardarLocal(){
            localStorage.setItem('inscripciones', JSON.stringify( this.inscripciones ) );
        }
    }
})

app.mount('#app');