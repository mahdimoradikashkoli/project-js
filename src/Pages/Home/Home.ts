import { footer, navbar, search} from "../../Components"
import { product } from "../../Components"
import { Box } from "../../lib"

export const home = () => {
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
                children:navbar({attr:{class:"w-full z-10 fixed top-0 flex items-center justify-between bg-slate-300 py-2 px-2 rounded-xl font-medium"}}),
            }),
            Box({
            element:"div",
            attr:{
                class:"flex justify-between mt-4"
            },
            children:[Box({
                element:"div",
                attr:{
                    class:"flex items-center gap-1"
                },
                children:[Box({
                    element:"img",
                    attr:{
                        src:"/image/Ellipse 1.png"
                    }
                }),
                Box({
                    element:"p",
                    attr:{
                        class:"text-xl"
                    },
                    children:"BestFruitShop"
                })
                ]
            }),
            Box({
                element:"a",
                attr:{
                    href:"/Account"
                },
                children:Box({
                    element:"img",
                    attr:{
                        src:"/image/Ellipse 2.png"
                    }
                })
            })]
        }),
        search(),
        Box({
            element:"div",
            attr:{
                class:"flex items-center justify-between text-lg mt-5 mb-5"
            },
            children:[Box({
                element:"h1",
                attr:{
                    class:"",
                },
                children:"Popular"
            }),
            Box({
                element:"a",
                attr:{
                    href:"/AllProduct",
                    class:"bg-blue-300 p-2 rounded-lg"
                },
                children:Box({
                    element:"h1",
                    children:"All Product"
                })
            })]
        }),
        Box({
            element:"div",
            attr:{
                class:" flex flex-wrap gap-12 "
            },
            children:[product({image:"/image/Rectangle 10.png", name:"Pineapple" , price:"100"})
            ,product({image:"/image/Rectangle 11.png", name:"Banana" , price:"200"})]
        }),
        Box({
            element:"h1",
            attr:{
                class:"text-lg mt-5 mb-5",
            },
            children:"Best Seller"
        }),
        Box({
            element:"div",
            attr:{
                class:"flex flex-wrap gap-12 mb-8",
            },
            children:[product({image:"/image/Rectangle 12.png", name:"Green Grapes" , price:"255"}),
            product({image:"/image/Rectangle 13 (1).png", name:"Grapes" , price:"300"}),
            product({image:"/image/Rectangle 14.png", name:"Melon" , price:"280"}),
            product({image:"/image/Rectangle 15.png", name:"Mango" , price:"290"}),
            product({image:"/image/Rectangle 15.png", name:"Mango" , price:"290"}),
            product({image:"/image/Rectangle 15.png", name:"Mango" , price:"290"}),
            product({image:"/image/Rectangle 15.png", name:"Mango" , price:"350"})]
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
            image1:"/image/home.png",
            image2:"/image/bell.png",
            image3:"/image/shopping-cart.png",
            image4:"/image/settings.png"
        })
    })
    ]
}

// <div class="m-5 flex-wrap w-96 mb-8 mx-auto z-10 bottom-0 gap-9 -top-4 w-40 gap-9 pb-6 border-t-slate-800"