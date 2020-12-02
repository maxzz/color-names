import { reactive } from 'vue';
import { ColorItem, clearList, groupColors, parseColorStrings } from './colors';

const colorList: ColorItem[] = clearList;

export type State = {
    color: ColorItem;
    colors: ColorItem[][];
    hue: number;
    tolerance: number;
};

export const MainStore = reactive({
    state: reactive<State>({
        color: null,
        colors: [],
        hue: 0,
        tolerance: 0,
    }),
});

export const setGroups = (colors: ColorItem[][]) => {
    MainStore.state.colors = colors;
}

export const setHue = (hue: number) => {
    MainStore.state.hue = hue;

    const groups = groupColors({ colorList, hue, tolerance: {min: 5}, mono: false });
    MainStore.state.colors = groups.list;
    MainStore.state.tolerance = groups.tolerance;
    MainStore.state.color = null;
}

export const setCurrentColor = (color: ColorItem) => {
    MainStore.state.color = color;
}
