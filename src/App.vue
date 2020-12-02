<template>
    <input type="range" :value="color" @input="setColor" >
    <div>app {{store}}</div>
    <ColorPanel />
</template>

<script lang="ts">
    import { defineComponent, toRefs } from "vue";
    import { MainStore } from './store.ts';
    import ColorPanel from "./components/ColorPanel.vue";

    export default defineComponent({
        components: { ColorPanel },
        setup() {
            const store = MainStore;
            function setColor(event) {
                store.setColor(event.target.value);
            }
            return {
                ...toRefs(store.state),
                store,
                setColor,
            };
        },
    });
</script>

<style lang="scss">
</style>
