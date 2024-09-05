<script setup>
import { ref, onMounted } from 'vue';

// Declarar una referencia para almacenar los datos de las películas
const peliculas = ref([]);

// Función para obtener los datos de las películas
const fetchPeliculas = async () => {
  try {
    const response = await fetch('https://dummyapi.online/api/movies');
    const data = await response.json();
    peliculas.value = data; // Asignar los datos a la referencia
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

// Ejecutar la función fetchPeliculas cuando el componente se monte
onMounted(fetchPeliculas);

// Función para manejar el click en un renglón de la tabla y emitir un evento
const handleRowClick = (nombrePelicula) => {
  // Emitir el evento 'seleccionar-pelicula' con el nombre de la película
  const evento = new CustomEvent('seleccionar-pelicula', {
    detail: nombrePelicula,
  });
  window.dispatchEvent(evento); // Enviar el evento
};
</script>

<template>
  <table border="1">
    <thead>
      <tr>
        <th>Título</th>
        <th>Rating</th>
        <th>Enlace IMDb</th>
      </tr>
    </thead>
    <tbody>
      <!-- Ajustamos las propiedades utilizadas en la tabla -->
      <tr v-for="pelicula in peliculas" :key="pelicula.id" @click="handleRowClick(pelicula.movie)">
        <td>{{ pelicula.movie }}</td>
        <td>{{ pelicula.rating }}</td>
        <td>
          <a :href="pelicula.imdb_url" target="_blank">Ver en IMDb</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #40B983;
}

tr:hover {
  background-color: #40B983;
  cursor: pointer;
}
</style>
