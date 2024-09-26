<template>
  <v-container>
    <v-row align="center" justify="center" style="height: 100vh;">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-img
          :src="currentImage"
          class="fullscreen"
          alt="Random Image"
          style="max-height: 100%; max-width: 100%; object-fit: cover;"
        ></v-img>
      </v-col>
    </v-row>

    <!-- Botón para cambiar la imagen -->
    <v-row align="center" justify="center">
      <v-col class="d-flex justify-center">
        <v-btn color="primary" @click="changeImage">Cambiar imagen</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://picsum.photos/1080/1920',  // 
      currentImage: ''  // Imagen actual que se mostrará
    };
  },
  mounted() {
    this.changeImage();  // Llama a changeImage() cuando el componente está montado
  },

  methods: {
    changeImage() {
      this.currentImage = `${this.imageUrl}?random=${Math.random()}`;  // Genera una nueva imagen aleatoria
    }
  }
};
</script>

<style scoped>
.fullscreen {
  height: 100vh;
  width: 100vw;
}
</style>
