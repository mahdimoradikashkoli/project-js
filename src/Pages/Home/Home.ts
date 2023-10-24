import { heder, navbar, search} from "../../Components"
import { product } from "../../Components"
import { Box } from "../../lib"

export const home = () => {
    return Box({
        element:"Div",
        attr:{
            class:"p-8"
        },
        children:[
            navbar({attr:{class:"flex items-center justify-between w-full bg-slate-300 p-2 rounded-xl font-medium"}}),
            Box({
            element:"Div",
            attr:{
                class:"flex justify-between mt-4"
            },
            children:[Box({
                element:"Div",
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
            element:"h1",
            attr:{
                class:"text-lg mt-5 mb-5",
            },
            children:"Popular"
        }),
        Box({
            element:"Div",
            attr:{
                class:" flex flex-wrap gap-12 "
            },
            children:[product({image:"/image/Rectangle 10.png", name:"Pineapple" , price:"$955 US"})
            ,product({image:"/image/Rectangle 11.png", name:"Banana" , price:"$955 US"})]
        }),
        Box({
            element:"h1",
            attr:{
                class:"text-lg mt-5 mb-5",
            },
            children:"Best Seller"
        }),
        Box({
            element:"Div",
            attr:{
                class:"flex flex-wrap gap-12",
            },
            children:[product({image:"/image/Rectangle 12.png", name:"Green Grapes" , price:"$998 US"}),
            product({image:"/image/Rectangle 13 (1).png", name:"Grapes" , price:"$998 US"}),
            product({image:"/image/Rectangle 14.png", name:"Melon" , price:"$998 US"}),
            product({image:"/image/Rectangle 15.png", name:"Mango" , price:"$998 US"})]
        }),
        heder({
            attr:{
                class:"flex relative -top-4 bg-white  justify-between border border-t-slate-300"
            },
            image1:"/image/home.png",
            image2:"/image/bell.png",
            image3:"/image/shopping-cart.png",
            image4:"/image/settings.png"
        })
        ]
    })
}

// <Div class="m-5 flex-wrap relative -top-4 w-40 gap-9 pb-6 border-t-slate-800"