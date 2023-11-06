import { Box} from "../../lib"
import { buttonProps } from "./types"

export const button = (props:buttonProps) => {
    const {...restprops}=props
    return Box({
        element:"button",
        attr:{
            ...restprops,
            class:"mt-24 text-white bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-full text-lg py-4 w-80 text-center mr-2 mb-20  dark:hover:bg-yellow-600 dark:focus:ring-yellow-600"
        },
        children:props.children
    })
}

