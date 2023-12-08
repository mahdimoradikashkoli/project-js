import { footer, navbar } from ".."
import { Box, BoxProps } from "../../lib"

export const layout=(props:{children:BoxProps["children"]})=>{

    const existUser=localStorage.getItem("login")
    const parseExistuser=existUser?JSON.parse(existUser):null

    return (
        Box({
            element:"div",
            children:[
                ( parseExistuser ? Box({
                    element:"div",
                    attr:{
                        class:"flex flex-col items-center"
                    },
                    children:Box({
                        element:"div",
                        attr:{
                            class:"w-full z-10 fixed top-0 flex items-center justify-center bg-slate-300 py-2 px-2 rounded-xl font-medium"
                        },
                        children:"Home Page"
                    })

                    
                }):Box({
                    element:"div",
                    attr:{
                        class:"flex flex-col items-center"
                    },
                    children: navbar({attr:{class:"w-full z-10 fixed top-0 flex items-center justify-between bg-slate-300 py-2 px-2 rounded-xl font-medium"}}),
                
                })),
                Box({
                    element:"div",
                    attr:{
                        class:""
                    },
                    children:props.children
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
                })
            ]
        })
    )
}