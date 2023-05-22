<script setup>
import { ref } from 'vue'
import Navbar from './components/layouts/Navbar.vue'

const search = ref(null)

const handleSearch = (keyword) => {
  search.value = keyword
}
</script>

<template>
  <v-layout>
    <v-main>
      <navbar @search="handleSearch" />
      <v-sheet class="h-screen my-4">
        <router-view v-slot="{ Component, route }">
          <transition name="slide">
            <component :is="Component" :key="route" :search="search" />
          </transition>
        </router-view>
      </v-sheet>
    </v-main>
  </v-layout>
</template>
