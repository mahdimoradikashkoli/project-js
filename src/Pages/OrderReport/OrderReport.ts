import { footer } from "../../Components"
import { Box } from "../../lib"

export const orderReport = () => {
    return [Box({
        element:"div",
        attr:{
            class:"flex flex-col"
        },
        children:[
            Box({
                element:"div",
                attr:{
                    class:"flex flex-col items-center"
                },
                children:Box({
                    element:"div",
                    attr:{
                        class:"flex fixed top-0 z-10 w-full py-2 px-3 bg-slate-300 rounded-lg items-center"
                    },
                    children:[Box({
                        element:"a",
                        attr:{
                            href:"/Order"
                        },
                        children:Box({
                            element:"img",
                            attr:{
                                src:"/image2/arrow-left-circle.png"
                            }
                        })
                    }),
                    Box({
                        element:"h1",
                        attr:{
                            class:"ml-11 font-bold text-yellow-500 text-xl"
                        },
                        children:"Order Report"
                    })
                    ]
                }),
            }),
            Box({
                element:"div",
                attr:{
                    class:"flex flex-col items-center justify-center mt-20"
                },
                children:[Box({
                    element:"img",
                    attr:{
                        class:"relative",
                        src:"/image2/Group 1.png"
                    }
                }),Box({
                    element:"h1",
                    attr:{
                        class:"text-center relative w-60 -top-40"
                    },
                    children:"Order Place, Your Order Number is #399123"
                })]
            })
        ]
    }),Box({
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
// <div class="absolute w-60 relative text-center"