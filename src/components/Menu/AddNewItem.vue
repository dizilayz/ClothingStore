<template>
    <div>
        <v-row class="d-flex">
            <v-col cols="6">
                <v-text-field v-model="title"
                    label="Название" />
            </v-col>
            <v-col cols="6">
                <v-file-input v-model="img"
                    label="Фото" />
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="price"
                    label="Цена" />
            </v-col>
            <v-col>
                <v-btn color="primary"
                    @click="addNewItem">Добавить
                    товар</v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data: () => ({
        title: '',
        price: '',
        img: null,
    }), methods: {
        addNewItem() {
            const reader = new FileReader();
            reader.onload = () => {
                let item = {
                    id: Date.now(),
                    title: this.title,
                    image: reader.result,
                    price: this.price
                }
                this.$emit('add-item', item)
            }
            reader.readAsDataURL(this.img)
        }
    }
}
</script>

<style lang="scss" scoped></style>