<template>
    <h1>{{ peliculaSeleccionada }}</h1>
    <Peliculas />
  </template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Peliculas from '../components/Pelicula.vue'; 

const peliculaSeleccionada = ref('Tablas de Peliculas');

// Función para manejar el evento cuando se selecciona una película
const actualizarTitulo = (event) => {
  peliculaSeleccionada.value = event.detail; // Actualiza el titulo con el nombre de la película seleccionada
};

// Configurar el listener del evento cuando el componente se monte
onMounted(() => {
  window.addEventListener('seleccionar-pelicula', actualizarTitulo);
});

onUnmounted(() => {
  window.removeEventListener('seleccionar-pelicula', actualizarTitulo);
});



</script>

<style scoped>
@media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>