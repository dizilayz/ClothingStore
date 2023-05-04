import axios from "axios";

export default {
    state: {
        items: [],
        dialogueVisible: false,
        currentItem: {},
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload;
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
        getCurrentItem: (state) => state.currentItem
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