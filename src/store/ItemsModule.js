import axios from "axios";

export default {
    state: {
        items: [],
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload;
        },
    },
    getters: {
        getItems(state) {
            return state.items;
        },
    },
    actions: {
        fetchData(context) {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then(response => context.commit("setPhotos", response.data))
        }
}
}