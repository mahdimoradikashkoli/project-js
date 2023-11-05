import { Box} from "../../lib"
import {navbarProps} from "./type"

export const navbar = (props:navbarProps) => {
    return Box({
        element:"Div",
        attr:props.attr,
        children:[
            Box({
                element:"a",
                attr:{
                    href:"/Home"
                },
                children:"Home"
            }),Box({
                element:"Div",
                attr:{
                    class:"flex items-center justify-between gap-3"
                },
                children:[
                    Box({
                        element:"a",
                        attr:{
                            href:"/Signin"
                        },
                        children:"Sign in"
                    }),
                    Box({
                        element:"a",
                        attr:{
                            href:"/Signup"
                        },
                        children:"Sign up"
                    })
                ]
            })
        ]
    })
}
// <Div class=""