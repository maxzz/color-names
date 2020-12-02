<template>
    <div class="cpanel-container">
        <div class="cpanel">
            <div class="row">
                <button>#0044dd</button>
                <button>#0044dd</button>
            </div>
            <div class="row">
                <button>#0044dd</button>
            </div>
        </div>
        <div class="axis axis-lightness">lightness</div>
        <div class="axis axis-saturation">saturation</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        setup() {
            return {};
        },
    });
</script>

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
        }
    }

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
</style>
