<template>
  <div>
    <v-card>
      <v-card-title>Моя корзина</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="item in cartItems"
            :key="item.id" class="product-item">
            <div class="d-flex align-center">
              <img :src="item.image"
                alt="Изображение товара" width="50"
                height="50" />
              <div> Name: {{ item.name }}. Price: {{
                item.price
              }}
                <v-icon
                  small>mdi-currency-usd</v-icon>
              </div>
              <div>Count: {{ item.count }}</div>
            </div>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary"
          @click="checkout()">Оформить заказ</v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialogVisible">
      <v-card>
        <v-card-title>Оформление
          заказа</v-card-title>
        <v-card-text>
          <!-- Форма для оформления заказа -->
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary"
            @click="placeOrder()">Оформить</v-btn>
          <v-btn
            @click="dialogVisible = false">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    checkout() {
      this.dialogVisible = true
    },
    placeOrder() {
      // Отправка заказа на сервер
    }
  },
  computed: {
    ...mapGetters(['getCartItems', 'getItems']),
    cartItems() {
      return this.getCartItems.map(item => {
        const product = this.getItems.find(p => p.id === item.id);
        return {
          name: product.title,
          image: product.image,
          price: product.price,
          count: product.count,
        };
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 10px;
  width: fit-content;

  &_image {
    max-width: 100px;
  }
}
</style>