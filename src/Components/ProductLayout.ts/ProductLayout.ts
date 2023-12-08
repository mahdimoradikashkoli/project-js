import { footer, navigation } from ".."
import { Box, BoxProps } from "../../lib"

export const productLayout =(props:{children:BoxProps["children"],href:string,pageName:string,img1?:string,img2?:string,img3?:string,img4?:string})=>{
    return(
        Box({
            element:"div",
            attr:{
                class:""
            },
            children:[
                (location.pathname === "/productlayout/deliveryaddress2") ? 
                Box({
                    element:"div",
                    attr:{
                        class:"flex flex-col items-center"
                    },
                    children:Box({
                        element:"div",
                        attr:{
                            class:"flex fixed top-0 z-10 w-full py-2 px-3 bg-slate-300 rounded-lg items-center gap-10"
                        },
                        children:[
                            Box({
                                element:"button",
                                children:Box({
                                    element:"img",
                                    attr:{
                                        src:"/image2/arrow-left-circle.png",
                                        onClick:()=>{
                                            location.assign("/productlayout/deliveryaddress")
                                        }
                                    }
                                })
                            }),
                            Box({
                                element:"h1",
                                attr:{
                                    class:"font-bold text-yellow-500 text-xl"
                                },
                                children:"Delivery Address"
                            })
                        ]
                    })
                        
                    
                }) :Box({
                    element:"div",
                    attr:{
                        class:"flex flex-col items-center"
                    },
                    children:navigation({children:props.pageName,attr:{class:"flex fixed top-0 z-10 w-full py-2 px-3 bg-slate-300 rounded-lg items-center justify-between"},href:props.href}),
                })
                ,
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
                        image1:props.img1,
                        image2:props.img2,
                        image3:props.img3,
                        image4:props.img4
                
                    })
                })
            ]
        })
    )
}