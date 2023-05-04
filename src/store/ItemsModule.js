import axios from "axios";

export default {
    state: {
        items: [],
        dialogueVisible: false,
        currentItem: {},
        cartItems: []
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload;
        },
        setCartItems(state, payload) {
            const cartItemIndex = state.cartItems.findIndex(item => item.id === payload.id);
            if (cartItemIndex !== -1) {
              state.cartItems[cartItemIndex].count++;
            } else {
              state.cartItems.push({...payload, count: 1});
            }
          },
        addItem(state, payload) {
            state.items.push(payload);
        },
        showDialogue(state) {
            state.dialogueVisible = true;
        },
        hideDialogue(state) {
            state.dialogueVisible = false;
        },
        setCurrentItem(state, payload) {
            state.currentItem = payload;
        }
    },
    getters: {
        getItems(state) {
            return state.items;
        },
        getDialogueVisible: (state) => state.dialogueVisible,
        getCurrentItem: (state) => state.currentItem,
        getCartItems: (state) => state.cartItems,
    },
    actions: {
        fetchData(context) {
            axios.get('https://fakestoreapi.com/products?limit=10')
                .then(response => context.commit("setItems", response.data))
        },
        addItem(context, payload) {
            context.commit("addItem", payload);
        },
        addToCart(context, product) {
            context.commit("setCart", product)
        }
    },
}