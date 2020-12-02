<template>
    <input type="range" :value="hue" @input="newHue" min="0" max="359" >
    <br>
    <small><pre style="display: inline-block">app {{store}}</pre></small>
    <ColorPanel />
</template>

<script lang="ts">
    import { defineComponent, toRefs } from "vue";
    import { ColorItem, MainStore, setColor, setHue } from './store';
    import ColorPanel from "./components/ColorPanel.vue";

    export default defineComponent({
        components: { ColorPanel },
        setup() {
            const store = MainStore;
            
            function newHue(event) {
                setColor(event.target.value);
            }

            setHue(40);

            return {
                ...toRefs(store.state),
                store,
                newHue,
            };
        },
    });
</script>

<style lang="scss">
</style>
