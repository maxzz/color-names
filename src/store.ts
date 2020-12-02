import { reactive } from "vue";

export interface ColorItem {
    name: string;
    textDark: true;
}

export type State = {
    color: string;
    currentColors: ColorItem[];
    hue: number;
};

export const MainStore = reactive({
    state: reactive<State>({
        color: 'tomato',
        currentColors: [],
        hue: 30,
    }),
    setColor(val: string) {
        this.state.color = val;
    },
    setColors(colors: ColorItem[]) {
        this.state.currentColors = colors;
    },
    setHue(hue: number) {

    },
});
