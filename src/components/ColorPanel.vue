<template>
    <!-- <small><pre style="display: inline-block">pan {{store}}</pre></small> -->
    <div class="cpanel-container">
        <div class="cpanel">
            
            <div class="row" v-for="(group, index) of store.state.colors" :key="index">
                <button
                    v-for="(color, index) of group" :key="index"
                    :style="{backgroundColor: color.name, color: color.type === 'light' ? 'black' : 'white'}"
                    class="color-button"
                >
                     {{color.name}}
                </button>
            </div>
        </div>
        <div class="axis axis-lightness">lightness</div>
        <div class="axis axis-saturation">saturation</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { MainStore } from '../store';

    export default defineComponent({
        setup() {
            const store = MainStore;
            return {
                store
            };
        },
    });
</script>

<style lang="scss">
    //#region axises

    $axis-color: #bbb;

    .axis {
        font-size: .5em;
        letter-spacing: .2em;
        text-align: center;
        text-transform: uppercase;
        color: $axis-color;
    }

    .axis::before, .axis::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 40%;
        height: 1px;
        background-color: lighten($axis-color, 20%);
    }

    .axis::before {
        left: 0;
    }

    .axis::after {
        right: 0;
    }

    .axis-lightness {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        transform-origin: top right;
        transform: rotate(-90deg) translateY(200%) rotate(180deg) translateX(100%) translateY(70%);
    }

    .axis-saturation {
        transform: translateY(70%);
    }

    //#endregion axises
</style>

<style lang="scss">
    .cpanel-container {
        position: relative;
        width: var(--content-width);
        height: var(--content-width);
    }

    .cpanel {
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;

        .row {
            display: grid;
            grid-auto-flow: column;

            .color-button {
                margin: 0;
                appearance: none;
                border: none;
                font-size: .7em;
                text-transform: uppercase;
                transition: transform .2s;
                user-select: none;

                &:hover, &:focus {
                    outline: none;
                    transform: scale(1.02);
                    box-shadow: 3px 3px 10px rgba(0, 0, 0, .125);
                }
            }
        }
    }
</style>
