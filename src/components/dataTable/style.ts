import { DefaultTheme } from "styled-components/dist/types";
import { colorSchemaType} from "./types";
import "styled-components";

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        text?:{
            dark?:string,
            default?:string
        },
        background?:{
            default?:string,
            striped?:string,
            warn?:string,
            header?:string,
            body?:string
        },
        shade?:{
            default?:string
        },
        border?:{
            default:string
        }
    }
}

export const defaultColorSchema: DefaultTheme={
    text:{
        dark:'#202020',
        default:'#515151'
    },
    background:{
        default:"#ffffff",
        striped:'#e9ecef',
        warn:'#d62828',
        header:'#ffffff',
        body:'#ffffff'
    },
    shade:{
        default:'#dee2e6'
    },
    border:{
        default:'#adb5bd'
    }
}


export const createTableStyle=(theme:colorSchemaType):DefaultTheme=>(defaultColorSchema);