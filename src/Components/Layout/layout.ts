import { layoutProps } from "."
import { Box} from "../../lib"

export const layout = (props:layoutProps) => {
    return Box({
        element:"Div",
        attr:{
            class:""
        },
        children:props.children
    })
}

