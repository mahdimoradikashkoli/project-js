import { Box } from "../../lib"

export const orderReport = () => {

    const getidproduct=localStorage.getItem("productid")
    const parsIdProduct=getidproduct?JSON.parse(getidproduct):null
    return Box({
        element:"div",
        attr:{
            class:"flex flex-col"
        },
        children:[
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
                    children:"Order Place, Your Order Number is #"+ parsIdProduct
                })]
            })
        ]
    })
   
}
// <div class="absolute w-60 relative text-center"