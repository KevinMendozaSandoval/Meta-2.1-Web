<script setup>
import { ref, onMounted } from 'vue';

//Almacenar peliculas y para editar
const peliculas = ref([]);
const peliculaEditando = ref(null);

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

// Función para el evento del click
const handleRowClick = (nombrePelicula) => {
  const evento = new CustomEvent('seleccionar-pelicula', {
    detail: nombrePelicula,
  });
  window.dispatchEvent(evento);
};

// Función para abrir el modo de edición para una película
const editarPelicula = (index) => {
  peliculaEditando.value = index; // Establecer el índice de la película que se está editando
};

// Función para guardar los cambios en la película
const guardarCambios = (index) => {
  peliculaEditando.value = null; // Cerrar el modo de edición
};

// Función para borrar una película
const borrarPelicula = (id) => {
  peliculas.value = peliculas.value.filter(pelicula => pelicula.id !== id);
};

</script>

<template>
  <table border="1">
    <thead>
      <tr>
        <th>Título</th>
        <th>Rating</th>
        <th>Enlace IMDb</th>
        <th>Acciones</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(pelicula, index) in peliculas" :key="pelicula.id">
        <template v-if="peliculaEditando === index">
          <!-- Si estamos editando esta fila, muestra los campos de edición -->
          <td>
            <input v-model="pelicula.movie" />
          </td>
          <td>
            <input v-model="pelicula.rating" />
          </td>
          <td>
            <input v-model="pelicula.imdb_url" />
          </td>
          <td>
            <button @click="guardarCambios(index)">Guardar</button>
            <button @click="peliculaEditando = null">Cancelar</button>
          </td>
        </template>

        <template v-else>
          <!-- Si no estamos editando, mostrar los datos normales -->
          <td @click="handleRowClick(pelicula.movie)">{{ pelicula.movie }}</td>
          <td>{{ pelicula.rating }}</td>
          <td>
            <a :href="pelicula.imdb_url" target="_blank">Ver en IMDb</a>
          </td>
          <td>
            <button @click="editarPelicula(index)">Editar</button>
            <button @click="borrarPelicula(pelicula.id)">Borrar</button>
          </td>
        </template>
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

input {
  padding: 5px;
  border: 1px solid #ccc;
  width: 100%;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #40B983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2d7a56;
}
</style>
