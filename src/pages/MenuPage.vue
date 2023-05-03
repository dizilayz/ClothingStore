<template>
    <v-container>
      <AddNewItem @add-item="addNewitem" />
      <v-row>
        <MenuList v-for="item in getItems" :key="item.id" :item="item" />
      </v-row>
    </v-container>
  </template>
  
  <script>
  import MenuList from "@/components/Menu/MenuList";
  import AddNewItem from "@/components/Menu/AddNewItem.vue";
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    components: {
      MenuList,
      AddNewItem,
    },
    methods: {
      ...mapActions(["fetchData",]),
    },
    mounted() {
      this.fetchData();
    },
    computed: {
      ...mapGetters(["getItems"]),
    },
  };
  </script>
  
  <style lang="scss" scoped></style>