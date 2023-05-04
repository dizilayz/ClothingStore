<template>
    <v-dialog
        v-model="$store.getters.getDialogueVisible"
        max-width="290"
        @click:outside="$store.commit('hideDialogue')">
        <v-card>
            <v-card-title>{{ full_title }}</v-card-title>

            <v-card-text>
                <v-img
                    :src="$store.getters.getCurrentItem.image" />
                {{
                    full_description
                }}
            </v-card-text>
        </v-card>

    </v-dialog>

</template>

<script>
export default {
    computed: {
        full_title() {
            return this.$store.getters.getCurrentItem.title
        },
        full_description() {
            return `Description: ${this.$store.getters.getCurrentItem.description}`
        }
    }
}
</script>

<style lang="scss" scoped></style>