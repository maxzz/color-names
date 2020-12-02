import { reactive } from "vue";

export interface ColorItem {
    name: string;
    textDark: true;
}

export interface ColorGroup {
    items: ColorItem[];
}

export type State = {
    color: string;
    colors: ColorGroup[];
    hue: number;
};

export const MainStore = reactive({
    state: reactive<State>({
        color: 'tomato',
        colors: [],
        hue: 30,
    }),
});

export const setColor = (val: string) => {
    MainStore.state.color = val;
}

export const setGroups = (colors: ColorGroup[]) => {
    MainStore.state.colors = colors;
}

const colors: ColorItem[] = [
    {
        name: 'powderblue',
        textDark: true
    },
    {
        name: 'lightblue',
        textDark: true
    }
];

const colors2: ColorItem[] = [
    {
        name: 'deepskyblue',
        textDark: true
    },
];

export const setHue = (hue: number) => {
    MainStore.state.hue = hue;

    setGroups([{
        items: colors
    }, {
        items: colors2
    },
    ]);
}
