<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['item'])
const item = reactive(props.item)

const router = useRouter()
const handleDetail = () => {
  router.push({
    path: '/starship/detail',
    query: {
      name: item.name,
      url: item.url,
    },
  })
}
</script>

<template>
  <v-card>
    <v-card-item>
      <v-card-title class="d-flex justify-space-between" style="color: #1f7087">
        {{ item.name }}
        <v-btn
          elevated
          size="small"
          prepend-icon="mdi-eye"
          color="teal-accent-4"
          @click="handleDetail"
        >
          Detail
        </v-btn>
      </v-card-title>
    </v-card-item>
    <v-card-text>
      <div>
        <div class="d-flex align-center">
          <span>{{ item.hyperdrive_rating }}</span>
          <v-rating
            v-model="item.hyperdrive_rating"
            half-increments
            size="small"
            bg-color="orange-lighten-1"
            color="yellow-darken-3"
          />
        </div>
        <p class="text--primary">
          class: {{ item.starship_class }}
        </p>
        <p class="text--primary">
          model: {{ item.model }}
        </p>
        <div class="text--primary">
          manufacturer: {{ item.manufacturer }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
