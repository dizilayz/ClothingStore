<template>
    <v-container>
      <AddNewItem />
      <v-row>
        <MenuList v-for="item in getItems" :key="item.id" :item="item" />
      </v-row>
      <ItemDialogue/>
    </v-container>
  </template>
  
  <script>
  import MenuList from "@/components/Menu/MenuList";
  import AddNewItem from "@/components/Menu/AddNewItem.vue";
  import ItemDialogue from "@/components/Menu/ItemDialogue.vue";
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    components: {
      MenuList,
      AddNewItem,
      ItemDialogue,
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