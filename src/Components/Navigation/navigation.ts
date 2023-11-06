import { propsNavigation } from "."
import { Box } from "../../lib"
 export const navigation = (props:propsNavigation) => {
    return Box({
        element:"Div",
        attr:props.attr,
        children:[Box({
            element:"img",
            attr:{
                src:"/image2/arrow-left-circle.png"
            }
        }),
        Box({
            element:"h1",
            attr:{
                class:"font-bold text-yellow-500 text-xl"
            },
            children:props.children
        }),
        Box({
            element:"img",
            attr:{
                src:"/image2/search.png"
            }
        })]
    })
}