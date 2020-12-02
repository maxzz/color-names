import { reactive } from "vue";

export const MainStore = reactive({
    state: reactive({
        color: 'tomato'
    }),
    setColor(val: string) {
        this.state.color = val;
    }
});
