import { Box, BoxProps } from "../../lib"
type buttonProps={
    children?:BoxProps["children"],
    attr?:BoxProps["attr"]
}
export const button = (props:buttonProps) => {
    return Box({
        element:"button",
        attr:{
            class:"mt-28 text-white bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-full text-lg py-4 px-32 w-80 text-center mr-2 mb-2  dark:hover:bg-yellow-600 dark:focus:ring-yellow-600"
        },
        children:props.children
    })
}

// <Div class="mt-"