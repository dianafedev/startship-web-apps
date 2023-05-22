<script setup>
import { ref } from 'vue'
const emit = defineEmits(['search-items'])

const keyword = ref('')

const searchItems = () => {
  emit('search-items', keyword.value)
}
</script>

<template>
  <v-text-field
    v-model="keyword"
    density="compact"
    variant="solo"
    label="Search name or model.."
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
    @click:append-inner="searchItems"
    @keyup.enter="searchItems"
  />
</template>