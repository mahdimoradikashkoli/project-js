import { footer, navigation, product } from "../../Components"
import { Box } from "../../lib"

export const allProduct= () => {
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
                children:navigation({children:"All Product",attr:{class:"flex fixed top-0 z-10 w-full py-2 px-3 bg-slate-300 rounded-lg items-center justify-between"},href:"/Home"}),
            }),
            Box({
                element:"div",
                attr:{
                    class:"flex flex-wrap gap-9 mt-10 mb-8"
                },
                children:[
                    product({image:"/image/Rectangle 10.png", name:"Pineapple" , price:"100"}),
                    product({image:"/image/Rectangle 11.png", name:"Banana" , price:"200"}),
                    product({image:"/image/Rectangle 13 (1).png", name:"Grapes" , price:"300"}),
                    product({image:"/image/Rectangle 14.png", name:"Melon" , price:"280"}),
                    product({image:"/image/Rectangle 15.png", name:"Mango" , price:"290"}),
                    product({image:"/image/Rectangle 15.png", name:"Mango" , price:"290"}),
                    product({image:"/image/Rectangle 15.png", name:"Mango" , price:"290"}),
                    product({image:"/image/Rectangle 15.png", name:"Mango" , price:"290"}),
                    product({image:"/image/Rectangle 12.png", name:"Green Grapes" , price:"255"})
                ]
            })
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
    })]
}