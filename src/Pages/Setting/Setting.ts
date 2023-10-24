import { heder, navigation} from "../../Components"
import { Box } from "../../lib"

export const setting = () => {
    return Box({
        element:"Div",
        attr:{
            class:"p-8"
        },
        children:[
            navigation({children:"Setting", attr:{class:"flex items-center justify-between"}}),
            Box({
                element:"Div",
                attr:{
                    class:"mt-11 flex flex-col gap-3"
                },
                children:[
                    Box({
                        element:"button",
                        attr:{
                            class:"rounded-3xl bg-gray-200 w-80 pl-3 py-3 text-gray-400"
                        },
                        children:"Your Account"
                    }),
                    Box({
                        element:"button",
                        attr:{
                            class:"rounded-3xl bg-gray-200 w-80 pl-3 py-3 text-gray-400"
                        },
                        children:"Your Order"
                    }),
                    Box({
                        element:"button",
                        attr:{
                            class:"rounded-3xl bg-red-300 w-80 pl-3 py-3 text-white"
                        },
                        children:"Sign Out"
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

// <Div class="mt-11 mt-96"