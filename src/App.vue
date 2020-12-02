<template>
    <section>
        <div class="hue-controls">
            <div class="hue-info">
                <br>
                <div>
                    Hue: {{hue}}
                </div>
                <div>
                    Tolerance: {{tolerance}}
                </div>
                <hr>
                <div class="hue-colors">
                    <div v-if="color">
                        <div>{{color.name}}</div>
                        <div>{{color.hex}}</div>
                        <div>{{formatRGB(color.rgb)}}</div>
                        <div>{{formatHSL(color.hsl)}}</div>
                    </div>
                </div>
            </div>
            <input ref="hueSlider" class="hue-slider" type="range" :value="hue" @input="newHue" min="0" max="360">
        </div>
        <!-- <br><small><pre style="display: inline-block">app {{store}}</pre></small> -->
        <ColorPanel />
    </section>
</template>

<script lang="ts">
    import { defineComponent, ref, toRef, toRefs } from "vue";
    import { MainStore, setHue } from './store';
    import ColorPanel from "./components/ColorPanel.vue";

    export default defineComponent({
        components: { ColorPanel },
        setup() {
            const store = MainStore;
            const hueSlider = ref<HTMLInputElement>(null);

            setHue(204);

            function newHue(event) {
                let val = +event.target.value;
                setHue(val);
                let pos = val / 360;
                hueSlider.value.style.setProperty('--pos', ''+pos);
            }

            const formatRGB = (rgb: [number, number, number]) => `rgb(${rgb.join(', ')})`;
            const formatHSL = (hsl: [number, number, number]) => `hsl(${hsl.map((_, i) => i === 0 ? _ : `${_}%`).join(', ')})`;

            //TODO: auto select color

            return {
                hue: toRef(store.state, 'hue'),
                tolerance: toRef(store.state, 'tolerance'),
                color: toRef(store.state, 'color'),
                store,
                newHue,
                hueSlider,
                formatRGB,
                formatHSL,
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
    .hue-info {
        min-width: 12em;
        font-size: .8em;

        .hue-colors {
            min-height: 5em;
        }
    }
    .hue-controls {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.75vmin;
    }

    @import "./styles/base.scss";
    @import "./styles/slider.scss";
</style>
