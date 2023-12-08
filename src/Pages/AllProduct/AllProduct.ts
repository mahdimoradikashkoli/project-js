import {  product } from "../../Components"
import { Box } from "../../lib"

export const allProduct= () => {
    return Box({
        element:"div",
        attr:{
            class:"p-8"
        },
        children:[
            
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
    })
    
}