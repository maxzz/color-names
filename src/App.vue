<template>
    <div>app</div>
    <ColorPanel />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import ColorPanel from "./components/ColorPanel.vue";

    export default defineComponent({
        components: { ColorPanel },
        setup() {
            return {};
        },
    });
</script>

<style lang="scss">
</style>
