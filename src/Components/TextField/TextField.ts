import { Box, BoxProps } from "../../lib"

type textFieldProps =
| {
    label?:string | HTMLElement,
    helpertext:string | HTMLElement,
    attr?:BoxProps["attr"]
}|any;
export const textField = (props:textFieldProps) => {
    const {label , helpertext, icon , ...restprops}=props
    return Box({
        element:"input",
        attr:{
            class:"relative rounded-3xl bg-slate-300 w-80 p-5  text-lg",
            ...restprops
        }
    })
}