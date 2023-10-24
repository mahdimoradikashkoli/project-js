import { button } from "../../Components"
import { heder } from "../../Components/Header"
import { navigation } from "../../Components/Navigation"
import { Box } from "../../lib"

export const cartPage= () => {
    return Box({
        element:"dive",
        attr:{
            class:"p-8"
        },
        children:[navigation({children:"Cart",href:"/Singleproduct",attr:{class:"flex px-8 items-center justify-between"}}),
        Box({
            element:"Dive",
            attr:{
                class:"flex px-8 mt-11 items-center justify-between"
            },
            children:[Box({
                element:"img",
                attr:{
                    src:"/image/Rectangle cart.png"
                }
            }),
            Box({
                element:"Div",
                attr:{
                    class:"flex text-base items-center gap-2"
                },
                children:[Box({
                    element:"p",
                    attr:{
                        class:"pb-1"
                    },
                    children:"1kg"
                }),
                Box({
                    element:"p",
                    children:"$998 US"
                })]
            })]
        }),
        Box({
            element:"Div",
            attr:{
                class:"px-8"
            },
            children:Box({
                element:"Div",
                attr:{
                    class:"flex justify-between items-center px-16 max-w-lg bg-slate-300 h-20 rounded-xl px-8"
                },
                children:[
                    Box({
                        element:"img",
                        attr:{
                            src:"/image2/edit.png"
                        }
                    }),
                    Box({
                        element:"img",
                        attr:{
                            src:"/image2/trash-2.png"
                        }
                    })
                ]
            })
            
        }),
        Box({
            element:"Div",
            attr:{
                class:"px-10 mt-72"
            },
            children:[
                Box({
                    element:"Div",
                    attr:{
                        class:"text-lg font-medium flex items-center justify-between"
                    },
                    children:[
                        Box({
                            element:"h1",
                            children:"Melon"
                        }),
                        Box({
                            element:"p",
                            children:"$998 US"
                        })
                    ]
                }),
                Box({
                    element:"Div",
                    attr:{
                        class:"text-lg font-medium flex items-center justify-between"
                    },
                    children:[
                        Box({
                            element:"h1",
                            children:"Delivery"
                        }),
                        Box({
                            element:"p",
                            children:"$7.511 US"
                        })
                    ]
                }),
                Box({
                    element:"Div",
                    attr:{
                        class:"mt-4 text-lg font-medium flex items-center justify-between"
                    },
                    children:[
                        Box({
                            element:"h1",
                            children:"Total"
                        }),
                        Box({
                            element:"p",
                            children:"$8.509 US"
                        })
                    ]
                })
            ]
        }),
        Box({
            element:"Div",
            attr:{
                class:"-mt-20 px-8"
            },
            children:button({
                attr:{
                    class:""
                },
                children:"Checkout"
            })
        }),
        heder({
            attr:{
                class:"flex mt-8 bg-white  justify-between border border-t-slate-300 px-2"
            },
            image1:"/image2/home (1).png",
            image2:"/image/bell.png",
            image3:"/image2/shopping-cart (1).png",
            image4:"/image/settings.png"

        })
        ]
    })
}

//<Div class="mt-11 mt-7 w-96 h-14 p-8 text-lg mt- font-medium pb-1 max-w-xs h-20 px-16 rounded-xl mt-72"