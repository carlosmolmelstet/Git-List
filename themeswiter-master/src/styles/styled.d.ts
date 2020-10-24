import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            banner: string;
            background: string;
            backgroundHome: string;
            
            card: string;
            text:  string;
            textLight: string;
            text404: string;
            switchBar: string,


        }
    }
}