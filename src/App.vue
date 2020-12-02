<template>
    <input type="range" :value="color" @input="setColor" min="0" max="359" >
    <br>
    <small><pre style="display: inline-block">app {{store}}</pre></small>
    <ColorPanel />
</template>

<script lang="ts">
    import { defineComponent, toRefs } from "vue";
    import { ColorItem, MainStore } from './store';
    import ColorPanel from "./components/ColorPanel.vue";

    export default defineComponent({
        components: { ColorPanel },
        setup() {
            const store = MainStore;
            function setColor(event) {
                store.setColor(event.target.value);
            }

            const colors: ColorItem[] = [
                {
                    name: '#aaa',
                    textDark: true
                }
            ];
            store.setColors(colors);

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
