<template>
    <div>
        <v-app-bar color="deep-purple accent-4">
            <v-app-bar-nav-icon class="color white"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn class="ml-3">
                <router-link to="/">Главная</router-link>
            </v-btn>
            <v-btn class="ml-3">
                <router-link to="menu">Меню</router-link>
            </v-btn>
            <v-btn class="ml-3">
                <router-link to="/cart">Корзина</router-link>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>