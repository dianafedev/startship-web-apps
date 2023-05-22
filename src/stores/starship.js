import { defineStore } from 'pinia'
import { fetchData } from '@/api/starship'

export const useListStore = defineStore({
  id: 'startship',
  state: () => ({
    item: null,
    items: [],
    count: 0,
    loading: false,
    loadingScroll: false
  }),
  getters: {
    getAll: (state) => {
      return state.items
    },
    getDetail: (state) => {
      return state.item
    }
  },
  actions: {
    async fetchItems(params) {
      this.loading = true
      this.items = []
      await fetchData(params)
        .then((response) => {
          this.loading = false
          this.items = response.data.results
          this.count = response.data.count
        })
        .catch((error) => {
          console.log(error)
          this.loading = false
        })
    },
    async fetchInfiniteItems(params) {
      this.loadingScroll = true
      setTimeout(async () => {
        await fetchData(params)
          .then((response) => {
            this.loadingScroll = false
            this.items.push(...response.data.results)
          })
          .catch((error) => {
            console.log(error)
            this.loadingScroll = false
          })
      }, 2000)
    },
    async fetchDetailItem(url) {
      this.loading = true
       this.item = await fetch(`${url}`)
        .then((response) => {
          this.loading = false
          return response.json()
        })
        .catch((error) => {
          console.log(error)
          this.loading = false
        })
    }
  },
})
