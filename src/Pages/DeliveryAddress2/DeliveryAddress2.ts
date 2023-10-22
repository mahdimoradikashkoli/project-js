import { button, heder, navigation } from "../../Components"
import { Box } from "../../lib"

export const deliveryAdress2 = () => {
    return Box({
        element:"Div",
        attr:{
            class:"p-8"
        },
        children:[
            Box({
                element:"Div",
                attr:{
                    class:"flex items-center"
                },
                children:[Box({
                    element:"img",
                    attr:{
                        src:"/image2/arrow-left-circle.png"
                    }
                }),
                Box({
                    element:"h1",
                    attr:{
                        class:"ml-11 font-bold text-yellow-500 text-xl"
                    },
                    children:"Delivery Address"
                })
                ]
            }),
            Box({
                element:"Div",
                attr:{
                    class:"flex mt-8 shadow-lg rounded-md bg-white px-12 items-center justify-between max-w-sm h-20"
                },
                children:[
                    Box({
                        element:"img",
                        attr:{
                            src:"/image2/Pin_fill (1).png"
                        }
                    }),
                    Box({
                        element:"img",
                        attr:{
                            src:"/image2/Credit card_fill (1).png"
                        }
                    })
                ]
            }),
            Box({
                element:"Div",
                attr:{
                    class:"mt-12 px-auto"
                },
                children:[Box({
                    element:"Div",
                    attr:{
                        class:"flex items-center justify-center max-w-sm h-64 bg-slate-200 rounded-xl"
                    },
                    children:Box({
                        element:"Div",
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
            button({children:"Continue"}),
            heder({
                attr:{
                    class:"flex mt-8 bg-white  justify-between border border-t-slate-300"
                },
                image1:"/image2/home (1).png",
                image2:"/image/bell.png",
                image3:"/image2/shopping-cart (2).png",
                image4:"/image/settings.png"
    
            })

        ]

    })
}

// <Div class="max-w-sm h-64 bg-slate-400 text-yellow-400 ml-11"