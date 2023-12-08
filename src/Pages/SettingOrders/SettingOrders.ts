import { Box } from "../../lib"

export const settingOrders = () => {

    const priceJson=localStorage.getItem("price")
    const parsPriceJson=priceJson?JSON.parse(priceJson):null

    const getidproduct=localStorage.getItem("productid")
    const parsIdProduct=getidproduct?JSON.parse(getidproduct):"product not exist"

    return Box({
        element:"div",
        attr:{
            class:"p-8"
        },
        children:[
            
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
    })
}

// <div class="w-80 h-36 p-6 items-end text-lg h-16 gap-5 mt-96 font-medium"