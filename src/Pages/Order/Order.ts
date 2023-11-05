import { button, footer, navigation } from "../../Components"
import { Box, renderer } from "../../lib"

export const order = () => {

    const jsonAdad=localStorage.getItem("adad")
    const parsJsonAdad=jsonAdad?JSON.parse(jsonAdad):null

    const priceJson=localStorage.getItem("price")
    const parsPriceJson=priceJson?JSON.parse(priceJson):null

    const getProduct=localStorage.getItem("product")
    const parsGetProduct=getProduct?JSON.parse(getProduct):null

    return [Box({
        element:"div",
        attr:{
            class:"p-8"
        },
        children:[
            Box({
                element:"Div",
                attr:{
                    class:"flex flex-col items-center"
                },
                children:navigation({children:"Cart", href:"/DeliveryAddress2", attr:{class:"flex fixed top-0 z-10 w-full py-2 px-3 bg-slate-300 rounded-lg items-center justify-between"}}),
            }),
        Box({
            element:"div",
            attr:{
                id:"product",
                class:"flex px-8 mt-11 items-center justify-between"
            },
            children:[Box({
                element:"div",
                attr:{
                    class:'rounded-full w-20'
                },
                children:Box({
                    element:"img",
                    attr:{
                        src:parsGetProduct
                    }
                })
            }),
            Box({
                element:"div",
                attr:{
                    class:"flex text-base items-center gap-2"
                },
                children:[Box({
                    element:"p",
                    attr:{
                        class:"pb-1"
                    },
                    children:parsJsonAdad+"kg"
                }),
                Box({
                    element:"p",
                    children:"$" +parsPriceJson+"US"
                })]
            })]
        }),
        Box({
            element:"div",
            attr:{
                class:"px-8"
            },
            children:Box({
                element:"div",
                attr:{
                    class:"flex justify-between items-center px-16 max-w-lg bg-slate-300 h-20 rounded-xl px-8"
                },
                children:[
                    Box({
                        element:"button",
                        attr:{
                            
                        },
                        children:Box({
                            element:"img",
                            attr:{
                                src:"/image2/edit.png"
                            }
                        })
                    }),
                    Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                renderer("product","")
                                renderer("information","")
                            }
                        },
                        children:Box({
                            element:"img",
                            attr:{
                                src:"/image2/trash-2.png"
                            }
                        })
                    })
                ]
            })
            
        }),
        Box({
            element:"div",
            attr:{
                class:"flex flex-col items-center"
            },
            children:Box({
                element:"button",
                attr:{
                    class:"px-12 mt-16"
                },
                children:Box({
                    element:"div",
                    attr:{
                        class:"w-80 rounded-3xl bg-slate-300 h-11 flex items-center justify-center"
                    },
                    children:'Add Cupon'
                })
            })
        }),
        Box({
            element:"div",
            attr:{
                id:"information",
                class:"px-10 mt-44"
            },
            children:[
                Box({
                    element:"div",
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
                            children:"$" +parsPriceJson+" US"
                        })
                    ]
                }),
                Box({
                    element:"div",
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
                            children:"$10.00 US"
                        })
                    ]
                }),
                Box({
                    element:"div",
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
                            children:"$" +(parsPriceJson+10.00)+" US"
                        })
                    ]
                })
            ]
        }),
        Box({
            element:"div",
            attr:{
                class:"-mt-20 flex flex-col items-center"
            },
            children:button({
                onClick:()=>{
                    location.assign("/OrderReport")
                },
                children:"Order"
            })
        })]
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
            image3:"/image2/shopping-cart (1).png",
            image4:"/image/settings.png"

        })
    })]
}

// <div class="mt-44 6"