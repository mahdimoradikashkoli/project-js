import { search,product } from "../../Components"
import { heder } from "../../Components/Header"
import { Box } from "../../lib"

export const searchResult = () => {
    return Box({
        element:'Div',
        attr:{
            class:"p-8"
        },
        children:[Box({
            element:"Div",
            attr:{
                class:"flex justify-between"
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
                element:"img",
                attr:{
                    src:"/image/Ellipse 2.png"
                }
            })]
        }),
        search(),
        Box({
            element:"Div",
            attr:{
                class:"text-lg mt-5 mb-5 flex items-center",
            },
            children:[Box({
                element:"h1",
                attr:{
                    class:"text-lg mt-5 mb-5",
                },
                children:"Popular"
            }),
            Box({
                element:"img",
                attr:{
                    class:"pt-2",
                    src:"/image/chevron-down.png",
                },
            }),]
        }),
        Box({
            element:"Div",
            attr:{
                class:"flex flex-wrap gap-12",
            },
            children:[product({image:"/image/Rectangle 12.png", name:"Green Grapes" , price:"$998 US"}),
            product({image:"/image/Rectangle 13 (1).png", name:"Grapes" , price:"$998 US"}),
            product({image:"/image/Rectangle 14.png", name:"Melon" , price:"$998 US"}),
            product({image:"/image/Rectangle 15.png", name:"Mango" , price:"$998 US"}),
            product({image:"/image/Rectangle 16.png", name:"Guava" , price:"$998 US"}),
            product({image:"/image/Rectangle 17.png", name:"Dragon Fruit" , price:"$998 US"})]
        }),heder({
            attr:{
                class:"flex relative -top-4 bg-white  justify-between border border-t-slate-300"
            },
            image1:"/image/home.png",
            image2:"/image/bell.png",
            image3:"/image/shopping-cart.png",
            image4:"/image/settings.png"
        })]
    })

    //<Div class="bg-red-400"
}