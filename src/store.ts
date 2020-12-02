import { reactive } from 'vue';
import { ColorItem, clearList, groupColors } from './colors';

const colorList: ColorItem[] = clearList;

export type State = {
    color: string;
    colors: ColorItem[][];
    hue: number;
    tolerance: number;
};

export const MainStore = reactive({
    state: reactive<State>({
        color: 'tomato',
        colors: [],
        hue: 30,
        tolerance: 0,
    }),
});

export const setColor = (val: string) => {
    MainStore.state.color = val;
}

export const setGroups = (colors: ColorItem[][]) => {
    MainStore.state.colors = colors;
}

export const setHue = (hue: number) => {
    MainStore.state.hue = hue;

    const groups = groupColors({ colorList, hue, tolerance: {min: 5}, mono: false });
    MainStore.state.colors = groups.list;
    MainStore.state.tolerance = groups.tolerance;
}
