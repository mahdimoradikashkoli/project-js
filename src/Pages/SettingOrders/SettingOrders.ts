import { heder, navigation } from "../../Components"
import { Box } from "../../lib"

export const settingOrders = () => {
    return Box({
        element:"Div",
        attr:{
            class:"p-8"
        },
        children:[
            navigation({children:"Setting",attr:{class:"flex items-center justify-between"}}),
            Box({
                element:"Div",
                attr:{
                    class:"flex flex-col gap-5"
                },
                children:[
                    Box({
                        element:"Div",
                        attr:{
                            class:"w-80 py-5 pl-4 pr-3 mt-11 h-36 bg-slate-200 rounded-3xl font-medium"
                        },
                        children:[
                            Box({
                                element:"Div",
                                attr:{
                                    class:"flex items-center justify-between"
                                },
                                children:[
                                    Box({
                                        element:"h1",
                                        attr:{
                                            class:""
                                        },
                                        children:"Order"
                                    }),
                                    Box({
                                        element:"Div",
                                        attr:{
                                            class:"flex gap-1 items-center"
                                        },
                                        children:[Box({
                                            element:"p",
                                            children:"#399123"
                                        }),
                                        Box({
                                            element:"button",
                                            children:Box({
                                                element:"img",
                                                attr:{
                                                    src:"/image2/chevron-down (2).png"
                                                }
                                            })
                                        })]
                                    })
                                ]
                            }),
                            Box({
                                element:"Div",
                                attr:{
                                    class:"flex flex-col items-end pr-6 mt-2"
                                },
                                children:[
                                    Box({
                                        element:"h1",
                                        attr:{
                                            class:"text-gray-500"
                                        },
                                        children:"being packed"
                                    }),
                                    Box({
                                        element:"p",
                                        attr:{
                                            class:"text-gray-500"
                                        },
                                        children:"$8.509 US"
                                    }),
                                ]
                            })
                        ]
                    }),
                    Box({
                        element:"Div",
                        attr:{
                            class:"w-80 bg-slate-200 rounded-3xl p-5 h-16 font-medium"
                        },
                        children:[
                            Box({
                                element:"Div",
                                attr:{
                                    class:"flex items-center justify-between pr-5"
                                },
                                children:[
                                    Box({
                                        element:"h1",
                                        attr:{
                                            class:""
                                        },
                                        children:"Order"
                                    }),
                                    Box({
                                        element:"p",
                                        
                                        children:"#557123"
                                    })
                                ]
                            }),
                        ]
                    })
                ]
            }),
            heder({
                attr:{
                    class:"flex mt-96 bg-white  justify-between border border-t-slate-300"
                },
                image1:"/image2/home (1).png",
                image2:"/image/bell.png",
                image3:"/image2/shopping-cart (2).png",
                image4:"/image2/settings (1).png"
            })
        ]
    })
}

// <Div class="w-80 h-36 p-6 items-end text-lg h-16 gap-5 mt-96 font-medium"