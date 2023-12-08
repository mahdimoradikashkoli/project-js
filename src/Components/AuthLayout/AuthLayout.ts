import { layoutProps } from "."
import { navbar } from ".."
import { Box} from "../../lib"

export const authLayout = (props:layoutProps) => {
    return Box({
        element:"div",
        attr:{
            class:"p-8"
        },
        children:[
            Box({
                element:"div",
                attr:{
                    class:"p-8 flex flex-col items-center"
                },
                children: navbar({attr:{class:"w-full z-10 fixed top-0 flex items-center justify-between bg-slate-300 py-2 px-2 rounded-xl font-medium"}}),
            
            }),
            Box({
                element:"Div",
                attr:{
                    class:""
                },
                children:props.children
            })
        ]
    })
}

