<template>
    <small><pre style="display: inline-block">pan {{store}}</pre></small>
    <div class="cpanel-container">
        <div class="cpanel">
            <div class="row">
                <button class="color-button">#0044dd</button>
                <button class="color-button">#0044dd</button>
            </div>
            <div class="row">
                <button class="color-button">#0044dd</button>
            </div>
        </div>
        <div class="axis axis-lightness">lightness</div>
        <div class="axis axis-saturation">saturation</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { MainStore } from '../store.ts';

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

        /*temp*/
        margin: 0 auto;
        background-color: red;
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
                font-size: .6em;
                user-select: none;
                transition: transform .2s;

                &:hover, &:focus {
                    outline: none;
                    transform: scale(1.04);
                    box-shadow: 3px 3px 10px rgba(0, 0, 0, .125);
                }
            }
        }
    }
</style>
