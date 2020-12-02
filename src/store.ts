import { reactive } from "vue";

export interface ColorItem {
    name: string;
    textDark: true;
}

type State = {
    color: string;
    currentColors: ColorItem[];
};

export const MainStore = reactive({
    state: reactive<State>({
        color: 'tomato',
        currentColors: [],
    }),
    setColor(val: string) {
        this.state.color = val;
    },
    setColors(colors: ColorItem[]) {
        this.state.currentColors = colors;
    }
});
