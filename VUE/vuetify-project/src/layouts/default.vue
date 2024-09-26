<template>
  <v-app>
    <v-app-bar :elevation="2" rounded>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Menu</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary image="https://picsum.photos/1080/1920">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  const drawer = ref(false)
  const items = ref([
    { title: 'Inicio', icon: 'mdi-home', to: '/' },
    { title: 'Peliculas', icon: 'mdi-movie', to: '/pelicula' },
    { title: 'Tarjeta', icon: 'mdi-email', to: '/tarjeta' },
  ])
</script>