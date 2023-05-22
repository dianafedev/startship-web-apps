<script setup>
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/starship'
import { useRouter } from 'vue-router'
import Loader from '@/components/Loader.vue'

const router = useRouter()
const { loading, item } = storeToRefs(useListStore())
const { fetchDetailItem } = useListStore()

fetchDetailItem(useRouter().currentRoute.value.query.url)

const handleBack = () => {
  router.push({
    path: '/starship',
  })
}
</script>

<template>
  <v-container>
    <v-row v-if="loading">
      <v-col cols="12" sm="12">
        <Loader />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-card v-if="item">
          <v-card-title>
            <v-btn
              elevated
              size="small"
              prepend-icon="mdi-arrow-left"
              color="teal-accent-4"
              class="text-capitalize mb-2"
              @click="handleBack"
            >
              Back
            </v-btn>
          </v-card-title>
          <v-card-text class="pt-4">
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Name </v-col>
              <v-col cols="9">
                {{ item.name }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Model </v-col>
              <v-col cols="9">
                {{ item.model }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Starship class </v-col>
              <v-col cols="9">
                {{ item.starship_class }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Manufacturer </v-col>
              <v-col cols="9">
                {{ item.manufacturer }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Cost in credits </v-col>
              <v-col cols="9">
                {{ item.cost_in_credits }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Cost in credits </v-col>
              <v-col cols="9">
                {{ item.cost_in_credits }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Length </v-col>
              <v-col cols="9">
                {{ item.length }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Crew </v-col>
              <v-col cols="9">
                {{ item.crew }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Passengers </v-col>
              <v-col cols="9">
                {{ item.passengers }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold">
                Max atmosphering speed
              </v-col>
              <v-col cols="9">
                {{ item.max_atmosphering_speed }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold">
                Hyperdrive rating
              </v-col>
              <v-col cols="9">
                {{ item.hyperdrive_rating }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> MGLT </v-col>
              <v-col cols="9">
                {{ item.MGLT }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Cargo capacity </v-col>
              <v-col cols="9">
                {{ item.cargo_capacity }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Consumables </v-col>
              <v-col cols="9">
                {{ item.consumables }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Url </v-col>
              <v-col cols="9">
                <a :href="item.url">{{ item.url }}</a>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Created </v-col>
              <v-col cols="9">
                {{ item.created }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="font-weight-bold"> Edited </v-col>
              <v-col cols="9">
                {{ item.edited }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
