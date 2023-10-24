import { heder, navigation, textField } from "../../Components"
import { Box } from "../../lib"

export const account = () => {
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
                    class:"flex flex-col gap-3 mt-11"
                },
                children:[
                    Box({
                        element:"Div",
                        attr:{
                            class:"flex relative rounded-3xl bg-slate-300 w-80 p-1 border border-2 focus-within:border-yellow-500"
                        },
                        children:[
                            Box({
                                element:"img",
                                attr:{
                                    class:"absoulute",
                                    src:"/image2/image 3.png"
                                },
                            }),
                            Box({
                                element:"input",
                                attr:{
                                    placeholder:"Adimas",
                                    class:"rounded-3xl bg-slate-300 w-80 p-4 text-lg outline-none"
                                },
                                children:"Adimas"
                            })
                        ]
                    }),
                    textField({placeholder:"Mail"}),
                    textField({placeholder:"Contact"}),
                    textField({placeholder:"Address"}),
                ]
            }),
            heder({
                attr:{
                    class:"flex mt-80 bg-white  justify-between border border-t-slate-300"
                },
                image1:"/image2/home (1).png",
                image2:"/image/bell.png",
                image3:"/image2/shopping-cart (2).png",
                image4:"/image2/settings (1).png"
            })
        ]
    })
}
// <Div class="gap-3 text-black mt-80"