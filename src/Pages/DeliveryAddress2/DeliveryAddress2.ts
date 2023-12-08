import { button} from "../../Components"
import { Box } from "../../lib"

export const deliveryAdress2 = () => {
    return Box({
        element:"div",
        attr:{
            class:"p-8"
        },
        children:[
            
            Box({
                element:"div",
                attr:{
                    class:"flex mt-8 shadow-lg rounded-md bg-white px-12 items-center justify-between max-w-sm h-20"
                },
                children:[
                    Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                location.assign("/productlayout/deliveryaddress")
                            }
                        },
                        children:Box({
                            element:"img",
                            attr:{
                                src:"/image2/Pin_fill (1).png"
                            }
                        })
                    }),
                    Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                location.assign("/productlayout/deliveryaddress2")
                            }
                        },
                        children:Box({
                            element:"img",
                            attr:{
                                src:"/image2/Credit card_fill (1).png"
                            }
                        })
                    })
                ]
            }),
            Box({
                element:"div",
                attr:{
                    class:"mt-12 px-auto"
                },
                children:[Box({
                    element:"div",
                    attr:{
                        class:"flex items-center justify-center max-w-sm h-64 bg-slate-200 rounded-xl"
                    },
                    children:Box({
                        element:"div",
                        attr:{
                            class:"flex flex-col items-center"
                        },
                        children:[Box({
                            element:"img",
                            attr:{
                                src:"/image2/plus-circle.png"
                            }
                        }),
                        Box({
                            element:"h1",
                            attr:{
                                class:'text-yellow-400'
                            },
                            children:"Add Card"
                        })
                        ]
                    })
                })
                ]
            }),
            button({children:"Continue",onClick:()=>{location.assign("/productlayout/order")}})]

    })
}

// <div class="max-w-sm h-64 bg-slate-400 text-yellow-400 ml-11"