import { search } from "../../Components"
import { Box } from "../../lib"

export const searchPage = () => {
    return Box({
        element:'div',
        attr:{
            class:"p-8"
        },
        children:[Box({
            element:"div",
            attr:{
                class:"flex justify-between"
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
        search()]
    })
}