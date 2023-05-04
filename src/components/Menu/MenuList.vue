<template>
  <v-col cols="4">
    <v-card @click="openDialogue" class="pa-2"
      outlined>
      <v-card-title
        class="text-h5 font-weight-bold">{{
          item.title }}</v-card-title>
      <v-img :src="item.image" height="500"
        width="500" class="mx-auto" />
      <v-card-text>
        <div
          class="d-flex justify-center align-center mb-4">
          <span class=" font-weight-bold">{{
            item.price }}</span>
          <v-icon small>mdi-currency-usd</v-icon>
        </div>
        <v-row
          class="d-flex justify-center align-center">
          <v-btn icon class="mr-3">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span class="font-weight-bold">{{
            item.count }}</span>
          <v-btn icon class="ml-3">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn class="d-flex justify-right">
            <button>Добавить в корзину</button>
          </v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>
  
<script>
import { mapMutations } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapMutations(['setCurrentItem', 'showDialogue']),
    openDialogue() {
      this.setCurrentItem(this.item);
      this.showDialogue();
    }
  }
}
</script>

<style lang="scss" scoped></style>