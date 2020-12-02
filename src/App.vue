<template>
    <input type="range" :value="hue" @input="newHue" min="0" max="359" > {{hue}}
    <!-- <br><small><pre style="display: inline-block">app {{store}}</pre></small> -->
    <ColorPanel />
</template>

<script lang="ts">
    import { defineComponent, toRef, toRefs } from "vue";
    import { MainStore, setColor, setHue } from './store';
    import ColorPanel from "./components/ColorPanel.vue";

    export default defineComponent({
        components: { ColorPanel },
        setup() {
            const store = MainStore;

            function newHue(event) {
                setHue(event.target.value);
            }

            setHue(40);

            return {
                hue: toRef(store.state, 'hue'),
                store,
                newHue,
            };
        },
    });
</script>

<style lang="scss">
</style>
