<template>
  <v-col cols="4">
    <v-card @click.prevent="openDialogue"
      class="pa-2" outlined>
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
          <span class="font-weight-bold">{{
            item.count }}</span>
          <v-btn class="d-flex justify-right">
            <button class="add-to-cart-btn"
              @click="addToCart">Добавить в
              корзину</button>
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
    ...mapMutations(['setCurrentItem', 'showDialogue', 'setCartItems']),
    openDialogue(event) {
      if (!event.target.classList.contains('add-to-cart-btn')) {
        this.setCurrentItem(this.item);
        this.showDialogue();
      }
    },
    addToCart() {
      this.setCartItems(this.item);
    }
  }
}
</script>

<style lang="scss" scoped></style>