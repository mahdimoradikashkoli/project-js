import { button, heder, navigation, textField } from "../../Components"
import { Box } from "../../lib"

export const deliveryAddress= () => {
    return Box({
        element:"Div",
        attr:{
            class:"p-8"
        },
        children:[
            navigation({children:"Delivery Address", attr:{class:"flex items-center justify-between"}}),
            Box({
                element:"Div",
                attr:{
                    class:"flex mt-8 shadow-lg rounded-md bg-white px-12 items-center justify-between max-w-sm h-20"
                },
                children:[
                    Box({
                        element:"img",
                        attr:{
                            src:"/image2/Pin_fill.png"
                        }
                    }),
                    Box({
                        element:"img",
                        attr:{
                            src:"/image2/Credit card_fill.png"
                        }
                    })
                ]
            }),
            Box({
                element:"Div",
                attr:{
                    class:"mt-12 gap-9 flex flex-col"
                },
                children:[
                    textField({placeholder:"Full Name"}),
                    textField({placeholder:"Phone Number"}),
                    textField({placeholder:"Street Address"})
                ]
            }),
            button({children:"Continue"}),
            heder({
                attr:{
                    class:"flex mt-8 bg-white  justify-between border border-t-slate-300"
                },
                image1:"/image2/home (1).png",
                image2:"/image/bell.png",
                image3:"/image2/shopping-cart (1).png",
                image4:"/image/settings.png"
    
            })

        ]

    })
}

// <Div class="text-xl gap-9  max-w-sm mt-12 h-20 mt-8 justify-evenly shadow-md"