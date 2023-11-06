import { footer, navigation } from "../../Components"
import { Box } from "../../lib"

export const settingOrders = () => {

    const priceJson=localStorage.getItem("price")
    const parsPriceJson=priceJson?JSON.parse(priceJson):null

    const getidproduct=localStorage.getItem("productid")
    const parsIdProduct=getidproduct?JSON.parse(getidproduct):null

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
                children:navigation({children:"Setting", href:"/Setting" ,attr:{class:"flex fixed top-0 z-10 w-full py-2 px-3 bg-slate-300 rounded-lg items-center justify-between"}}),
            }),
            Box({
                element:"div",
                attr:{
                    class:"flex flex-col gap-5"
                },
                children:[
                    Box({
                        element:"div",
                        attr:{
                            class:"w-80 py-5 pl-4 pr-3 mt-11 h-36 bg-slate-200 rounded-3xl font-medium"
                        },
                        children:[
                            Box({
                                element:"div",
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
                                        element:"div",
                                        attr:{
                                            class:"flex gap-1 items-center"
                                        },
                                        children:[Box({
                                            element:"p",
                                            children:"#"+parsIdProduct
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
                                element:"div",
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
                                        children:"$"+(parsPriceJson+10.00)+"US"
                                    }),
                                ]
                            })
                        ]
                    }),
                    Box({
                        element:"div",
                        attr:{
                            class:"w-80 bg-slate-200 rounded-3xl p-5 h-16 font-medium"
                        },
                        children:[
                            Box({
                                element:"div",
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
                                        
                                        children:"#"+parsIdProduct
                                    })
                                ]
                            }),
                        ]
                    })
                ]
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
            image3:"/image2/shopping-cart (2).png",
            image4:"/image2/settings (1).png"
        })
    })]
}

// <div class="w-80 h-36 p-6 items-end text-lg h-16 gap-5 mt-96 font-medium"