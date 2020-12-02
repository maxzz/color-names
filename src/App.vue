<template>
    <input type="range" v-model="store.color">
    <div>app {{store}}</div>
    <ColorPanel />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { MainStore } from './store.ts';
    import ColorPanel from "./components/ColorPanel.vue";

    export default defineComponent({
        components: { ColorPanel },
        setup() {
            const store = MainStore;
            return {
                store
            };
        },
    });
</script>

<style lang="scss">
</style>
