import { button, footer} from "../../Components"
import { Box } from "../../lib"

export const deliveryAdress2 = () => {
    return [Box({
        element:"div",
        attr:{
            class:"p-8"
        },
        children:[
            Box({
                element:"div",
                attr:{
                    class:"flex flex-col items-center"
                },
                children:Box({
                    element:"div",
                    attr:{
                        class:"flex fixed top-0 w-full py-2 px-3 bg-slate-300 rounded-lg z-10 items-center"
                    },
                    children:[Box({
                        element:"a",
                        attr:{
                            href:"/Deliveryaddress"
                        },
                        children:Box({
                            element:"img",
                            attr:{
                                src:"/image2/arrow-left-circle.png"
                            }
                        })
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
            }),
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
                                location.assign("/Deliveryaddress")
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
                                location.assign("/DeliveryAddress2")
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
            button({children:"Continue",onClick:()=>{location.assign("/Order")}})]

    }),
    Box({
        element:"div",
        attr:{
            class:"flex flex-col items-center"
        },
        children:footer({
            attr:{
                class:"flex fixed bottom-0 w-full bg-white justify-between border-t border-slate-300 px-2 rounded-lg shodow-lg"
            },
            image1:"/image2/home (1).png",
            image2:"/image/bell.png",
            image3:"/image2/shopping-cart (2).png",
            image4:"/image/settings.png"

        })
    })]
}

// <div class="max-w-sm h-64 bg-slate-400 text-yellow-400 ml-11"