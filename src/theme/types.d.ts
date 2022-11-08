import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {

        paletteColor: {
            yellow: string;
            pink: string;
            red: string;
            background: string
        }
    }
}