<script setup>
  import Carousel from './components/Carousel.vue';
</script>

<template>
  <header>

    <Carousel ></Carousel>

  </header>

  <main>
    <v-container>
      <h1> Vuetify</h1>
      <v-row>
        <v-col md="6" sm="2" class="columna">
          <h4> Columna 1</h4>
          <v-btn size="large" block> Boton 1</v-btn>
        </v-col>
        <v-col md="3" sm="4">
          <h4>Columna 2</h4>
          <v-card text="Contenido de la card"></v-card>
        </v-col>
        <v-col md="2" sm="4" class="columna">
          <h4>Columna 3</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field 
            label="Buscar" 
            clearable type="search"
            hide-details="auto"
          ></v-text-field>

        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col md="4" sm="6" lg="2">
          <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                Number 10
              </v-card-subtitle>

              <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text="Ver"></v-btn>

              </v-card-actions>
        </v-card>
        </v-col>
      </v-row>

    </v-container>
  </main>
</template>

<style scoped>
.columna {
  border: 1px solid teal;
}
</style>
