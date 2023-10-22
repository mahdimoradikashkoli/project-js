import { button,heder } from "../../Components"
import { Box } from "../../lib"

export const singleProduct = () => {
    return Box({
        element:"Div",
        attr:{
            class:"p-8"
        },
        children:[Box({
            element:"Div",
            attr:{
                class:"flex items-center justify-between"
            },
            children:[Box({
                element:"img",
                attr:{
                    src:"/image2/arrow-left-circle.png"
                }
            }),
            Box({
                element:"h1",
                attr:{
                    class:"font-bold text-yellow-500 text-2xl"
                },
                children:"Shop"
            }),
            Box({
                element:"img",
                attr:{
                    src:"/image2/search.png"
                }
            })]
        }),
        Box({
            element:"Div",
            attr:{
                class:"flex flex-col items-center mt-28 gap-4"
            },
            children:[Box({
                element:"img",
                attr:{
                    class:"bg-white shadow-xl rounded-xl",
                    src:"/image2/buah.png"
                }
            }),
            Box({
                element:"p",
                attr:{
                    class:"font-medium text-base"
                },
                children:"Melon"
            }),Box({
                element:"Div",
                attr:{
                    class:"text-lg text-orange-300 flex items-center bg-slate-200 rounded-xl px-2",
                },
                children:[Box({
                    element:"img",
                    attr:{
                        class:"",
                        src:"/image2/chevron-down (1).png",
                    },
                }),Box({
                    element:"h1",
                    attr:{
                        class:"text-lg text-yellow-500",
                    },
                    children:"1kg"
                }),
                Box({
                    element:"img",
                    attr:{
                        class:"",
                        src:"/image2/chevron-up (1).png",
                    },
                }),]
            }),
            Box({
                element:"h1",
                attr:{
                    class:"text-3xl font-bold text-yellow-500 mt-4"
                },
                children:"$998 US"
            })]
        }),
        button({children:"Add to Cart"}),
        heder({
            attr:{
                class:" flex mt-8 bg-white  justify-between border border-t-slate-300"
            },
            image1:"/image2/home (1).png",
            image2:"/image/bell.png",
            image3:"/image2/shopping-cart (1).png",
            image4:"/image/settings.png"

        })
        ]
    })
}

//<Div class="mt-28 text-2xl font-medium text-base"