<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import SearchBox from '@/components/SearchBox.vue'

const emit = defineEmits(['search'])

const keyword = ref(null)

const title = computed(() => {
  if (useRouter().currentRoute.value.query.name) {
    return useRouter().currentRoute.value.query.name
  }
  return useRouter().currentRoute.value.meta.title
})

const visibleSearch = computed(() => {
  if (useRouter().currentRoute.value.name === 'starship') {
    return true
  }
  return false
})

const searchItems = (keyword) => {
  emit('search', keyword)
}
</script>

<template>
  <v-app-bar
    color="teal-darken-4"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <search-box v-if="visibleSearch" @search-items="searchItems" />

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
