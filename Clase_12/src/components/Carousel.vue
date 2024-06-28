<script>
    export default {
        name: 'Carousel',
        data (){
            return {
                imagenes: [
                    'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                    'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
                    'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
                ]
            }
        }
    }

</script>

<template>
    <div>
        <v-carousel>
        <v-carousel-item
            v-for="imagen in imagenes"

            v-bind:src="imagen"
            cover
        ></v-carousel-item>
        </v-carousel>
    </div>

</template>
