<script setup>
import { ref, onMounted, defineProps } from 'vue';

// Props para recibir la función de carga y el mensaje opcional
defineProps({
  fetchData: Function,
  loadingMessage: {
    type: String,
    default: 'Cargando datos...'
  }
});

// Estado de carga y error
const cargando = ref(false);
const error = ref(null);

// Ejecutar la función de carga
onMounted(async () => {
  cargando.value = true;
  error.value = null;
  try {
    await fetchData();
  } catch (err) {
    error.value = err.message;
  } finally {
    cargando.value = false;
  }
});
</script>

<template>
  <div>
    <!-- Progreso mientras cargan los datos -->
    <v-progress-circular v-if="cargando" :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
    
    <!-- Mostrar un mensaje opcional mientras se carga -->
    <div v-if="cargando">{{ loadingMessage }}</div>
    
    <!-- Mostrar error si algo sale mal -->
    <v-alert v-if="error" type="error" dismissible>{{ error }}</v-alert>

    <!-- Mostrar el contenido solo si no está cargando y no hay error -->
    <slot v-if="!cargando && !error"></slot>
  </div>
</template>
