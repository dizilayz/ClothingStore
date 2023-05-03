import axios from "axios";

export default {
    state: {
        items: [],
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload;
        },
        addItem(state, payload) {
            state.items.push(payload);
        }
    },
    getters: {
        getItems(state) {
            return state.items;
        },
    },
    actions: {
        fetchData(context) {
            axios.get('https://fakestoreapi.com/products?limit=10')
                .then(response => context.commit("setItems", response.data))
        },
        addItem(context, payload) {
            context.commit("addItem", payload);
        }
    },
}