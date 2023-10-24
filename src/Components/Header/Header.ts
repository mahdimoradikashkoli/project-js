import { Box } from "../../lib"

type propsHeader={
    attr?:any,
    image1?:string,
    image2?:string,
    image3?:string,
    image4?:string,
}

export const heder = (props:propsHeader) =>{
    return Box({
        element:"Div",
        attr:props.attr,
        children:[Box({
            element:"Div",
            attr:{
                class:"flex justify-between gap-9 items-center "
            },
            children:[Box({
                element:"a",
                attr:{
                    href:"/Home"
                },
                children:Box({
                    element:"img",
                    attr:{
                        src:props.image1
                    }
                }),
            }),
            Box({
                element:"a",
                attr:{
                    href:"/"
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
            element:"Div",
            attr:{
                class:'flex justify-between gap-9 items-center'
            },
            children:[Box({
                element:"a",
                attr:{
                    href:"/CartPage"
                },
                children:Box({
                    element:"img",
                    attr:{
                        src:props.image3
                    }
                }),
            }),
            Box({
                element:"a",
                attr:{
                    href:"/Setting"
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