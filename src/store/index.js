import Vue from "vue";
import Vuex from "vuex";
import ItemsModule from '@/store/ItemsModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ItemsModule
    }
})