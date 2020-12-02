<template>
    <input type="range" :value="store.color" @input="store.setColor($event.target.value)" >
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
