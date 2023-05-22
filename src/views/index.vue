<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/starship'
import Loader from '@/components/Loader.vue'
import ListItem from '@/components/ListItem.vue'
import SearchNotFound from '@/components/SearchNotFound.vue'

const props = defineProps(['search'])
const { loading, loadingScroll, items, count } = storeToRefs(useListStore())
const { fetchItems, fetchInfiniteItems } = useListStore()

const page = ref(1)
const search = ref(null)

const params = computed(() => {
  const attr = {
    page: page.value,
  }
  return attr
})

const noMore = computed(() => {
  if (items.value.length >= count.value) {
    return true
  }
  return false
})

watch(
  () => props.search,
  (keyword) => {
    search.value = keyword
    searchItems()
  }
)

onMounted(() => {
  fetchItems(params.value)
})

const searchItems = async () => {
  page.value = 1
  search.value
    ? (params.value.search = search.value)
    : delete params.value.search
  await fetchItems(params.value)
}

const load = async (entries) => {
  if (entries && !noMore.value && !search.value) {
    params.value.page = page.value += 1
    await fetchInfiniteItems(params.value)
  }
}
</script>

<template>
  <v-container>
    <v-overlay v-model="loading" />
    <v-row v-if="!items.length && !loading">
      <v-col cols="12">
        <search-not-found />
      </v-col>
    </v-row>
    <v-row v-if="loading">
      <v-col v-for="key in 4" :key="key" cols="12" sm="6">
        <loader />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-for="(item, key) in items" :key="key" cols="12" sm="6">
        <list-item :item="item" />
      </v-col>
      <div v-intersect="load"></div>
    </v-row>
    <div
      v-if="loadingScroll"
      class="d-flex justify-center align-center mt-6 mb-8"
    >
      <v-progress-circular indeterminate color="#1f7087" :size="24" />
      <span class="text-subtitle-1 ml-2">Loading..</span>
    </div>
  </v-container>
</template>
