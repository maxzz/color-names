<template>
    <section>
        <div class="hue-controls">
            <span>Hue: {{hue}}</span> <input class="hue-slider" type="range" :value="hue" @input="newHue" min="0" max="359">
        </div>
        <!-- <br><small><pre style="display: inline-block">app {{store}}</pre></small> -->
        <ColorPanel />
    </section>
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
    :root {
        --content-width: max(340px, min(80vmin, 800px));
        --font-size: max(14px, min(3vmin, 20px));
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

        // margin-top: 60px;

        display: flex;
        place-items: center;

        // background-color: red;
    }
    section {
        position: relative;
        margin: 0 auto;
    }
    .hue-controls {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @import "./styles/slider.scss";
</style>

