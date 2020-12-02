import { reactive } from "vue";

export const MainStore = reactive({
    state: {
        color: 'tonmato'
    },
    setColor(val: string) {
        this.state.color = val;
    }
});
