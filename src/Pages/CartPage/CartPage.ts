import { button,navigation ,footer} from "../../Components"
import { Box, renderer, } from "../../lib"

export const cartPage=() => {

    const jsonAdad=localStorage.getItem("adad")
    const parsJsonAdad=jsonAdad?JSON.parse(jsonAdad):null

    const priceJson=localStorage.getItem("price")
    const parsPriceJson=priceJson?JSON.parse(priceJson):null

    const getProduct=localStorage.getItem("product")
    const parsGetProduct=getProduct?JSON.parse(getProduct):null

    const getProductName=localStorage.getItem("productname")
    const parsProductName=getProductName?JSON.parse(getProductName):null

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
                children:navigation({children:"Cart",href:"/Singleproduct",attr:{class:"flex fixed top-0 w-full py-2 px-3 z-10 bg-slate-300 rounded-lg items-center justify-between"}}),
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
                    children:"$"+parsPriceJson+" US"
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
                                renderer("product",Box({element:"p",attr:{class:"text-xl text-yellow-400 mb-3"},children:"The shopping cart is empty"}))
                                localStorage.removeItem("product")
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
                id:"information",
                class:"px-10 mt-72"
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
                            children:parsProductName
                        }),
                        Box({
                            element:"p",
                            children:"$"+parsPriceJson+" US"
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
                            children:"$" +(parsPriceJson +10.00 )+" US"
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
                    const getProduct=localStorage.getItem("product")
                    const parsGetProduct=getProduct?JSON.parse(getProduct):null
                    if(parsGetProduct) {
                        location.assign("/Deliveryaddress")
                    }else{
                        return alert("The shopping cart is empty")
                    }
                },
                attr:{
                    class:""
                },
                children:"Checkout"
            })
        }),
        ]
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

//<div class="mt-11 mt-7 w-96 h-14 w-16 rounded-full p-8 text-lg mt- font-medium pb-1 max-w-xs h-20 px-16 rounded-xl mt-72"