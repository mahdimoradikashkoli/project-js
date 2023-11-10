import { Box } from "../../lib"
import {footerType} from "./type"

export const footer = (props:footerType) =>{
    return Box({
        element:"div",
        attr:props.attr,
        children:[
            Box({
            element:"div",
            attr:{
                class:"flex justify-between gap-9 items-center "
            },
            children:[Box({
                element:"buton",
                attr:{
                    onClick:()=>{
                        location.assign("/Home")
                    }
                },
                children:Box({
                    element:"img",
                    attr:{
                        src:props.image1
                    }
                }),
            }),
            Box({
                element:"button",
                attr:{
                    onClick:()=>{
                        location.assign("/Home")
                    }
                },
                children:Box({
                    element:"img",
                    attr:{
                        src:props.image2
                    }
                }),
            })
            ]
        }),
        Box({
            element:"img",
            attr:{
                src:'/image/mid button.png',
                class:"relative -top-5 "
            }
        }),
        Box({
            element:"div",
            attr:{
                class:'flex justify-between gap-9 items-center'
            },
            children:[Box({
                element:"button",
                attr:{
                    onClick:()=>{
                      const getProduct=localStorage.getItem("product")
                      const parsGetProduct=getProduct?JSON.parse(getProduct):null
                        if(parsGetProduct) {
                            location.assign("/CartPage")
                        }else{
                            return alert("The shopping cart is empty")
                        }
                    }
                },
                children:Box({
                    element:"img",
                    attr:{
                        src:props.image3
                    }
                }),
            }),
            Box({
                element:"button",
                attr:{
                    onClick:()=>{
                        location.assign("/Setting")
                    }
                },
                children:Box({
                    element:"img",
                    attr:{
                        src:props.image4
                    }
                }),
            })
            ]
        })]
        
    })
}