import { footer, navigation} from "../../Components"
import { Box } from "../../lib"

export const setting = () => {
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
                children:navigation({children:"Setting", attr:{class:"flex fixed top-0 z-10 w-full py-2 px-3 bg-slate-300 rounded-lg items-center justify-between"}}),
            }),
            Box({
                element:"div",
                attr:{
                    class:"mt-11 flex flex-col gap-3"
                },
                children:[
                    Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                location.assign("/Account")
                            },
                            class:"rounded-3xl bg-gray-200 w-80 pl-3 py-3 text-gray-400"
                        },
                        children:"Your Account"
                    }),
                    Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                location.assign("/SettingOrders")
                            },
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

// <div class="mt-11 mt-96"