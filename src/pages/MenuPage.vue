<template>
        <v-container>
            <AddNewItem @add-item="addNewitem"/>
            <v-row>
                <MenuList v-for="item in items"
                :key="item.id"
                :item="item"
                />
            </v-row>
        </v-container>

</template>

<script>
import MenuList from '@/components/Menu/MenuList';
import AddNewItem from '@/components/Menu/AddNewItem.vue';

export default {
    components: {
        MenuList, AddNewItem
    },
    data: () => ({
        items: [],
    }),
    methods: {
        fetchData() {
            this.axios.get('https://fakestoreapi.com/products?limit=10')
                .then(response => this.items = response.data);
        },
        addNewitem(item) {
            this.items.push(item);
        }, 
    },
    mounted() {
        this.fetchData();
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped></style>