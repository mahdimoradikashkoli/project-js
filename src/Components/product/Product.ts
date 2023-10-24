import { productType } from "."
import { Box } from "../../lib"

export const product = (props:productType) => {
    return Box({
        element:"Div",
        attr:{
            class:"flex flex-col items-center w-36 h-40  shadow-2xl rounded-xl"
        },
        children:[Box({
            element:"a",
            attr:{
                href:"/Singleproduct"
            },
            children:Box({
                element:"img",
                attr:{
                    class:"relative",
                    src:props.image
                }
            }),
        }),
        Box({
            element:"Div",
            attr:{
                class:"relative -top-11"
            },
            children:[Box({
                element:"h1",
                children:props.name
            }),
            Box({
                element:"p",
                children:props.price
            })]
        })]
    })
}

// <Div class="relative -top-11 w-36 shadow-lg border-separate"