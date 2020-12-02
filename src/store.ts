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
        color: parseColorStrings({
            type: 'light',
            name: 'azure',
            rgb: 'rgb(240,255,255)',
            hsl: 'hsl(180,100%,97.1%)',
            hex: '#F0FFFF'
        }),
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
}

export const setCurrentColor = (color: ColorItem) => {
    MainStore.state.color = color;
}
